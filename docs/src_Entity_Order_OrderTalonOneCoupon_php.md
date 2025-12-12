# OrderTalonOneCoupon.php

**Path**: `src\Entity\Order\OrderTalonOneCoupon.php`

## Summary
This entity class represents a coupon from the Talon.One promotional engine that has been applied to a Sylius e-commerce order. It stores the coupon's details including code, name, discount amount, campaign ID, and activation status, while maintaining a many-to-one relationship with the Order entity to track which coupons were used on each order. The class serves as a database-backed record for integrating third-party Talon.One coupon functionality into the Sylius order management system.

## Classes
- `OrderTalonOneCoupon`

## Function Details

### `getId`


### `getOrder`


### `setOrder`

- **Parameters**: `?Order $order`

### `getEffectTriggeredIdentifier`


### `setEffectTriggeredIdentifier`

- **Parameters**: `?int $effectTriggeredIdentifier`

### `getCouponCode`


### `setCouponCode`

- **Parameters**: `string $couponCode`

### `getName`


### `setName`

- **Parameters**: `string $name`

### `getAmount`


### `setAmount`

- **Parameters**: `?int $amount`

### `getCampaignId`


### `setCampaignId`

- **Parameters**: `?int $campaignId`

### `isActive`


### `setActive`

- **Parameters**: `?bool $isActive`

### `isAutoDelete`


### `setAutoDelete`

- **Parameters**: `bool $autoDelete`

