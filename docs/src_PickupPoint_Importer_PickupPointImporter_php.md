# PickupPointImporter.php

**Path**: `src\PickupPoint\Importer\PickupPointImporter.php`

## Summary
The `PickupPointImporter` class manages the import and synchronization of pickup point data (physical locations where customers can collect shipments) with shipping methods. It handles creating or updating pickup points from DTOs, managing their relationships with shipping methods, processing closing periods, and controlling their active/inactive status based on whether they're still associated with any enabled shipping methods.

## Classes
- `PickupPointImporter`

## Function Details

### `deactivatePickupPoint`

- **Parameters**: `?PickupPoint $pickupPoint, ?ShippingMethod $shippingMethod`

### `disable`

- **Parameters**: `array $externalReferences, ShippingMethod $shippingMethod`

### `findMostSimilarPickupPoint`

- **Parameters**: `PickupPointDto $pickupPointDto`
- **Description**: @var PickupAddress $pickupAddress */
foreach ($pickupAddresses as $pickupAddress) {
$pickupAddress-&gt;setPickupPoint($commonPickupPoint);
}

$this-&gt;entityManager-&gt;remove($pickupPoint);
}
}

$pickupPoint = $commonPickupPoint;
}

if (!$pickupPoint instanceof PickupPoint) {
$pickupPoint = $this-&gt;findMostSimilarPickupPoint($pickupPointDto);

if (!$pickupPoint instanceof PickupPoint) {
$pickupPoint = $this-&gt;pickupPointFactory-&gt;createFromPickupPointDto($pickupPointDto);
$this-&gt;entityManager-&gt;persist($pickupPoint);

return $pickupPoint;
}
}

if (null === $commonPickupPoint) {
$this-&gt;pickupPointUpdater-&gt;updateFromPickupPointDto($pickupPoint, $pickupPointDto, $shippingMethod);
}

return $pickupPoint;
}

private function addClosingPeriods(
PickupPoint $pickupPoint,
PickupPointDto $pickupPointDto,
ShippingMethod $shippingMethod,
): void {
$pickupPointShippingMethod = $pickupPoint-&gt;getPickupPointShippingMethod($shippingMethod);
if (!$pickupPointShippingMethod instanceof PickupPointHasShippingMethod) {
return;
}

foreach ($pickupPointShippingMethod-&gt;getClosingPeriods() as $pickupPointClosingPeriod) {
$this-&gt;entityManager-&gt;remove($pickupPointClosingPeriod);
}

foreach ($pickupPointDto-&gt;closingPeriods as $period) {
$closingPeriod = new PickupPointClosingPeriod();
$closingPeriod
-&gt;setStartDate(new \DateTimeImmutable($period-&gt;startDate))
-&gt;setEndDate(new \DateTimeImmutable($period-&gt;endDate))
;
$this-&gt;entityManager-&gt;persist($closingPeriod);
$pickupPointShippingMethod-&gt;addClosingPeriod($closingPeriod);
}
}

private function addShippingMethod(
PickupPoint $pickupPoint,
PickupPointDto $pickupPointDto,
ShippingMethod $shippingMethod,
): void {
$externalRef = $pickupPointDto-&gt;externalReference;
$weightLimit = $pickupPointDto-&gt;weightLimit;

if ($this-&gt;hasShippingMethod($pickupPoint, $shippingMethod, $externalRef, $weightLimit)) {
return;
}

$pickupPointShippingMethod = new PickupPointHasShippingMethod();
$pickupPointShippingMethod-&gt;setExternalReference($externalRef);
$pickupPointShippingMethod-&gt;setShippingMethod($shippingMethod);
$pickupPointShippingMethod-&gt;setWeightLimit($weightLimit);

$this-&gt;entityManager-&gt;persist($pickupPointShippingMethod);
$pickupPoint-&gt;addPickupPointShippingMethod($pickupPointShippingMethod);
}

private function hasShippingMethod(
PickupPoint $pickupPoint,
ShippingMethod $shippingMethod,
string $externalReference,
?float $weightLimit,
): bool {
foreach ($pickupPoint-&gt;getPickupPointShippingMethods() as $pickupPointShippingMethod) {
if (null === $pickupPointShippingMethod-&gt;getWeightLimit() &amp;&amp; null !== $weightLimit) {
$pickupPointShippingMethod-&gt;setWeightLimit($weightLimit);
}

$shippingMethodOfPickupPoint = $pickupPointShippingMethod-&gt;getShippingMethod();

if ($pickupPointShippingMethod-&gt;getExternalReference() !== $externalReference) {
continue;
}

if ($shippingMethodOfPickupPoint-&gt;getId() !== $shippingMethod-&gt;getId()) {
continue;
}

$pickupPointShippingMethod-&gt;setEnabled(true);

return true;
}

return false;
}

private function disablePickupPoint(
PickupPoint $pickupPoint,
ShippingMethod $shippingMethod,
bool $enabled = true,
): void {
$pickupPointHasShippingMethod = $pickupPoint-&gt;getPickupPointShippingMethod($shippingMethod);
$now = new \DateTimeImmutable();

if (!$pickupPointHasShippingMethod instanceof PickupPointHasShippingMethod) {
return;
}

if (false === $enabled) {
$pickupPointHasShippingMethod-&gt;setEnabled(false);

return;
}

/** @var PickupPointClosingPeriod $period */
foreach ($pickupPointHasShippingMethod-&gt;getClosingPeriods() as $period) {
if ($period-&gt;getStartDate() &gt; $now || $period-&gt;getEndDate() &lt; $now) {
continue;
}
$enabled = false;
}

$pickupPointHasShippingMethod-&gt;setEnabled($enabled);
}

private function getCommonPickupPoint(PickupPointDto $pickupPointDto): ?PickupPoint
{
$commonPickupPoint = null;
if (null !== $pickupPointDto-&gt;commonReference &amp;&amp; \count($pickupPointDto-&gt;commonShippingMethods) &gt; 0) {
foreach ($pickupPointDto-&gt;commonShippingMethods as $commonShippingMethod) {
$commonPickupPoint = $this-&gt;pickupPointRepository-&gt;findOneByShippingMethodAndReference(
$commonShippingMethod,
$pickupPointDto-&gt;commonReference,
);

if ($commonPickupPoint instanceof PickupPoint) {
break;
}
}
}

return $commonPickupPoint;
}

/**
Try to find the most similar nearby Pickup Point.
/

