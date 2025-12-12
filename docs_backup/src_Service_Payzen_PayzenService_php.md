# PayzenService.php

**Path**: `src\Service\Payzen\PayzenService.php`

## Summary
The `PayzenService` class serves as a service layer for integrating with the Payzen payment gateway in a Sylius e-commerce application. It provides methods to generate payment form tokens for both standard payments and pre-authorization transactions, ensuring that orders are assigned unique numbers before processing payment requests through the Payzen SDK client.

## Classes
- `PayzenService`

## Function Details

### `getFormTokenForPayment`

- **Parameters**: `Order $order`
- **Description**: Generate form token for payment.
/

### `getFormTokenForPreAuthorization`

- **Parameters**: `Order $order`
- **Description**: Generate form token for pre-authorization.
/

