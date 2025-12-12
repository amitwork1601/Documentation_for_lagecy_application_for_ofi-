# CacheClient.php

**Path**: `src\TalonOne\Core\ManagementApi\Decorator\CacheClient.php`

## Summary
The `CacheClient` class is a decorator for the TalonOne Management API client that adds caching functionality to API requests. It intercepts API calls and checks if the request is cacheable (has a cache key); if so, it attempts to retrieve the response from a filesystem cache before making the actual API call, storing successful responses with configurable TTL to reduce redundant API requests. This decorator pattern allows transparent addition of caching behavior to the management client without modifying the original implementation.

## Classes
- `CacheClient`

## Function Details

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`

### `isCached`

- **Parameters**: `TalonOneRequestInterface $request`

