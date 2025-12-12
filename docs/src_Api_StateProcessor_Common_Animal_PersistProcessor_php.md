# PersistProcessor.php

**Path**: `src\Api\StateProcessor\Common\Animal\PersistProcessor.php`

## Summary
This is an API Platform state processor that handles the persistence of Animal entities during POST operations. It automatically generates a 9-character unique code for new animals if one isn't provided, and associates the animal with the currently authenticated customer (shop user) before persisting to the database.

## Classes
- `PersistProcessor`

## Function Details

### `process`

- **Parameters**: `mixed $data, Operation $operation, array $uriVariables = [], array $context = []`

