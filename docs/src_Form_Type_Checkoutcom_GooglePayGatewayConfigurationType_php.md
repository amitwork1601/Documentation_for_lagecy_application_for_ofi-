# GooglePayGatewayConfigurationType.php

**Path**: `src\Form\Type\Checkoutcom\GooglePayGatewayConfigurationType.php`

## Summary
This Symfony form type defines the configuration interface for Google Pay integration with Checkout.com payment gateway. It allows administrators to configure allowed authentication methods (PAN_ONLY, CRYPTOGRAM_3DS) and supported card networks (AMEX, DISCOVER, JCB, MASTERCARD, VISA) through dynamic collection fields that can be added or removed as needed.

## Classes
- `GooglePayGatewayConfigurationType`

## Function Details

### `buildFormExtended`

- **Parameters**: `FormBuilderInterface $builder, array $options`

