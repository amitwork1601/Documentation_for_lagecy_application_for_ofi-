# IpnController.php

**Path**: `plugins\PayzenPlugin\src\Controller\IpnController.php`

## Summary
The `IpnController` handles Instant Payment Notifications (IPN) from the Payzen payment gateway for processing payment status updates in a Sylius e-commerce system. It receives webhook callbacks from Payzen, validates the payment status, and applies appropriate state transitions to both the payment and order entities (such as marking payments as completed or failed) while persisting changes to the database.

## Classes
- `IpnController`

## Function Details

### `__invoke`

- **Parameters**: `Request $request, string $orderId`

### `markFailed`

- **Parameters**: `PaymentInterface $payment`
- **Description**: @var OrderInterface|null $order */
$order = $this-&gt;orderRepository-&gt;find($orderId);
if (null === $order) {
throw new InvalidArgumentException(Response::HTTP_UNPROCESSABLE_ENTITY, \sprintf('Order with id "%s" does not exist.', $orderId));
}

$rawAnswer = $payzenClient-&gt;getFormAnswer();
if (!empty($rawAnswer)) {
$formAnswer = $rawAnswer['kr-answer'];
$orderStatus = $formAnswer['orderStatus'];
Assert::inArray($orderStatus, ['PAID', 'UNPAID']);

/** @var PaymentInterface|null $payment */
$payment = $this-&gt;getPayment($rawAnswer, $order);
Assert::notNull($payment);

if (PaymentInterfaceAlias::STATE_NEW !== $payment-&gt;getState()) {
if (!$this-&gt;paymentTransitionApplicator-&gt;can($payment, PaymentTransitions::TRANSITION_CREATE)) {
$order-&gt;addPayment(
$payment = $this-&gt;orderPaymentProvider-&gt;provideOrderPayment($order, PaymentInterfaceAlias::STATE_CART)
);

try {
$this-&gt;em-&gt;persist($payment);
} catch (ORMException $e) {
$this-&gt;logger?-&gt;critical($e-&gt;getMessage(), ['exception' =&gt; $e]);
throw new InvalidArgumentException(Response::HTTP_UNPROCESSABLE_ENTITY, \sprintf('Order with id "%s", can\'t be processed.', $orderId));
}
}

try {
$this-&gt;paymentTransitionApplicator-&gt;apply($payment, PaymentTransitions::TRANSITION_CREATE);
} catch (SMException $e) {
$this-&gt;logger?-&gt;critical($e-&gt;getMessage(), ['exception' =&gt; $e]);
throw new InvalidArgumentException(Response::HTTP_UNPROCESSABLE_ENTITY, \sprintf('Order with id "%s", can\'t be processed.', $orderId));
}
}

$payment-&gt;setDetails($this-&gt;makeUniformPaymentDetails($formAnswer));

$response = 'KO';
switch ($orderStatus) {
case 'PAID':
$response = $this-&gt;handlePaidResponse($order, $payment, $formAnswer);
break;
case 'UNPAID':
try {
$this-&gt;paymentTransitionApplicator-&gt;apply($payment, PaymentTransitions::TRANSITION_FAIL);
} catch (SMException $e) {
$this-&gt;logger?-&gt;critical($e-&gt;getMessage(), ['exception' =&gt; $e]);
throw new InvalidArgumentException(Response::HTTP_UNPROCESSABLE_ENTITY, \sprintf('Order with id "%s", can\'t be processed.', $orderId));
}
$response = 'SUCCESS';
break;
}

$this-&gt;em-&gt;flush();

return new Response($response);
}

$this-&gt;payum-&gt;getHttpRequestVerifier()-&gt;invalidate($token);

return new Response('Invalid form answer from payzen');
}

private function handlePaidResponse(OrderInterface $order, PaymentInterface $payment, $formAnswer): string
{
$payzenTotal = (int) $formAnswer['orderDetails']['orderTotalAmount'];
if ($payzenTotal !== $order-&gt;getTotal() || $payzenTotal !== $payment-&gt;getAmount()) {
$payment-&gt;setAmount($payzenTotal);
$this-&gt;orderPaymentStateResolver-&gt;resolve($order);
}

try {
$this-&gt;orderCheckoutTransitionApplicator-&gt;apply($order, OrderCheckoutTransitions::TRANSITION_COMPLETE);
$this-&gt;paymentTransitionApplicator-&gt;apply($payment, PaymentTransitions::TRANSITION_COMPLETE);
} catch (SMException $e) {
$this-&gt;logger?-&gt;critical($e-&gt;getMessage(), ['exception' =&gt; $e]);
throw new InvalidArgumentException(Response::HTTP_UNPROCESSABLE_ENTITY, \sprintf('Order with id "%s", can\'t be processed.', $order-&gt;getId()));
}

return 'SUCCESS';
}

private function getPayment(array $rawAnswer, OrderInterface $order): ?PaymentInterface
{
if ($this-&gt;propertyAccessor-&gt;isReadable($rawAnswer, '[kr-answer][transactions][0][metadata][payment_id]')) {
$paymentIdMetadata = $this-&gt;propertyAccessor-&gt;getValue(
$rawAnswer,
'[kr-answer][transactions][0][metadata][payment_id]'
);

if (null !== $paymentIdMetadata) {
return $this-&gt;paymentRepository-&gt;findOneBy(['id' =&gt; $paymentIdMetadata]);
}
}

// Fallback for previous Payzen Payment created without metadata
return $order-&gt;getLastPayment(PaymentInterfaceAlias::STATE_NEW);
}

/**
@throws SMException
/

### `makeUniformPaymentDetails`

- **Parameters**: `$formAnswer`

