# OrderFactory.php

**Path**: `src\Factory\OrderFactory.php`

## Summary
This factory class decorates Sylius's default order factory to ensure all newly created orders are automatically assigned a unique token value. It provides two creation methods: a basic `createNew()` that guarantees token assignment, and `createForCustomerAndChannel()` that initializes orders with customer authorization, channel association, and automatically configures the currency and locale based on the channel's settings.

## Classes
- `OrderFactory`

## Function Details

### `createNew`


### `createForCustomerAndChannel`

- **Parameters**: `CustomerInterface $customer, ChannelInterface $channel`

