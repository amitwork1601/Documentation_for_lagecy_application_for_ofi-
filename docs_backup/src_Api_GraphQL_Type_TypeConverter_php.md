# TypeConverter.php

**Path**: `src\Api\GraphQL\Type\TypeConverter.php`

## Summary
This TypeConverter class is a custom GraphQL type converter that extends API Platform's default type conversion to handle spatial geography data types. It specifically intercepts conversion of `LongitudeOne\Spatial\PHP\Types\Geography\Point` objects and maps them to a custom 'Point' GraphQL type, while delegating all other type conversions to the default converter. This allows geographic point data (likely latitude/longitude coordinates) to be properly represented in the application's GraphQL API schema.

## Classes
- `TypeConverter`

## Function Details

### `__construct`

- **Parameters**: `private TypeConverterInterface $defaultTypeConverter`

### `resolveType`

- **Parameters**: `string $type`

