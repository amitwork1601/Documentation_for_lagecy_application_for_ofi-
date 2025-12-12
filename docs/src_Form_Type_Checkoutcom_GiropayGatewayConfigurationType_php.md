# GiropayGatewayConfigurationType.php

**Path**: `src\Form\Type\Checkoutcom\GiropayGatewayConfigurationType.php`

## Summary
This class defines a Symfony form type for configuring the Giropay payment gateway (a German online banking payment method) within the Checkout.com payment integration. It extends `GatewayAbstractType` but provides no additional form fields through its empty `buildFormExtended` method, indicating that Giropay either uses only the base gateway configuration from its parent class or serves as a placeholder for future Giropay-specific settings.

## Classes
- `GiropayGatewayConfigurationType`

## Function Details

### `buildFormExtended`

- **Parameters**: `FormBuilderInterface $builder, array $options`

