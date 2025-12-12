# SelectPaymentType.php

**Path**: `plugins\PayPalPlugin\src\Form\Type\SelectPaymentType.php`

## Summary
This Symfony form type class defines the payment method selection step in the PayPal plugin's checkout process for Sylius e-commerce platform. It builds a form containing a collection of payments using `ChangePaymentMethodType` with `PaymentType` entries, allowing customers to select or change their payment method during checkout. The form is identified by the block prefix `sylius_checkout_select_payment` for template customization.

## Classes
- `SelectPaymentType`

## Function Details

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `getBlockPrefix`


