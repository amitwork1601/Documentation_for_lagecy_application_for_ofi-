# ChannelFilter.php

**Path**: `src\Api\Filters\ChannelFilter.php`

## Summary
The `ChannelFilter` class is an API Platform filter that enables filtering API resources by channel code. It dynamically detects whether the resource has a `channels` (many-to-many) or `channel` (many-to-one) relationship, then adds a SQL join and WHERE clause to filter results based on the provided channel code parameter. This allows API consumers to retrieve only resources associated with a specific channel in a multi-channel e-commerce or content management system.

## Classes
- `ChannelFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`

