# MockClient.php

**Path**: `src\TalonOne\Core\IntegrationApi\Decorator\MockClient.php`

## Summary
The `MockClient` class is a decorator for the TalonOne integration API client that conditionally intercepts API requests and returns mock responses instead of making real API calls. When the `MOCK` constant is enabled and a corresponding mock class exists (by replacing 'Request' with 'Mock' in the class name), it returns mock data; otherwise, it delegates to the actual integration client. This enables testing and development without hitting the real TalonOne promotional/loyalty platform API.

## Classes
- `MockClient`

## Function Details

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`

### `hasMock`

- **Parameters**: `TalonOneRequestInterface $request`

### `getMock`

- **Parameters**: `TalonOneRequestInterface $request, int $statusCode = 200`

