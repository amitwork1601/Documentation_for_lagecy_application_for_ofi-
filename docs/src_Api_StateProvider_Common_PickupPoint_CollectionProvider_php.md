# CollectionProvider.php

**Path**: `src\Api\StateProvider\Common\PickupPoint\CollectionProvider.php`

## Summary
This is an API state provider that retrieves available pickup points for an e-commerce order based on the current cart's shipping requirements. It filters pickup points by checking shipping method eligibility, considering factors like shipping weight and configured pickup point gateways, to return only valid pickup locations where customers can collect their orders.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

