# UpdateShipping.php

**Path**: `src\Api\Command\UpdateShipping.php`

## Summary
This abstract command class serves as a data transfer object (DTO) for updating shipping-related information in an e-commerce system. It encapsulates shipping and billing addresses, shipping method, pickup point selection, and flags for address matching and subscription order handling, providing read-only access through getter methods. The class is designed to be extended by concrete command implementations that handle specific shipping update scenarios.

## Classes
- `UpdateShipping`

## Function Details

### `getShippingAddress`


### `getBillingAddress`


### `getShippingMethod`


### `getPickupPoint`


### `isBillingAddressSameAsShippingAddress`


### `isSpreadOnSubscriptionOrder`


