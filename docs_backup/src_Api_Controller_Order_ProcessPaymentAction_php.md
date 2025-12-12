# ProcessPaymentAction.php

**Path**: `src\Api\Controller\Order\ProcessPaymentAction.php`

## Summary
This controller handles payment processing for orders in an e-commerce system. It retrieves an order by token, obtains the associated payment gateway (async payment), and processes the payment by delegating to the appropriate gateway implementation while returning a JSON response with the payment processing result including success status and payment state.

## Classes
- `ProcessPaymentAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

### `getPaymentData`

- **Parameters**: `array $requestBody`

