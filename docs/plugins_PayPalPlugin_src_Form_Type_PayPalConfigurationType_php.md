# PayPalConfigurationType.php

**Path**: `plugins\PayPalPlugin\src\Form\Type\PayPalConfigurationType.php`

## Summary
This Symfony form type defines the configuration form for PayPal payment gateway integration in a Sylius e-commerce application. It collects PayPal API credentials (client ID, client secret, merchant ID), SFTP credentials for transaction reports, and order flow URLs (return/cancel URLs), with most sensitive fields set as readonly to prevent manual modification. The form also forces the use of authorization mode to ensure proper order creation timing within the Sylius-Payum integration workflow.

## Classes
- `PayPalConfigurationType`

## Function Details

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

