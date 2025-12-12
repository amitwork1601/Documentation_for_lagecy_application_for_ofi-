# PromotionCouponGeneratorInstruction.php

**Path**: `src\Promotion\Generator\PromotionCouponGeneratorInstruction.php`

## Summary
This class serves as a data transfer object (DTO) that encapsulates configuration parameters for bulk generation of promotion coupons in an e-commerce system. It implements Sylius's `ReadablePromotionCouponGeneratorInstructionInterface` and defines settings such as the number of coupons to generate, code formatting options (prefix, suffix, length), expiration dates, and usage limits (both global and per-customer). The class provides a structured way to pass coupon generation specifications to a generator service, ensuring consistent coupon creation with predefined constraints and formatting rules.

## Classes
- `PromotionCouponGeneratorInstruction`

## Function Details

### `getAmount`


### `setAmount`

- **Parameters**: `?int $amount`

### `getPrefix`


### `setPrefix`

- **Parameters**: `?string $prefix`

### `getCodeLength`


### `setCodeLength`

- **Parameters**: `?int $codeLength`

### `getSuffix`


### `setSuffix`

- **Parameters**: `?string $suffix`

### `getExpiresAt`


### `setExpiresAt`

- **Parameters**: `?\DateTimeInterface $expiresAt`

### `getUsageLimit`


### `setUsageLimit`

- **Parameters**: `int $usageLimit`

### `getPerCustomerUsageLimit`


### `setPerCustomerUsageLimit`

- **Parameters**: `?int $perCustomerUsageLimit`

### `isReusableFromCancelledOrders`


### `setReusableFromCancelledOrders`

- **Parameters**: `bool $reusableFromCancelledOrders`

