# Customer.php

**Path**: `src\Entity\Customer\Customer.php`

## Summary
This is a Customer entity class that extends Sylius e-commerce framework's base Customer model and represents customers in a multi-channel subscription-based business. It exposes customer data through a GraphQL API (using API Platform) with extensive filtering capabilities including subscription status, channel, dates, and search functionality, while also managing relationships to animals, subscriptions, promotion coupons, and orders with audit tracking enabled.

## Classes
- `Customer`

## Function Details

### `__construct`


### `getPaymentInstruments`


### `getAnimals`


### `getSubscriptions`


### `hasActiveSubscription`


### `getCoupons`

- **Description**: @return Collection|PromotionCouponCustomer[]
/

### `addCoupon`

- **Parameters**: `PromotionCouponCustomer $coupon`

### `removeCoupon`

- **Parameters**: `PromotionCouponCustomer $coupon`

### `isDeletable`


### `getCarts`


### `getName`


### `getChannel`


### `setChannel`

- **Parameters**: `?Channel $channel`

### `getChannelCode`


### `isEnabled`


### `getEmailHashed`


### `getBusinessReport`


### `setBusinessReport`

- **Parameters**: `?CustomerBusinessReport $businessReport`

### `getLocaleCode`


### `setLocaleCode`

- **Parameters**: `?string $localeCode`

