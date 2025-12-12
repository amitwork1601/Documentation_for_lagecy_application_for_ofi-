# OrderFactoryInterface.php

**Path**: `src\Factory\OrderFactoryInterface.php`

## Summary
This interface defines a factory contract for creating Order entities in a Sylius e-commerce application. It extends the base Sylius FactoryInterface and adds a specialized method `createForCustomerAndChannel()` that creates orders associated with a specific customer and sales channel. This abstraction allows for consistent order instantiation with required business context (customer and channel) throughout the application.

## Function Details

### `createForCustomerAndChannel`

- **Parameters**: `CustomerInterface $customer, ChannelInterface $channel`

