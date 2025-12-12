# CheckoutComGatewayTrait.php

**Path**: `src\Gateway\Api\CheckoutCom\CheckoutComGatewayTrait.php`

## Summary
This trait provides utility methods for handling Checkout.com payment gateway integration in a Sylius-based e-commerce application. It offers error handling functionality by extracting and translating error codes and response codes from the Checkout.com API, and includes a method to identify whether a payment method is configured to use Checkout.com based on its gateway configuration name prefix.

## Function Details

### `getErrorDetails`

- **Parameters**: `mixed $errorDetails`

### `getResponseCodeDetails`

- **Parameters**: `?string $responseCode`

### `isCheckoutComPayment`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

