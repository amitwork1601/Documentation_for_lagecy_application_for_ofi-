# CollectionProvider.php

**Path**: `src\Api\StateProvider\Admin\Order\Payment\PaymentMethod\CollectionProvider.php`

## Summary
This API Platform state provider retrieves available payment methods for a specific payment in an order's checkout process. It validates the order exists by token and channel, finds the associated payment, and uses a payment methods resolver to return the collection of applicable payment methods for that payment, enabling customers to select how they want to pay for their order in the Sylius e-commerce system.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

