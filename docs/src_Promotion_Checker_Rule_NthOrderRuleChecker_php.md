# NthOrderRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\NthOrderRuleChecker.php`

## Summary
The `NthOrderRuleChecker` class implements a promotion rule that determines if a customer is eligible for a promotion based on their order count (e.g., first order, third order, etc.). It checks if the current order matches a configured "nth" order number by querying the order repository to count the customer's previous completed orders, with special handling for guest customers who are only eligible for first-order promotions.

## Classes
- `NthOrderRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`
- **Description**: @var OrderRepositoryInterface */
private $orderRepository;

public function __construct(OrderRepositoryInterface $orderRepository)
{
$this-&gt;orderRepository = $orderRepository;
}

/**
@throws UnsupportedTypeException
/

