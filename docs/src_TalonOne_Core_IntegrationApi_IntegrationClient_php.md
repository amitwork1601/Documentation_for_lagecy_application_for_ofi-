# IntegrationClient.php

**Path**: `src\TalonOne\Core\IntegrationApi\IntegrationClient.php`

## Summary
The `IntegrationClient` class serves as an HTTP client wrapper for communicating with the TalonOne marketing/promotion platform's Integration API. It implements a standardized execution method that takes TalonOne-specific request objects, extracts their configuration (method, URI, headers, query params, payload), and sends HTTP requests using Symfony's HttpClient while disabling SSL verification. This abstraction layer decouples the application's TalonOne integration logic from the underlying HTTP transport implementation.

## Classes
- `IntegrationClient`

## Function Details

### `__construct`

- **Parameters**: `private readonly HttpClientInterface $talonOneIntegrationClient`

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`

