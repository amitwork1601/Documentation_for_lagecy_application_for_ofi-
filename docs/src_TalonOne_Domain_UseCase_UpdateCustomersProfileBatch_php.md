# UpdateCustomersProfileBatch.php

**Path**: `src\TalonOne\Domain\UseCase\UpdateCustomersProfileBatch.php`

## Summary
This class implements a use case for batch updating customer profiles in the TalonOne integration system. It uses the builder pattern (via RequestDirector and UpdateCustomersProfileBatchRequestBuilder) to construct a batch update request from the provided payload, then executes it through the IntegrationClient to synchronize customer profile data with TalonOne's API.

## Classes
- `UpdateCustomersProfileBatch`

## Function Details

### `execute`

- **Parameters**: `array $payload`

