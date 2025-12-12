# TalonOneRequestInterface.php

**Path**: `src\TalonOne\Core\Config\TalonOneRequestInterface.php`

## Summary
This interface defines the contract for HTTP requests made to the TalonOne API (a promotional campaign and loyalty program platform). It specifies methods for configuring request details including URI, HTTP method, headers, query parameters, and payload, as well as response handling through output type specification. The interface also includes optional caching capabilities with cache key and TTL (time-to-live) methods to optimize repeated API calls.

## Function Details

### `getUri`


### `getMethod`


### `getHeaders`


### `getQueryParams`


### `setQueryParams`

- **Parameters**: `array $queryParams`

### `getPayload`


### `setPayload`

- **Parameters**: `array $payload`

### `getOutputType`


### `getCacheKey`


### `getCacheTtl`


