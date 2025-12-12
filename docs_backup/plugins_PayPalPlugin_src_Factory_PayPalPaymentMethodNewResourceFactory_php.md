# PayPalPaymentMethodNewResourceFactory.php

**Path**: `plugins\PayPalPlugin\src\Factory\PayPalPaymentMethodNewResourceFactory.php`

## Summary
This factory class is responsible for creating new PayPal payment method resources in the Sylius e-commerce system. It wraps the standard resource creation process and, when applicable, applies PayPal-specific onboarding processing to newly created payment methods before returning them. This enables special handling of PayPal payment methods during their initial setup, such as processing merchant onboarding requirements or configuration steps.

## Classes
- `PayPalPaymentMethodNewResourceFactory`

## Function Details

### `create`

- **Parameters**: `RequestConfiguration $requestConfiguration, FactoryInterface $factory`

