# SubscriptionOrderRepository.php

**Path**: `src\Repository\Subscription\SubscriptionOrderRepository.php`

## Summary
The `SubscriptionOrderRepository` is a specialized Doctrine repository for managing subscription-related orders in an e-commerce system. It extends Sylius's OrderRepository to provide custom queries for subscription orders, including finding orders by product variant and status, retrieving the last order for a subscription in a specific state, and counting processed subscription orders. This repository handles the persistence layer logic for recurring subscription orders that have their own lifecycle states separate from regular orders.

## Classes
- `SubscriptionOrderRepository`

## Function Details

### `findByOrdersByVariantUpdatedAndStatus`

- **Parameters**: `int $variantId, SubscriptionOrderState $draftState`

### `findLastSubscriptionOrderByState`

- **Parameters**: `Subscription $subscription, SubscriptionOrderState $state`
- **Description**: @throws NonUniqueResultException
/

### `countSubscriptionOrderProcessed`

- **Parameters**: `Subscription $subscription`
- **Description**: @throws NoResultException
@throws NonUniqueResultException
/

### `findAllSubscriptionOrderActive`


### `countSubscriptionOrderActive`


### `iteratorByProductVariantInOrderItemsAndNextShipping`

- **Parameters**: `array $idsProductVariant, \DateTime $nextShippingAt`

