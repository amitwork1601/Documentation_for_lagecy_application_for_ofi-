# PointType.php

**Path**: `src\Api\GraphQL\Type\PointType.php`

## Summary
This class defines a custom GraphQL scalar type for representing geographical Point data (latitude/longitude coordinates) in API Platform's GraphQL API. It handles bidirectional conversion between the `LongitudeOne\Spatial\PHP\Types\Geography\Point` domain object and a GraphQL-compatible array format with `latitude` and `longitude` fields, enabling geographic location data to be queried and mutated through the GraphQL API.

## Classes
- `PointType`

## Function Details

### `__construct`


### `getName`


### `serialize`

- **Parameters**: `$value`

### `parseValue`

- **Parameters**: `$value`

### `parseLiteral`

- **Parameters**: `$valueNode, ?array $variables = null`

