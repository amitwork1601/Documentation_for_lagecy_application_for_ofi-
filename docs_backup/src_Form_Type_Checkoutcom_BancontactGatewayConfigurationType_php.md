# BancontactGatewayConfigurationType.php

**Path**: `src\Form\Type\Checkoutcom\BancontactGatewayConfigurationType.php`

## Summary
This Symfony form type configures the Bancontact payment gateway integration for Checkout.com by defining language/region settings. It extends a gateway abstract type and provides a form field allowing users to select from four supported client languages (French, Dutch, German, and English) mapped to their corresponding country codes, which are used to localize the Bancontact payment interface.

## Classes
- `BancontactGatewayConfigurationType`

## Function Details

### `buildFormExtended`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `getAvailableCountries`


### `getCountryName`

- **Parameters**: `string $code`

