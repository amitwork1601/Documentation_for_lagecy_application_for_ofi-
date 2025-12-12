# RequestDirector.php

**Path**: `src\TalonOne\Domain\Builder\RequestDirector.php`

## Summary
The `RequestDirector` class implements the Builder pattern to orchestrate the construction of TalonOne API requests (both Integration and Management API types). It coordinates the request building process by delegating to a `RequestBuilderInterface` to construct the request payload and query parameters, then normalizes the payload using Symfony's serializer with appropriate serialization groups based on the request type. This class serves as the director in the Builder pattern, managing the step-by-step construction workflow while keeping the actual building logic separated in the builder implementations.

## Classes
- `RequestDirector`

## Function Details

### `setBuilder`

- **Parameters**: `RequestBuilderInterface $requestBuilder`

### `buildRequest`


### `normalizePayload`

- **Parameters**: `TalonOneRequestInterface $request`

