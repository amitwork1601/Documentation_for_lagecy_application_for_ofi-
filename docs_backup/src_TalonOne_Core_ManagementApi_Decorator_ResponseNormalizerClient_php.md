# ResponseNormalizerClient.php

**Path**: `src\TalonOne\Core\ManagementApi\Decorator\ResponseNormalizerClient.php`

## Summary
This decorator class wraps the TalonOne Management API client to handle response normalization and error handling. It deserializes successful API responses into DTOs using Symfony's serializer and transforms HTTP exceptions (like ClientException, TransportException) into domain-specific exceptions (ManagementClientException, TalonOneCriticalException, TalonOneKillSwitchException) with appropriate error handling for different HTTP status codes (401, 404, etc.).

## Classes
- `ResponseNormalizerClient`

## Function Details

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`

### `deserialize`

- **Parameters**: `TalonOneRequestInterface $request, string $response`

