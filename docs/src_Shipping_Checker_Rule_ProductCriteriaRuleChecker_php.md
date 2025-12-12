# ProductCriteriaRuleChecker.php

**Path**: `src\Shipping\Checker\Rule\ProductCriteriaRuleChecker.php`

## Summary
This abstract class provides reusable product-based filtering logic for shipping rule checkers in an e-commerce system. It implements a `matchesCriteria` method that determines if an order item qualifies based on whether its product code, main taxon (category) code, or variant code matches any values specified in the configuration arrays. This serves as a base class for concrete shipping rule checkers that need to evaluate eligibility based on product-related criteria.

## Classes
- `ProductCriteriaRuleChecker`

## Function Details

### `matchesCriteria`

- **Parameters**: `OrderItemInterface $orderItem, array $configuration`

### `isEligible`

- **Parameters**: `ShippingSubjectInterface $subject, array $configuration`

