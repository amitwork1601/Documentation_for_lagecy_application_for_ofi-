# ManagementClient.php

**Path**: `src\TalonOne\Core\ManagementApi\ManagementClient.php`

## Summary
The `ManagementClient` class serves as an HTTP client wrapper for executing API requests to the TalonOne management API. It implements a client interface that takes standardized request objects (containing method, URI, headers, query params, and payload) and executes them via Symfony's HTTP client, returning the response content as a string or JSON.

## Classes
- `ManagementClient`

## Function Details

### `__construct`

- **Parameters**: `private readonly HttpClientInterface $talonOneManagementClient`

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`

