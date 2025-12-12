# UnitsPromotionAdjustmentsApplicator.php

**Path**: `src\Promotion\Applicator\UnitsPromotionAdjustmentsApplicator.php`

## Summary
The `UnitsPromotionAdjustmentsApplicator` class is responsible for applying promotional discounts at the order item unit level in a Sylius e-commerce system. It distributes calculated promotion amounts across individual order item units, creates adjustment entities for each unit, and tracks promotional analytics (including coupon usage tracking via `PromotionAnalyticBroadcast`). This granular approach ensures that discounts are properly allocated even when order items have multiple units, maintaining accurate per-unit pricing.

## Classes
- `UnitsPromotionAdjustmentsApplicator`

## Function Details

### `apply`

- **Parameters**: `OrderInterface $order, PromotionInterface $promotion, array $adjustmentsAmounts`
- **Description**: @var AdjustmentFactoryInterface */
private $adjustmentFactory;

/** @var IntegerDistributorInterface */
private $distributor;

public function __construct(
AdjustmentFactoryInterface $adjustmentFactory,
IntegerDistributorInterface $distributor,
) {
$this-&gt;adjustmentFactory = $adjustmentFactory;
$this-&gt;distributor = $distributor;
}

/**
@throws UnsupportedTypeException
/

### `addAdjustment`

- **Parameters**: `PromotionInterface $promotion, OrderItemUnitInterface $unit, int $amount`

