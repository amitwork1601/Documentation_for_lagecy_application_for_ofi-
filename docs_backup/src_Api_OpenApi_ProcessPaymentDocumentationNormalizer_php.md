# ProcessPaymentDocumentationNormalizer.php

**Path**: `src\Api\OpenApi\ProcessPaymentDocumentationNormalizer.php`

## Summary
This class is a Symfony service decorator that extends OpenAPI documentation for a payment processing endpoint in a Sylius e-commerce application. It adds custom schema definitions to the API documentation, specifically defining the request payload structure (with a `tokenCheckout` field) and response format (with `success` and `status` fields) for the Order payment processing operation. The normalizer intercepts and enhances the standard Hydra documentation to provide more detailed API specifications for payment-related endpoints.

## Classes
- `ProcessPaymentDocumentationNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

### `getSupportedTypes`

- **Parameters**: `?string $format`

### `getDocumentation`


