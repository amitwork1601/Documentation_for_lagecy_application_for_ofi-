# EffectActionsFilter.php

**Path**: `src\TalonOne\Domain\Services\Applicator\EffectActionsFilter.php`

## Summary
The `EffectActionsFilter` class is a specialized iterator filter that filters effect actions from TalonOne (a promotion/coupon management platform) by matching a specific effect name. It extends PHP's `FilterIterator` to selectively iterate over only those items whose key matches the provided `$effectName`, allowing the application to process or apply specific types of promotional effects while ignoring others.

## Classes
- `EffectActionsFilter`

## Function Details

### `accept`


