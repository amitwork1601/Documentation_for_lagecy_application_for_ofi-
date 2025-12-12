# MondialRelayGatewayConfigurationType.php

**Path**: `src\Form\Type\Shipping\Gateway\MondialRelayGatewayConfigurationType.php`

## Summary
This Symfony form type class configures the integration settings for the Mondial Relay shipping gateway, a European parcel delivery service. It builds a form with fields for API credentials (enseigne/brand ID, API key, and API URL) and defines available countries (BE, ES, FR, LU) where the shipping service operates. The form enforces validation constraints to ensure all API configuration fields are properly filled out before the shipping gateway can be activated.

## Classes
- `MondialRelayGatewayConfigurationType`

## Function Details

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `getAvailableCountries`


### `getCountryName`

- **Parameters**: `string $code`

