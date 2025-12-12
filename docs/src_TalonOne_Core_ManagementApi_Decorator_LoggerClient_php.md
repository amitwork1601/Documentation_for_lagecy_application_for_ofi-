# LoggerClient.php

**Path**: `src\TalonOne\Core\ManagementApi\Decorator\LoggerClient.php`

## Summary
The `LoggerClient` class is a decorator for the TalonOne Management API client that adds logging functionality to API requests and responses. It wraps the base `ManagementClient` to intercept all API calls, logging successful requests with their responses at the info level and failed requests with exception details at the error level. This provides observability and debugging capabilities for all TalonOne Management API interactions without modifying the core client implementation.

## Classes
- `LoggerClient`

## Function Details

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`

### `generateSuccessMessage`

- **Parameters**: `TalonOneRequestInterface $request, ?string $response = null`

