# MockClient.php

**Path**: `src\TalonOne\Core\ManagementApi\Decorator\MockClient.php`

## Summary
This class is a decorator for the TalonOne Management API client that provides a mock/testing mode capability. When the `MOCK` constant is set to true, it intercepts API requests and returns mock responses by instantiating corresponding mock classes (e.g., replacing "Request" with "Mock" in the class name), otherwise it delegates to the actual ManagementClient implementation. This pattern enables switching between real API calls and mocked responses for testing or development purposes without changing application code.

## Classes
- `MockClient`

## Function Details

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`

### `getMock`

- **Parameters**: `TalonOneRequestInterface $request`

