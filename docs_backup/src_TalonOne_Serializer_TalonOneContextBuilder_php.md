# TalonOneContextBuilder.php

**Path**: `src\TalonOne\Serializer\TalonOneContextBuilder.php`

## Summary
This class is a Symfony serializer context builder specifically designed for TalonOne integration, which configures serialization behavior for API communication with the TalonOne promotion/loyalty platform. It provides fluent methods to set context options for controlling whether output should be formatted as collections, arrays, or specific serialization groups. The builder enables consistent configuration of how data structures are serialized/deserialized when interacting with TalonOne's API endpoints.

## Classes
- `TalonOneContextBuilder`

## Function Details

### `withCollectionOutput`

- **Parameters**: `bool $isCollection`

### `withArrayOutput`

- **Parameters**: `bool $isArray`

### `withGroups`

- **Parameters**: `array $groups`

