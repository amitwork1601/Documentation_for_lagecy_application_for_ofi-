# ShippingRangePriceEligibilityChecker.php

**Path**: `src\Checker\ShippingRangePriceEligibilityChecker.php`

## Summary
This class is a shipping method eligibility checker that determines whether a range-based price shipping method can be applied to an order. It validates that the shipping method is enabled, uses range-price calculation, matches the order's channel and shipping zone, and has a valid shipping amount calculated based on the order's items total without discounts.

## Classes
- `ShippingRangePriceEligibilityChecker`

## Function Details

### `isEligible`

- **Parameters**: `ShippingSubjectInterface $shippingSubject, ShippingMethodInterface $shippingMethod`
- **Description**: @param ShippingSubjectInterface|Shipment $shippingSubject
/

