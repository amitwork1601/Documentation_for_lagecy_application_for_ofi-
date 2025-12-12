# PaymentApi.php

**Path**: `src\Gateway\Api\Paypal\PaymentApi.php`

## Summary
The `PaymentApi` class serves as a gateway service for creating PayPal payment orders within a Sylius e-commerce application. It authorizes the PayPal client, assigns order numbers, creates PayPal orders via the PayPal API, and extracts the approval URL link from the API response for redirecting customers to complete their payment. This class acts as an intermediary between the application's payment processing logic and PayPal's external payment API.

## Classes
- `PaymentApi`

## Function Details

### `createPaypalOrder`

- **Parameters**: `Payment $payment, string $referenceId`
- **Description**: @throws PaymentException
/

### `getHrefLinkByRel`

- **Parameters**: `array $links, string $rel = self::APPROVE_REL_LINK`

