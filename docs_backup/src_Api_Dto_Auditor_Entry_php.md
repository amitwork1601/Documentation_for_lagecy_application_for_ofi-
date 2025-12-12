# Entry.php

**Path**: `src\Api\Dto\Auditor\Entry.php`

## Summary
This is a Data Transfer Object (DTO) that represents an audit log entry, capturing changes made to entities in the system. It stores metadata about audited operations including the changed object details, change diffs, user attribution information (blame_id, username, IP address), and timestamps, enabling tracking of who made what changes and when for compliance and accountability purposes.

## Classes
- `Entry`

## Function Details

### `getId`

- **Description**: Get the value of id.
/

### `getType`

- **Description**: Get the value of type.
/

### `getObjectId`

- **Description**: Get the value of object_id.
/

### `getDiscriminator`

- **Description**: Get the value of discriminator.
/

### `getTransactionHash`

- **Description**: Get the value of transaction_hash.
/

### `getUserId`

- **Description**: Get the value of blame_id.
/

### `getUsername`

- **Description**: Get the value of blame_user.
/

### `getUserFqdn`


### `getUserFirewall`


### `getIp`

- **Description**: Get the value of ip.
/

### `getCreatedAt`

- **Description**: Get the value of created_at.
/

### `getDiffs`

- **Parameters**: `bool $includeMedadata = false`
- **Description**: Get diff values.
/

### `fromArray`

- **Parameters**: `array $row`

### `sort`

- **Parameters**: `array $array`

