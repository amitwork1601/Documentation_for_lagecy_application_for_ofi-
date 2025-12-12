# ShippingTypeEligibilityChecker.php

**Path**: `src\Checker\ShippingTypeEligibilityChecker.php`

## Summary
The `ShippingTypeEligibilityChecker` class validates whether a shipping method is compatible with an order's shipping address type. It ensures that pickup point shipping methods are only eligible when the shipping address is a `PickupAddress`, and conversely, that regular shipping methods are only eligible for non-pickup addresses, preventing mismatches between delivery types.

## Classes
- `ShippingTypeEligibilityChecker`

## Function Details

### `isEligible`

- **Parameters**: `ShippingSubjectInterface $shippingSubject, ShippingMethodInterface $shippingMethod`

