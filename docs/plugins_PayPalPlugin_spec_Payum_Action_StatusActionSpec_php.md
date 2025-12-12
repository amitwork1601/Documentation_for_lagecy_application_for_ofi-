# StatusActionSpec.php

**Path**: `plugins\PayPalPlugin\spec\Payum\Action\StatusActionSpec.php`

## Summary
This is a PHPSpec test specification for a PayPal payment status action in the Sylius e-commerce platform. It tests the `StatusAction` class which maps PayPal payment statuses (CREATED, CAPTURED, COMPLETED) to corresponding Sylius payment states (new, pending, captured) by implementing the Payum payment gateway's `ActionInterface`. The tests verify proper status translation and exception handling for unsupported requests during the payment processing workflow.

## Classes
- `StatusActionSpec`

## Function Details

### `it_implements_action_interface`


### `it_marks_request_as_new`

- **Parameters**: `GetStatus $request, PaymentInterface $payment`

### `it_marks_request_as_pending`

- **Parameters**: `GetStatus $request, PaymentInterface $payment`

### `it_marks_request_as_captured`

- **Parameters**: `GetStatus $request, PaymentInterface $payment`

### `it_throws_an_exception_if_request_is_not_supported`

- **Parameters**: `Capture $request`

### `it_does_not_support_request_other_than_get_status`

- **Parameters**: `Capture $request`

### `it_does_not_support_request_with_first_model_other_than_payment`

- **Parameters**: `GetStatus $request`

