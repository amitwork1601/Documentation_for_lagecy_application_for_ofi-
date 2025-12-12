# RepresentationNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\PaymentInstrument\RepresentationNormalizer.php`

## Summary
The `RepresentationNormalizer` class is a Symfony serializer normalizer that customizes the serialization output of `PaymentInstrument` entities by adding gateway-specific representation data (such as card details) from payment gateways that implement the `InstrumentCardGatewayInterface`. It operates conditionally based on serialization groups (like admin/shop contexts for orders, subscriptions, and instruments) and enriches the normalized payment instrument data with additional information retrieved from the configured payment gateway before returning it.

## Classes
- `RepresentationNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: @param PaymentInstrument $object

@throws ExceptionInterface
/

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

