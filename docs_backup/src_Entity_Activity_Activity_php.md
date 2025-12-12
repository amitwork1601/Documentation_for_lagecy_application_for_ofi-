# Activity.php

**Path**: `src\Entity\Activity\Activity.php`

## Summary
The `Activity` class is a Doctrine entity that represents an audit log or activity tracking system for monitoring changes and actions performed on other entities in the application. It records metadata about each activity including the entity being acted upon (type and identifier), the action performed (using an `ActivityAction` enum), blame/user information for attribution, IP address, and timestamps, making it suitable for audit trails and compliance requirements. The entity is exposed via GraphQL with filtering and sorting capabilities for querying historical activities.

## Classes
- `Activity`

## Function Details

### `getId`


### `getCreatedAt`


### `getUpdatedAt`


### `getEntityType`


### `setEntityType`

- **Parameters**: `string $entityType`

### `getEntityIdentifier`


### `setEntityIdentifier`

- **Parameters**: `string $entityIdentifier`

### `isShallow`


### `setShallow`

- **Parameters**: `bool $shallow`

### `getBlameId`


### `setBlameId`

- **Parameters**: `?string $blameId`

### `getBlameUser`


### `setBlameUser`

- **Parameters**: `?string $blameUser`

### `getBlameUserFqdn`


### `setBlameUserFqdn`

- **Parameters**: `?string $blameUserFqdn`

### `getBlameUserFirewall`


### `setBlameUserFirewall`

- **Parameters**: `?string $blameUserFirewall`

### `getIp`


### `setIp`

- **Parameters**: `?string $ip`

### `getAction`


### `getActionLiteral`


### `setAction`

- **Parameters**: `ActivityAction $action`

### `getDetails`


### `setDetails`

- **Parameters**: `array $details`

