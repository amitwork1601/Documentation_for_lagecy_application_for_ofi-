# Promotion.php

**Path**: `src\Entity\Promotion\Promotion.php`

## Summary
The `Promotion` entity extends Sylius's base promotion model to represent marketing promotions and discount campaigns in an e-commerce system. It provides a GraphQL API interface with extensive filtering capabilities (by coupon codes, channels, date ranges, usage) and auditing support for tracking promotional campaign changes. This entity manages promotion data including coupon relationships, validity periods, usage tracking, and multi-language translations for promotional content.

## Classes
- `Promotion`

## Function Details

### `getEndsAt`

- **Description**: used for GraphQL */
protected bool $deletable = false;

public function __construct()
{
parent::__construct();
$this-&gt;initializeTranslationsCollection();
$this-&gt;endsAt = new \DateTime('+1 year');
$this-&gt;analyticBroadcasts = new ArrayCollection();
}

public function getExclusiveMode(): int
{
return $this-&gt;exclusiveMode;
}

public function setExclusiveMode(int $exclusiveMode): self
{
$this-&gt;exclusiveMode = $exclusiveMode;

return $this;
}

public function getAnalyticCategory(): ?PromotionAnalyticCategory
{
return $this-&gt;analyticCategory;
}

public function setAnalyticCategory(?PromotionAnalyticCategory $analyticCategory): self
{
$this-&gt;analyticCategory = $analyticCategory;

return $this;
}

public function getAnalyticTarget(): ?PromotionAnalyticTarget
{
return $this-&gt;analyticTarget;
}

public function setAnalyticTarget(?PromotionAnalyticTarget $analyticTarget): self
{
$this-&gt;analyticTarget = $analyticTarget;

return $this;
}

public function getAnalyticBroadcasts(): Collection
{
return $this-&gt;analyticBroadcasts;
}

public function addAnalyticBroadcast(PromotionAnalyticBroadcast $analyticBroadcast): self
{
if (!$this-&gt;hasAnalyticBroadcast($analyticBroadcast)) {
$this-&gt;analyticBroadcasts-&gt;add($analyticBroadcast);
}

return $this;
}

public function removeAnalyticBroadcast(PromotionAnalyticBroadcast $analyticBroadcast): self
{
if ($this-&gt;hasAnalyticBroadcast($analyticBroadcast)) {
$this-&gt;analyticBroadcasts-&gt;removeElement($analyticBroadcast);
}

return $this;
}

public function hasAnalyticBroadcast(PromotionAnalyticBroadcast $analyticBroadcast): bool
{
return $this-&gt;analyticBroadcasts-&gt;contains($analyticBroadcast);
}

public function isReusableOnCanceled(): ?bool
{
return $this-&gt;reusableOnCanceled;
}

public function setReusableOnCanceled(bool $reusableOnCanceled): self
{
$this-&gt;reusableOnCanceled = $reusableOnCanceled;

return $this;
}

public function isOrderSpecific(): ?bool
{
return $this-&gt;orderSpecific;
}

public function setOrderSpecific(bool $orderSpecific): self
{
$this-&gt;orderSpecific = $orderSpecific;

return $this;
}

public function getCustomer(): ?Customer
{
return $this-&gt;customer;
}

public function setCustomer(?CustomerInterface $customer): self
{
$this-&gt;customer = $customer;

return $this;
}

public function getStartsAt(): ?\DateTimeInterface
{
/** @var \DateTime|null $datetime */
$datetime = $this-&gt;startsAt;

if (null !== $datetime) {
$timezone = date_default_timezone_get();
$datetime-&gt;setTimezone(new \DateTimeZone($timezone));
}

return $datetime;
}

/**
@throws \Exception
/

### `isDeletable`

- **Description**: used for GraphQL */

### `getCoupon`

- **Parameters**: `string $coupon`

### `createTranslation`


### `getLabel`


### `setLabel`

- **Parameters**: `?string $label`

### `getTranslation`

- **Parameters**: `?string $locale = null`

### `getTranslationClass`


