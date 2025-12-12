# GatewayAbstractType.php

**Path**: `src\Form\Type\Checkoutcom\GatewayAbstractType.php`

## Summary
This abstract form type class defines the base configuration form for Checkout.com payment gateway integration in a Symfony application. It provides common form fields for environment selection (sandbox/production), OAuth 2.0 credentials (client ID and secret), and API keys (public key) that are needed to configure the Checkout.com payment gateway. The class uses the Template Method pattern with an abstract `buildFormExtended()` method, allowing concrete implementations to add additional gateway-specific configuration fields while maintaining these core authentication fields.

## Classes
- `GatewayAbstractType`

## Function Details

### `buildFormExtended`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

