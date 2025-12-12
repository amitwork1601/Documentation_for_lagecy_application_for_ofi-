# IntegrationRequest.php

**Path**: `src\TalonOne\Core\IntegrationApi\Request\IntegrationRequest.php`

## Summary
This abstract base class provides default implementations for the `IntegrationRequestInterface` for TalonOne's Integration API. It serves as a foundation for concrete request objects by offering no-op implementations for common HTTP request properties (headers, query parameters, payload) and configuration methods (output type, caching), which subclasses can override as needed to define specific API request behaviors.

## Classes
- `IntegrationRequest`

## Function Details

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


