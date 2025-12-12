# Coupon.php

**Path**: `src\TalonOne\Domain\Model\Coupon.php`

## Summary
The `Coupon` class is a domain model representing promotional coupons from the TalonOne marketing platform. It serves as an API Platform resource that encapsulates coupon data including usage limits, discount constraints, validity periods, reservation status, and redemption tracking, with a factory method to hydrate instances from TalonOne API DTOs for integration with the application's coupon management system.

## Classes
- `Coupon`

## Function Details

### `createFromDto`

- **Parameters**: `CouponDto $couponDto`

### `getId`


### `setId`

- **Parameters**: `int $id`

### `getCreated`


### `setCreated`

- **Parameters**: `?\DateTime $created`

### `getCampaignId`


### `setCampaignId`

- **Parameters**: `int $campaignId`

### `getValue`


### `setValue`

- **Parameters**: `string $value`

### `getUsageLimit`


### `setUsageLimit`

- **Parameters**: `int $usageLimit`

### `getDiscountLimit`


### `setDiscountLimit`

- **Parameters**: `?int $discountLimit`

### `getReservationLimit`


### `setReservationLimit`

- **Parameters**: `?int $reservationLimit`

### `getStartDate`


### `setStartDate`

- **Parameters**: `?\DateTime $startDate`

### `getExpiryDate`


### `setExpiryDate`

- **Parameters**: `?\DateTime $expiryDate`

### `getLimits`


### `setLimits`

- **Parameters**: `?array $limits`

### `getUsageCounter`


### `setUsageCounter`

- **Parameters**: `int $usageCounter`

### `getDiscountCounter`


### `setDiscountCounter`

- **Parameters**: `int $discountCounter`

### `getDiscountRemainder`


### `setDiscountRemainder`

- **Parameters**: `int $discountRemainder`

### `getReservationCounter`


### `setReservationCounter`

- **Parameters**: `int $reservationCounter`

### `getAttributes`


### `setAttributes`

- **Parameters**: `?array $attributes`

### `getReferralId`


### `setReferralId`

- **Parameters**: `int $referralId`

### `getRecipientIntegrationId`


### `setRecipientIntegrationId`

- **Parameters**: `string $recipientIntegrationId`

### `getImportId`


### `setImportId`

- **Parameters**: `int $importId`

### `isReservation`


### `setReservation`

- **Parameters**: `bool $reservation`

### `getBatchId`


### `setBatchId`

- **Parameters**: `string $batchId`

### `isReservationMandatory`


### `setIsReservationMandatory`

- **Parameters**: `bool $isReservationMandatory`

### `isImplicitlyReserved`


### `setImplicitlyReserved`

- **Parameters**: `bool $implicitlyReserved`

### `getProfileRedemptionCount`


### `setProfileRedemptionCount`

- **Parameters**: `int $profileRedemptionCount`

### `getCampaignName`


### `setCampaignName`

- **Parameters**: `string $campaignName`

### `getCampaignDescription`


### `setCampaignDescription`

- **Parameters**: `?string $campaignDescription`

### `getCouponEffects`


### `humanizedCouponEffects`


### `humanizeTypeValue`

- **Parameters**: `string $type`

