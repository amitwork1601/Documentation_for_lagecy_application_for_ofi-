# PaymentNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Payment\PaymentNormalizer.php`

## Summary
This Symfony serializer normalizer modifies payment data specifically for webmethod Pub/Sub payloads by replacing the individual payment amount with the parent order's total amount. It only activates when serializing Sylius payment objects in the context of webmethod order or subscription reads, ensuring that downstream systems receive the full order total rather than partial payment amounts.

## Classes
- `PaymentNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`
- **Description**: Adjusts the payment amount only for webmethod payloads.
/

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

