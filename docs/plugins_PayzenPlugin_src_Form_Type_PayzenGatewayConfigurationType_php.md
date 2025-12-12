# PayzenGatewayConfigurationType.php

**Path**: `plugins\PayzenPlugin\src\Form\Type\PayzenGatewayConfigurationType.php`

## Summary
This Symfony form type defines the configuration form for integrating the Payzen payment gateway into a Sylius e-commerce application. It collects essential payment gateway credentials and settings including API endpoints (standard and webservice), site ID, security certificate, environment mode (TEST/PRODUCTION), and optional directory and debug parameters, with validation to ensure required fields are populated.

## Classes
- `PayzenGatewayConfigurationType`

## Function Details

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

