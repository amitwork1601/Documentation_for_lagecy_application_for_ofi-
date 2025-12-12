# ResponseNormalizerClientSpec.php

**Path**: `spec\TalonOne\Core\ManagementApi\Decorator\ResponseNormalizerClientSpec.php`

## Summary
This is a PHPSpec test file for `ResponseNormalizerClient`, a decorator that wraps a TalonOne Management API client to automatically deserialize JSON responses into typed DTOs (Data Transfer Objects). The decorator intercepts API calls, receives raw JSON responses from the underlying client, and uses Symfony's serializer to convert them into strongly-typed domain objects like `Campaign`, ensuring type safety and structured data handling throughout the application.

## Classes
- `ResponseNormalizerClientSpec`

## Function Details

### `it_is_initializable`

- **Parameters**: `ManagementClientInterface $client, SerializerInterface $serializer`

