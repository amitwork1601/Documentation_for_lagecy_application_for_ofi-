# AbstractRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\AbstractRequestBuilder.php`

## Summary
This abstract base class provides common infrastructure for TalonOne API request builders by managing a factory for generating TalonOne-specific identifiers. It implements the `RequestBuilderInterface` and serves as a foundation for concrete request builder classes that need to create or manipulate TalonOne IDs when constructing API requests for the TalonOne promotion/loyalty platform integration.

## Classes
- `AbstractRequestBuilder`

## Function Details

### `setIdFactory`

- **Parameters**: `TalonOneIdFactory $factory`

