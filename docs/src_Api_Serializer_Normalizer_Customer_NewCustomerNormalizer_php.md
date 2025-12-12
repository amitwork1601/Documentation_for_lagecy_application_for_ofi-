# NewCustomerNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Customer\NewCustomerNormalizer.php`

## Summary
This normalizer extends the serialization of Sylius Customer entities to add a `newCustomer` boolean field that indicates whether a customer has completed any orders. It queries the OrderRepository to check if the customer has zero completed orders, marking them as "new" if true, which is useful for distinguishing first-time customers in API responses for specific serialization groups like `sylius:shop:customer:show`.

## Classes
- `NewCustomerNormalizer`

## Function Details

### `__construct`

- **Parameters**: `OrderRepository $orderRepository, ?array $activeSerializationGroup = null`

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`

