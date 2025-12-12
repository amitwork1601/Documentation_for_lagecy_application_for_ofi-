# ManagementRequest.php

**Path**: `src\TalonOne\Core\ManagementApi\Request\ManagementRequest.php`

## Summary
This abstract base class provides default implementations for the ManagementRequestInterface, serving as a foundation for TalonOne Management API request objects. It defines standard request components (headers, query parameters, payload) and caching behavior with sensible defaults (1-hour TTL, array output type), allowing concrete request classes to override only the methods they need to customize for specific API endpoints.

## Classes
- `ManagementRequest`

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


