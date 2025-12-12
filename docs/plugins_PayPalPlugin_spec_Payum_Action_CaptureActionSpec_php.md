# CaptureActionSpec.php

**Path**: `plugins\PayPalPlugin\spec\Payum\Action\CaptureActionSpec.php`

## Summary
This is a PHPSpec test specification for a PayPal payment capture action in the Sylius e-commerce platform. It tests the `CaptureAction` class which handles the payment capture workflow by authorizing the PayPal client, creating PayPal orders via API calls, and associating the response data with Sylius payment entities. The spec verifies that the action properly implements the Payum ActionInterface and coordinates between PayPal's API services and Sylius's order/payment domain models.

## Classes
- `CaptureActionSpec`

## Function Details

### `it_implements_action_interface`


### `it_throws_an_exception_if_request_type_is_invalid`

- **Parameters**: `GetStatus $request`

### `it_does_not_support_request_other_than_capture`

- **Parameters**: `GetStatus $request`

### `it_does_not_support_request_with_first_model_other_than_payment`

- **Parameters**: `Capture $request`

