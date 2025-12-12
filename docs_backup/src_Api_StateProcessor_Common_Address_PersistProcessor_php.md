# PersistProcessor.php

**Path**: `src\Api\StateProcessor\Common\Address\PersistProcessor.php`

## Summary
This is an API Platform state processor that handles the persistence of Address entities in a Sylius e-commerce system. It intercepts POST operations to automatically associate addresses with the authenticated user's customer account and manages the default address assignment logic - setting an address as default if it's the customer's first address or if explicitly marked as default in the request body.

## Classes
- `PersistProcessor`

## Function Details

### `process`

- **Parameters**: `mixed $data, Operation $operation, array $uriVariables = [], array $context = []`

