# AuthorizeActionSpec.php

**Path**: `plugins\PayPalPlugin\spec\Payum\Action\AuthorizeActionSpec.php`

## Summary
This is a PHPSpec test specification for the `AuthorizeAction` class in Sylius's PayPal plugin. It verifies that the action correctly handles payment authorization requests by marking payments with a "created" status, implements the Payum ActionInterface, and properly validates that it only supports `Authorize` requests with `PaymentInterface` models while rejecting unsupported request types.

## Classes
- `AuthorizeActionSpec`

## Function Details

### `it_implements_action_interface`


### `it_throws_an_exception_if_request_type_is_invalid`

- **Parameters**: `GetStatus $request`

### `it_does_not_support_request_other_than_authorize`

- **Parameters**: `Capture $request`

### `it_does_not_support_request_with_first_model_other_than_payment`

- **Parameters**: `Authorize $request`

