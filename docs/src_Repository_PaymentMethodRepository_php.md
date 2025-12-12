# PaymentMethodRepository.php

**Path**: `src\Repository\PaymentMethodRepository.php`

## Summary
This repository extends Sylius's base PaymentMethodRepository to provide specialized queries for filtering payment methods based on user roles (admin vs. shop users) and subscription support within specific sales channels. It enables the retrieval of payment methods that are enabled for different contexts: admin orders, shop orders, and subscription-based payments, with results filtered by channel availability and ordered by position. The repository supports the business logic of displaying appropriate payment options to different user types in a multi-channel e-commerce environment.

## Classes
- `PaymentMethodRepository`

## Function Details

### `findEnabledForChannel`

- **Parameters**: `ChannelInterface $channel, ?bool $enabledForAdmin = null`

