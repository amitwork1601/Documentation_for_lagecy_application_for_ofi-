# ChoosePaymentMethodHandler.php

**Path**: `src\Api\CommandHandler\Checkout\ChoosePaymentMethodHandler.php`

## Summary
This command handler processes the selection of a payment method during the checkout flow in an e-commerce system. It retrieves an order, applies the chosen payment method, transitions the order through the checkout state machine, and returns payment gateway configuration data needed for the frontend to initialize the payment process. The handler coordinates multiple services including order locking, payment provisioning, state management, and gateway registry to ensure proper payment method assignment and order state transitions.

## Classes
- `ChoosePaymentMethodHandler`

## Function Details

### `__invoke`

- **Parameters**: `ChoosePaymentMethod $choosePaymentMethod`

### `updateOrderTrackingData`

- **Parameters**: `Order $order, ChoosePaymentMethod $choosePaymentMethod`
- **Description**: @var Order|null $cart */
$cart = $this-&gt;orderRepository-&gt;findCartByTokenValue($choosePaymentMethod-&gt;orderTokenValue);
Assert::notNull($cart, 'Cart has not been found.');

if (!$this-&gt;stateMachine-&gt;can($cart, OrderCheckoutTransitions::GRAPH, OrderCheckoutTransitions::TRANSITION_SELECT_PAYMENT)) {
throw new UnprocessableEntityHttpException('Unable to transition to selected_payment');
}

$oldShippingMethod = $cart-&gt;getLastShipmentMethod()-&gt;getId();

$lock = $this-&gt;orderLockFactory-&gt;create($cart);

$oldShippingMethod = $cart-&gt;getLastShipmentMethod()-&gt;getId();

/** @var ?Payment $payment */
$payment = $this-&gt;paymentRepository-&gt;findOneByOrderId($choosePaymentMethod-&gt;paymentId, $cart-&gt;getId());
Assert::notNull($payment, 'Can not find payment with given identifier.');

if (!$payment-&gt;isInEditableState()) {
$payment = $cart-&gt;getLastPayment(PaymentInterfaceAlias::STATE_CART);
if (!$payment) {
$this-&gt;entityManager-&gt;persist(
$payment = $this-&gt;paymentProvider-&gt;provideOrderPayment($cart, PaymentInterfaceAlias::STATE_CART)
);
$cart-&gt;addPayment($payment);
}
}

$payment-&gt;setMethod($choosePaymentMethod-&gt;paymentMethod);
$payment-&gt;setDetails([]);

// Update tracking data from the command
$this-&gt;updateOrderTrackingData($cart, $choosePaymentMethod);

$this-&gt;stateMachine-&gt;apply($cart, OrderCheckoutTransitions::GRAPH, OrderCheckoutTransitions::TRANSITION_SELECT_PAYMENT);
$this-&gt;orderProcessor-&gt;process($cart);

/** @var PaymentMethod|null $method */
$method = $payment-&gt;getMethod();

/** @var PaymentGatewayInterface|null $gateway */
$gateway = $this-&gt;gatewayRegistry-&gt;get(
GatewayRegistryInterface::PAYMENT_METHOD,
$method?-&gt;getGatewayConfig()
);

try {
$publicConfiguration = $gateway?-&gt;getPaymentPublicConfig($payment);
$this-&gt;logger-&gt;info(
\sprintf('Payment method %s has been updated.', $payment-&gt;getMethod()?-&gt;getName()),
['publicConfiguration' =&gt; $publicConfiguration]
);
} catch (\Exception|PaymentException $e) {
$this-&gt;logger-&gt;critical(
\sprintf('An error occurred while updating payment method : %s', $e-&gt;getMessage()),
['exception' =&gt; $e]
);
throw new UnprocessableEntityHttpException('Unable to update payment method', $e);
} finally {
$lock-&gt;release();
}

// we do after $lock-&gt;release() because there is a lock in UnaddressedOrderHandler
// unaddresse order if shipping method has changed
$newShippingMethod = $cart-&gt;getLastShipmentMethod()-&gt;getId();
if ($this-&gt;unaddressedOrderApplicator-&gt;apply($oldShippingMethod, $newShippingMethod, $cart)) {
$publicConfiguration = [];
}

return $this-&gt;paymentPublicConfig-&gt;create($payment, $publicConfiguration ?? []);
}

/**
Update order with tracking data from the payment method selection.
/

