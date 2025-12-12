# ChangePaymentMethodType.php

**Path**: `plugins\PayPalPlugin\src\Form\Type\ChangePaymentMethodType.php`

## Summary
The `ChangePaymentMethodType` is a Symfony form type for managing payment method changes in the Sylius PayPal plugin. It filters a collection of payments to only allow modification of those in specific states (NEW, CART, or PROCESSING), automatically removing any payments in other states from the form using a POST_SET_DATA event listener. This ensures users can only change payment methods for payments that are still eligible for modification.

## Classes
- `ChangePaymentMethodType`

## Function Details

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `getParent`


### `getBlockPrefix`


