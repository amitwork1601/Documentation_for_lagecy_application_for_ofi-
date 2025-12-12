# CollectionProvider.php

**Path**: `src\Api\StateProvider\Common\Upsell\CollectionProvider.php`

## Summary
This is an API Platform state provider that retrieves upsell opportunities for orders in an e-commerce system. It fetches relevant upsell products based on the current cart contents (identified by tokenValue), channel context, and user permissions - allowing admin users to see all upsells while regular users only see those applicable to their specific order. The provider integrates with Sylius e-commerce framework to determine which additional products should be suggested to customers during checkout based on their current cart items.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

### `getUpsell`

- **Parameters**: `OrderInterface $cart`

