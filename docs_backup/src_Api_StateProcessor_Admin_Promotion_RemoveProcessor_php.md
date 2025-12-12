# RemoveProcessor.php

**Path**: `src\Api\StateProcessor\Admin\Promotion\RemoveProcessor.php`

## Summary
This is an API Platform state processor that handles the deletion of promotions in an admin context. It validates the promotion data against the 'app_promotion_delete' validation group before delegating the actual removal operation to Doctrine ORM's standard remove processor, ensuring business rules are enforced before a promotion can be deleted.

## Classes
- `RemoveProcessor`

## Function Details

### `process`

- **Parameters**: `mixed $data, Operation $operation, array $uriVariables = [], array $context = []`

