# WebhookService.php

**Path**: `plugins\PayPalPlugin\src\Service\WebhookService.php`

## Summary
The `WebhookService` class handles PayPal webhook notifications for processing payment state transitions in the Sylius e-commerce platform. It manages the complete payment lifecycle by responding to PayPal events, updating payment statuses (declined, completed, requires action), resolving order states through state machines, and synchronizing payment data between PayPal and Sylius using various PayPal API clients (authorize, complete order, order details).

## Classes
- `WebhookService`

## Function Details

### `isValidPaypalOrder`

- **Parameters**: `string $paypalOrderID, string $payerId`

### `handlePaypalOrder`

- **Parameters**: `string $paypalOrderID`
- **Description**: @var PaymentMethodInterface $paymentMethod */
$paymentMethod = $payment-&gt;getMethod();
$token = $this-&gt;authorizeClientApi-&gt;authorize($paymentMethod);

// Retrieve order details
$details = $this-&gt;orderDetailsApi-&gt;get($token, $paypalOrderID);

return $this-&gt;propertyAccessor-&gt;getValue($details, '[payer][payer_id]') === $payerId;
}

/**
@throws \SM\SMException
/

### `ensureOrderCompleted`

- **Parameters**: `OrderInterface $order`
- **Description**: @var OrderInterface $order */
$order = $payment-&gt;getOrder();

$stateMachine = $this-&gt;stateMachineFactory-&gt;get($payment, PaymentTransitions::GRAPH);
if ($stateMachine-&gt;can(PaymentTransitions::TRANSITION_CREATE)) {
$stateMachine-&gt;apply(PaymentTransitions::TRANSITION_CREATE);
}

/** @var PaymentMethodInterface $paymentMethod */
$paymentMethod = $payment-&gt;getMethod();
$token = $this-&gt;authorizeClientApi-&gt;authorize($paymentMethod);

// Retrieve Paypal order details
$details = $this-&gt;orderDetailsApi-&gt;get($token, $paypalOrderID);

switch ($this-&gt;propertyAccessor-&gt;getValue($details, '[status]')) {
case 'APPROVED':
if ($this-&gt;isOrderFullyPaid($paypalOrderID, $payment, $token)) {
$this-&gt;ensureOrderCompleted($order);
$this-&gt;_captureOrder($paypalOrderID, $payment, $token);
}
break;
case 'COMPLETED':
if ($this-&gt;isOrderFullyPaid($paypalOrderID, $payment, $token)) {
$this-&gt;ensureOrderCompleted($order);
$this-&gt;_markOrderStatus($details, $payment, StatusAction::STATUS_COMPLETED);
}
break;
case 'CREATED':
// Do nothing for now
break;
default:
if (isset($details['debug_id'])) {
$this-&gt;_processError($details, $payment);
} else {
$this-&gt;_markOrderStatus($details, $payment, StatusAction::STATUS_PROCESSING);
}
break;
}
}
}

/**
@throws \SM\SMException
/
public function isOrderFullyPaid(
string $paypalOrderID,
PaymentInterface $payment,
?string $token = null,
bool $processError = true,
): bool {
if (null === $token) {
/** @var PaymentMethodInterface $paymentMethod */
$paymentMethod = $payment-&gt;getMethod();
$token = $this-&gt;authorizeClientApi-&gt;authorize($paymentMethod);
}

/** @var OrderInterface $order */
$order = $payment-&gt;getOrder();

// Retrieve Paypal order details
$details = $this-&gt;orderDetailsApi-&gt;get($token, $paypalOrderID);

// Update Payment amount
/** @var float|null $totalPaypal */
$totalPaypal = $this-&gt;propertyAccessor-&gt;getValue($details, '[purchase_units][0][amount][value]');

if (null === $totalPaypal) {
return false;
}

$totalPaypalInt = (int) round($totalPaypal * 100);
if ($totalPaypalInt !== $order-&gt;getTotal()) {
if ($processError) {
// Update amount paid
$this-&gt;payPalPaymentUpdater-&gt;updateAmount($payment, $totalPaypalInt);
$this-&gt;orderPaymentStateResolver-&gt;resolve($order);

// Mark payment as failed for partial payment
$this-&gt;_processError([
'name' =&gt; 'PARTIAL_PAYMENT',
'message' =&gt; \sprintf(
'The paid total of the Paypal order %s does not match the total of the Sylius order %s',
$totalPaypalInt,
$order-&gt;getTotal()
),
], $payment);
}

return false;
}

return true;
}

/**
@throws \SM\SMException
/

### `_captureOrder`

- **Parameters**: `string $paypalOrderID, PaymentInterface $payment, string $token`
- **Description**: @throws \SM\SMException
/

### `_markOrderStatus`

- **Parameters**: `array $orderDetails, PaymentInterface $payment, string $status`
- **Description**: @var OrderInterface $order */
$order = $payment-&gt;getOrder();

// Call to capture Paypal order
$detailsComplete = $this-&gt;completeOrderApi-&gt;complete($token, $paypalOrderID);

// Retrieve Paypal order details
$details = $this-&gt;orderDetailsApi-&gt;get($token, $paypalOrderID);

// Update Payment amount
/** @var float|null $totalPaypal */
$totalPaypal = $this-&gt;propertyAccessor-&gt;getValue($details, '[purchase_units][0][amount][value]');
if (null !== $totalPaypal) {
$totalPaypalInt = (int) round($totalPaypal * 100);
if ($totalPaypalInt !== $order-&gt;getTotal()) {
$this-&gt;payPalPaymentUpdater-&gt;updateAmount($payment, $totalPaypalInt);
$this-&gt;orderPaymentStateResolver-&gt;resolve($order);
}
}

/** @var string|null $orderDetailstatus */
$orderDetailstatus = $this-&gt;propertyAccessor-&gt;getValue($details, '[status]');

if (StatusAction::STATUS_COMPLETED === $orderDetailstatus
|| StatusAction::STATUS_PROCESSING === $orderDetailstatus) {
$this-&gt;_markOrderStatus($details, $payment, $orderDetailstatus);
} else {
if (isset($detailsComplete['debug_id'])) {
$this-&gt;_processError($detailsComplete, $payment);
}
}
}

/**
@throws \SM\SMException
/

### `_processError`

- **Parameters**: `array $err, PaymentInterface $payment`
- **Description**: @throws \SM\SMException
/

### `_isProcessorDeclineError`

- **Parameters**: `array $err`

### `_isUnprocessableEntityError`

- **Parameters**: `array $err`

