# UpdateNextShippingDateSubscriptionHandler.php

**Path**: `src\CQRS\CommandHandler\Subscription\UpdateNextShippingDateSubscriptionHandler.php`

## Summary
This command handler updates a subscription's next shipping date by calculating both the estimated actual shipping date and a theoretical reference date using the ShippingBalancerService. It is part of the CQRS pattern implementation for managing subscription delivery schedules, ensuring that subscriptions have valid shipping dates calculated by the system's balancing algorithm, and throws an exception if the next shipping date cannot be determined.

## Classes
- `UpdateNextShippingDateSubscriptionHandler`

## Function Details

### `__invoke`

- **Parameters**: `UpdateNextShippingDateSubscription $command`
- **Description**: @throws NonUniqueResultException
@throws NoResultException
/

