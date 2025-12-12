# ShippingPercentageDiscountPromotionActionCommand.php

**Path**: `src\Promotion\Action\ShippingPercentageDiscountPromotionActionCommand.php`

## Summary
This class implements a promotion action that applies a percentage-based discount to shipping costs in an e-commerce order. It calculates the discount by applying a configured percentage to each shipment's total cost (including existing shipping adjustments), creates adjustment entities to track the discount, and ensures the discount doesn't exceed the available shipping amount. The class is part of Sylius-based promotion system for handling order-level shipping discounts triggered by promotional rules.

## Classes
- `ShippingPercentageDiscountPromotionActionCommand`

## Function Details

### `revert`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration, PromotionInterface $promotion`
- **Description**: @var FactoryInterface */
private $adjustmentFactory;

/** @var OrderInterface */
private $order;

public function __construct(FactoryInterface $adjustmentFactory)
{
$this-&gt;adjustmentFactory = $adjustmentFactory;
}

public function execute(PromotionSubjectInterface $subject, array $configuration, PromotionInterface $promotion): bool
{
if (!$subject instanceof OrderInterface) {
throw new UnexpectedTypeException($subject, OrderInterface::class);
}

$this-&gt;order = $subject;

if (!isset($configuration['percentage'])) {
return false;
}

if (!$subject-&gt;hasShipments()) {
return false;
}

$result = false;
foreach ($subject-&gt;getShipments() as $shipment) {
$maxDiscount = $shipment-&gt;getAdjustmentsTotal(AdjustmentInterface::SHIPPING_ADJUSTMENT) + $shipment-&gt;getAdjustmentsTotal(AdjustmentInterface::ORDER_SHIPPING_PROMOTION_ADJUSTMENT);
if ($maxDiscount &lt; 0) {
continue;
}

$adjustmentAmount = (int) round($shipment-&gt;getAdjustmentsTotal(AdjustmentInterface::SHIPPING_ADJUSTMENT) * $configuration['percentage']);
if (0 === $adjustmentAmount) {
continue;
}

if ($maxDiscount &lt; $adjustmentAmount) {
$adjustmentAmount = $maxDiscount;
}

$adjustment = $this-&gt;createAdjustment($promotion);
$adjustment-&gt;setAmount(-$adjustmentAmount);
$shipment-&gt;addAdjustment($adjustment);
$result = true;
}

return $result;
}

/**
@throws UnexpectedTypeException
/

### `removePromotionFromShipment`

- **Parameters**: `PromotionInterface $promotion, ShipmentInterface $shipment`

