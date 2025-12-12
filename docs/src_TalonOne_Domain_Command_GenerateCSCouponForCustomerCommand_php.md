# GenerateCSCouponForCustomerCommand.php

**Path**: `src\TalonOne\Domain\Command\GenerateCSCouponForCustomerCommand.php`

## Summary
This command class represents a request to generate a customer support coupon for a specific customer through the TalonOne promotion system. It encapsulates all necessary data for coupon generation including customer identification, promotion analytics metadata (category, target, broadcasts), and custom event attributes that will be sent to TalonOne's API. The class serves as a data transfer object in a command pattern implementation, likely processed by a handler that communicates with TalonOne's coupon management service to create personalized promotional coupons for customer support purposes.

## Classes
- `GenerateCSCouponForCustomerCommand`

## Function Details

### `getAnalyticBroadcasts`

- **Description**: @param string $customerId
@param PromotionAnalyticCategory $analyticCategory
@param PromotionAnalyticTarget $analyticTarget
@param PromotionAnalyticBroadcast[] $analyticBroadcasts
@param CustomerSupportEventAttributes $attributes
/
public function __construct(
public string $customerId,
private PromotionAnalyticCategory $analyticCategory,
private PromotionAnalyticTarget $analyticTarget,
private iterable $analyticBroadcasts,
private CustomerSupportEventAttributes $attributes,
) {
}

public function getAttributes(): CustomerSupportEventAttributes
{
return $this-&gt;attributes;
}

public function getAnalyticCategory(): PromotionAnalyticCategory
{
return $this-&gt;analyticCategory;
}

public function setAnalyticCategory(PromotionAnalyticCategory $analyticCategory): void
{
$this-&gt;analyticCategory = $analyticCategory;
}

public function getAnalyticTarget(): PromotionAnalyticTarget
{
return $this-&gt;analyticTarget;
}

public function setAnalyticTarget(PromotionAnalyticTarget $analyticTarget): void
{
$this-&gt;analyticTarget = $analyticTarget;
}

/**
@return PromotionAnalyticBroadcast[]
/

### `setAnalyticBroadcasts`

- **Parameters**: `iterable $analyticBroadcasts`
- **Description**: @param PromotionAnalyticBroadcast[] $analyticBroadcasts
/

