# ResponseNormalizerClient.php

**Path**: `src\TalonOne\Core\IntegrationApi\Decorator\ResponseNormalizerClient.php`

## Summary
The `ResponseNormalizerClient` class is a decorator for the TalonOne Integration API client that normalizes and deserializes API responses into DTOs (Data Transfer Objects) while providing structured error handling. It intercepts API calls, transforms successful responses using Symfony's serializer, and converts HTTP exceptions (404, 401, etc.) into domain-specific exceptions like `TalonOneCriticalException` and `IntegrationClientException` for proper error management in the TalonOne integration layer.

## Classes
- `ResponseNormalizerClient`

## Function Details

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`

### `deserialize`

- **Parameters**: `TalonOneRequestInterface $request, string $response`

