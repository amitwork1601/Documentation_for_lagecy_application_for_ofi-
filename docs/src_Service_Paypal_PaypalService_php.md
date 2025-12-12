# PaypalService.php

**Path**: `src\Service\Paypal\PaypalService.php`

## Summary
The `PaypalService` class provides PayPal payment integration functionality for an e-commerce system built on Sylius. It handles PayPal order creation, payment authorization, and webhook processing by coordinating between the Sylius order management system and PayPal's API, enabling customers to complete purchases using PayPal as a payment method.

## Classes
- `PaypalService`

## Function Details

### `getFormTokenForPayment`

- **Parameters**: `Order $order`

### `completeOrder`

- **Parameters**: `string $orderId, string $payerId`
- **Description**: @var ?PaymentInterface $payment */
$payment = $order-&gt;getLastPayment([BasePaymentInterface::STATE_CART, BasePaymentInterface::STATE_NEW]);
if (null === $payment) {
return [
'success' =&gt; false,
];
}

/** @var PaymentMethodInterface $paymentMethod */
$paymentMethod = $payment-&gt;getMethod();

$token = $this-&gt;authorizeClientApi-&gt;authorize($paymentMethod);
$referenceId = $this-&gt;uuidProvider-&gt;provide();

$this-&gt;orderNumberAssigner-&gt;assignNumber($order);
$orderDetails = $this-&gt;createOrderApi-&gt;create($token, $payment, $referenceId);

if ('CREATED' === $this-&gt;getDetailsStatus($orderDetails)) {
$details = [
'status' =&gt; StatusAction::STATUS_CREATED,
'paypal_order_id' =&gt; $orderDetails['id'],
'reference_id' =&gt; $referenceId,
'details' =&gt; $orderDetails,
];

$origin = $this-&gt;getOrigin();
if (null !== $origin) {
$details['origin'] = $origin;
}

$payment-&gt;setDetails($details);
$this-&gt;em-&gt;flush();

return [
'error' =&gt; false,
'formToken' =&gt; $orderDetails['id'],
'link' =&gt; $this-&gt;getHrefLinkByRel($orderDetails['links']),
'success' =&gt; true,
];
}

return [
'error' =&gt; $this-&gt;translator-&gt;trans('app.ui.payment.error.token_paypal'),
'formToken' =&gt; false,
'link' =&gt; null,
'success' =&gt; false,
'details' =&gt; $orderDetails,
];
}

/**
@throws SMException
/

### `getDetailsStatus`

- **Parameters**: `array $orderDetails`
- **Description**: @return false|string
/

### `getHrefLinkByRel`

- **Parameters**: `array $links, string $rel = self::APPROVE_REL_LINK`

### `getOrigin`


