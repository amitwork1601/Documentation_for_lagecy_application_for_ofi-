# PaymentMethodTypeExtension.php

**Path**: `plugins\PayPalPlugin\src\Form\Extension\PaymentMethodTypeExtension.php`

## Summary
This Symfony form extension modifies the PaymentMethodType form specifically for PayPal payment methods by converting the 'enabled' field from a standard input to a hidden field when the gateway factory is 'sylius.pay_pal'. The extension exists to customize the payment method configuration form behavior for PayPal, likely to prevent manual enabling/disabling of PayPal payment methods through the standard admin interface while preserving the enabled state.

## Classes
- `PaymentMethodTypeExtension`

## Function Details

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `getExtendedTypes`


