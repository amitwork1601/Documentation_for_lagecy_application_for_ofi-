# RemoveProcessor.php

**Path**: `src\Api\StateProcessor\Common\Address\RemoveProcessor.php`

## Summary
This API state processor handles the deletion of customer addresses in a Sylius-based e-commerce system. It validates deletion requests by preventing removal of a customer's default address or their last remaining address, throwing an `AddressCannotBeRemoved` exception if these business rules are violated, before delegating the actual deletion to the underlying Doctrine ORM processor.

## Classes
- `RemoveProcessor`

## Function Details

### `process`

- **Parameters**: `mixed $data, Operation $operation, array $uriVariables = [], array $context = []`

