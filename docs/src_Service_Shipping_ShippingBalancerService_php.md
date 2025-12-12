# ShippingBalancerService.php

**Path**: `src\Service\Shipping\ShippingBalancerService.php`

## Summary
The `ShippingBalancerService` is responsible for managing and optimizing shipping date distribution for subscription-based orders. It calculates estimated shipping dates while considering factors like subscription intervals, frequency groups, holidays, and load balancing across shipping calendars to prevent overwhelming specific shipping dates with too many orders.

## Classes
- `ShippingBalancerService`

## Function Details

### `getEstimatedShippingDate`

- **Parameters**: `Subscription $subscription`
- **Description**: @throws NonUniqueResultException
@throws NoResultException
/

### `getEstimatedShippingDateRange`

- **Parameters**: `Subscription $subscription`
- **Description**: @var \DateTime|null $estimatedShippingDate */
$estimatedShippingDate = $this-&gt;propertyAccessor-&gt;getValue(
$logs,
'[0][shifted][raw]'
);
}

$this-&gt;addLogs($subscription, 'estimated-shipping-date', $estimatedShippingDate);
}

return $estimatedShippingDate;
}

/**
@throws \Exception
/

### `getTheoreticalShippingDate`

- **Parameters**: `Subscription $subscription`
- **Description**: @var \DateTime $lastOrderShippingDate */
$lastOrderShippingDate = $this-&gt;getLastOrderCheckoutCompletedAt($subscription);

if (null === $lastOrderShippingDate) {
$this-&gt;logger-&gt;error(
\sprintf(
'Can\'t estimate shipping dates range for subscription %s, '
. 'because last completed subscription order shipping date is null',
$subscription-&gt;getCode()
)
);

return [];
}

$currentDate = new \DateTime('today', $currentTimezone);

$start = clone $currentDate;
$start-&gt;setTime(0, 0, 0);
$start-&gt;add(new \DateInterval('P4D'));

$end = clone $lastOrderShippingDate;
$end-&gt;setTime(0, 0, 0);
$end-&gt;add(new \DateInterval('P5M'));

if ($end &lt;= $start) {
$this-&gt;logger-&gt;error(
\sprintf(
'Can\'t estimate shipping dates range for subscription %s, '
. 'because last completed subscription order shipping date "%s" '
. 'is way before current begin interval date "%s"',
$subscription-&gt;getCode(),
$end-&gt;format('c'),
$start-&gt;format('c')
)
);

return [];
}

$interval = new \DateInterval('P1D');
foreach (new \DatePeriod($start, $interval, $end) as $date) {
if (!$this-&gt;isDateHasEnoughCushion($date)) {
continue;
}

$estimatedShippingDateRange[] = $date-&gt;setTimezone($currentTimezone);
}

if (empty($estimatedShippingDateRange)) {
$this-&gt;logger-&gt;error(
\sprintf(
'Can\'t estimate shipping dates range for subscription %s, '
. 'because no estimated shipping date has been found',
$subscription-&gt;getCode()
)
);
}

return $estimatedShippingDateRange;
}

public function isDateHasEnoughCushion(\DateTime $date): bool
{
if ($this-&gt;isCalendarCloseDay($date)) {
return false;
}

$cushionCapacity = $this-&gt;getCushionCapacity($date);
try {
$countAllByNextShippingAt = $this-&gt;subscriptionRepository-&gt;countAllByNextShippingAtAndNotFromAlgo(
$date
);
} catch (NonUniqueResultException|NoResultException) {
return false;
}

return $countAllByNextShippingAt &lt; $cushionCapacity;
}

/**
Shipment date of a draft order obtained using the calculation :
Payment date + subscription interval in days

@throws NonUniqueResultException
@throws NoResultException
/

### `getRealShippingDate`

- **Parameters**: `Subscription $subscription`
- **Description**: Date théorique d’expédition si cette date est un jour ouvré, si Date théorique est un jour chômé
alors c’est le premier jour ouvré antérieur à Date théorique.

@throws NonUniqueResultException
@throws NoResultException
/

### `getCalendarCapacity`

- **Parameters**: `\DateTime $date, SubscriptionFrequencyGroup $frequencyGroup`
- **Description**: @throws NonUniqueResultException
@throws NoResultException
/

### `getCushionCapacity`

- **Parameters**: `\DateTime $date`

### `isCalendarCloseDay`

- **Parameters**: `\DateTime $date`

### `addLogs`

- **Parameters**: `Subscription $subscription, string $key, mixed $value`

### `getLastOrderCheckoutCompletedAt`

- **Parameters**: `Subscription $subscription`

### `getLogs`

- **Parameters**: `?int $id = null`

