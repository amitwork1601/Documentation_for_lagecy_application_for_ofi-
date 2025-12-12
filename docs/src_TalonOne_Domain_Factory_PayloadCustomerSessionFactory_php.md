# PayloadCustomerSessionFactory.php

**Path**: `src\TalonOne\Domain\Factory\PayloadCustomerSessionFactory.php`

## Summary
This factory class creates TalonOne customer session payloads from Sylius Order entities for integration with the TalonOne promotions engine. It transforms order data into the format required by TalonOne's API, including cart items, additional costs (shipping/payment fees), coupon codes, and customer profile identifiers, along with order attributes like shipping method, channel, and locale.

## Classes
- `PayloadCustomerSessionFactory`

## Function Details

### `setIdFactory`

- **Parameters**: `TalonOneIdFactory $idFactory`

### `createFromOrder`

- **Parameters**: `Order $order`

### `getCouponCodes`

- **Parameters**: `Order $order, ?string $couponCode = null`

