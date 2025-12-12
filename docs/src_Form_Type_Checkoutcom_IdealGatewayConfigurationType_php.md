# IdealGatewayConfigurationType.php

**Path**: `src\Form\Type\Checkoutcom\IdealGatewayConfigurationType.php`

## Summary
This Symfony form type configures the iDEAL payment gateway integration for Checkout.com by defining language/country selection options. It extends a gateway abstract type and adds a `client_language` field that allows users to choose between Dutch (NL) and English (GB) language options, mapping language codes to their corresponding country codes for the payment gateway configuration.

## Classes
- `IdealGatewayConfigurationType`

## Function Details

### `buildFormExtended`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `getAvailableCountries`


### `getCountryName`

- **Parameters**: `string $code`

