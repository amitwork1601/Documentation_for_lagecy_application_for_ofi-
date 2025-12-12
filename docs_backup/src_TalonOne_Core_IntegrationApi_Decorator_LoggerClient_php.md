# LoggerClient.php

**Path**: `src\TalonOne\Core\IntegrationApi\Decorator\LoggerClient.php`

## Summary
The `LoggerClient` class is a decorator for TalonOne integration API clients that adds logging functionality to API requests and responses. It wraps the actual integration client, logging successful API calls at the INFO level and capturing detailed error information (including request details, response content, and exception data) at the ERROR level when API calls fail. This decorator follows Symfony's decoration pattern to provide observability and debugging capabilities for TalonOne promotional/loyalty platform integrations without modifying the core client implementation.

## Classes
- `LoggerClient`

## Function Details

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`

### `generateSuccessMessage`

- **Parameters**: `TalonOneRequestInterface $request, ?string $response = null`

