# RequestBuilderInterface.php

**Path**: `src\TalonOne\Domain\Builder\RequestBuilderInterface.php`

## Summary
This interface defines a builder pattern contract for constructing TalonOne API requests. It provides methods to incrementally build request components (payload and query parameters), reset the builder state, and retrieve the final configured request object, with support for injecting an ID factory for generating TalonOne-specific identifiers during the build process.

## Function Details

### `reset`


### `produceRequestPayload`


### `produceRequestQueryParams`


### `getRequest`


### `setIdFactory`

- **Parameters**: `TalonOneIdFactory $factory`

