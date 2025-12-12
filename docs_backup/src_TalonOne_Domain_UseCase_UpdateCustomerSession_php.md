# UpdateCustomerSession.php

**Path**: `src\TalonOne\Domain\UseCase\UpdateCustomerSession.php`

## Summary
This class implements a use case for updating a customer session with the TalonOne promotion engine service. It builds and sends a customer session request containing order details and optional coupon codes, then processes the response to apply promotional effects (discounts, coupon validations) to the order and manage effect notifications. The class serves as the main orchestrator for syncing order state with TalonOne's promotion rules engine and applying the resulting promotional adjustments back to the application's order entity.

## Classes
- `UpdateCustomerSession`

## Function Details

### `execute`

- **Parameters**: `Order $order, ?string $couponCode = null, bool $withApplication = true`

### `applyEffect`

- **Parameters**: `Order $order, iterable $effects`

### `manageNotifications`

- **Parameters**: `Order $order, array $effects`

### `manageAchivementOriginCode`

- **Parameters**: `Order $order, array $effects`
- **Description**: @throws TalonOneApiException
/

### `findTranslationForCustomEffectType`

- **Parameters**: `Effect $customEffect, array $effects, Order $order`

### `manageAnalytics`

- **Parameters**: `Order $order, array $effects`

### `manageTranslations`

- **Parameters**: `Order $order, array $effects`

