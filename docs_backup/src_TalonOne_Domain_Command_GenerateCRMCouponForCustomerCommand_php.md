# GenerateCRMCouponForCustomerCommand.php

**Path**: `src\TalonOne\Domain\Command\GenerateCRMCouponForCustomerCommand.php`

## Summary
This command class encapsulates the data and intent required to generate a personalized CRM coupon for a specific customer within the TalonOne integration system. It bundles customer identification with promotional analytics metadata (category, target, broadcasts) and CRM event attributes, serving as a data transfer object for coupon generation workflows. The class is marked with `CustomerIdAware` attribute for routing/middleware purposes and provides getter/setter methods to manage promotional analytics tracking data associated with the coupon generation process.

## Classes
- `GenerateCRMCouponForCustomerCommand`

## Function Details

### `getAnalyticBroadcasts`

- **Description**: @param string $customerId
@param PromotionAnalyticCategory $analyticCategory
@param PromotionAnalyticTarget $analyticTarget
@param PromotionAnalyticBroadcast[] $analyticBroadcasts
@param CRMEventAttributes $attributes
/
public function __construct(
public string $customerId,
private PromotionAnalyticCategory $analyticCategory,
private PromotionAnalyticTarget $analyticTarget,
private iterable $analyticBroadcasts,
private readonly CRMEventAttributes $attributes,
) {
}

public function getAttributes(): CRMEventAttributes
{
return $this-&gt;attributes;
}

/**
@return PromotionAnalyticBroadcast[]
/

### `setAnalyticBroadcasts`

- **Parameters**: `iterable $analyticBroadcasts`

### `getAnalyticTarget`


### `setAnalyticTarget`

- **Parameters**: `PromotionAnalyticTarget $analyticTarget`

### `getAnalyticCategory`


### `setAnalyticCategory`

- **Parameters**: `PromotionAnalyticCategory $analyticCategory`

