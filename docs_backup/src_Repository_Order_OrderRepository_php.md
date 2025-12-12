# OrderRepository.php

**Path**: `src\Repository\Order\OrderRepository.php`

## Summary
The `OrderRepository` class extends Sylius's base order repository to provide custom database queries for order management in an e-commerce application. It includes specialized methods for retrieving orders based on specific business criteria, such as finding non-empty shopping carts for customers within a specific channel (filtering out expired carts older than 15 days and subscription orders), and likely includes additional query methods for order state management (checkout, payment) and customer order history.

## Classes
- `OrderRepository`

## Function Details

### `__construct`

- **Parameters**: `EntityManagerInterface $entityManager, ClassMetadata $class`

### `createOrderQueryBuilder`

- **Parameters**: `string $alias = 'o', bool $excludeSubscriptionOrder = false`

### `createCartQueryBuilder`

- **Parameters**: `string $alias = 'o', bool $excludeSubscriptionOrder = false`

### `createOrderListQueryBuilder`

- **Parameters**: `string $alias = 'o', bool $excludeSubscriptionOrder = false`
- **Description**: Liste des commandes.
/

### `createCartListQueryBuilder`

- **Parameters**: `string $alias = 'o', bool $excludeSubscriptionOrder = false`

### `createListCartQueryBuilder`

- **Description**: Liste de carts.
/

### `findIdOrderToSendToTalonSessions`

- **Parameters**: `int $offset, int $batchSize`

### `findOrdersForMiddleware`

- **Parameters**: `\DateTime $date, int $delay`

### `countOrdersWithRef`

- **Parameters**: `array $refs, Customer $customer, ?OrderInterface $currentOrder = null`

### `countOrdersWithProductRef`

- **Parameters**: `array $refs, Customer $customer, ?OrderInterface $currentOrder = null`

### `findOrdersCompletedBeforeDatetime`

- **Parameters**: `\DateTime $dateTime, Customer $customer`

### `countOrdersCompletedForCustomer`

- **Parameters**: `Customer $customer, ?OrderInterface $excludeOrder = null`

### `findOrdersCompletedForCustomer`

- **Parameters**: `Customer $customer, ?OrderInterface $excludeOrder = null`

### `deleteCartsCustomer`

- **Parameters**: `Customer $customer`

### `getOrderArray`

- **Parameters**: `$id`

### `iteratorOnMissingInvoice`

- **Parameters**: `?\DateTime $minCompletedAt = null, ?\DateTime $maxCompletedAt = null`

### `countByPromotionCoupon`

- **Parameters**: `PromotionCouponInterface $coupon`

### `switchOrderChannel`

- **Parameters**: `Customer $customer`

