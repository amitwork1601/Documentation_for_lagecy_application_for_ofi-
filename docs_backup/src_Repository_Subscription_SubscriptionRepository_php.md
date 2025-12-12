# SubscriptionRepository.php

**Path**: `src\Repository\Subscription\SubscriptionRepository.php`

## Summary
This repository class manages database queries for subscription entities in what appears to be a subscription-based e-commerce system. Its primary functionality is to count active subscriptions that match specific shipping date ranges and frequency intervals, likely used for batch processing or reporting on upcoming subscription shipments that need to be fulfilled.

## Classes
- `SubscriptionRepository`

## Function Details

### `countAllActiveNonManualByNextShippingAt`

- **Parameters**: `\DateTime $nextShippingAt`
- **Description**: @throws NonUniqueResultException
@throws NoResultException
/
public function countAllByNextShippingAtAndFrequency(
\DateTime $nextShippingAt,
?int $minRangeFrequency,
?int $maxRangeFrequency,
): int {
$cloneNextShippingAt = clone $nextShippingAt;
$cloneNextShippingAt-&gt;setTime(0, 0);

$start = clone $cloneNextShippingAt;
$start-&gt;sub(new \DateInterval(\sprintf('PT%sS', $cloneNextShippingAt-&gt;getOffset())));

$end = clone $start;
$end-&gt;add(new \DateInterval('P1D'));

$qb = $this-&gt;createQueryBuilder('s');
$qb
-&gt;select('COUNT(s.id)')
-&gt;andWhere('s.nextShippingAt &gt;= :nextShippingAtStart')
-&gt;andWhere('s.nextShippingAt &lt; :nextShippingAtEnd')
-&gt;andWhere('s.state = :state')

-&gt;setParameter('nextShippingAtStart', $start-&gt;format('Y-m-d H:i:s'))
-&gt;setParameter('nextShippingAtEnd', $end-&gt;format('Y-m-d H:i:s'))
-&gt;setParameter('state', SubscriptionState::ACTIVE)
;

if (null !== $minRangeFrequency) {
$qb
-&gt;andWhere('s.subscriptionInterval &gt;= :minFrequency')
-&gt;setParameter('minFrequency', $minRangeFrequency)
;
}

if (null !== $maxRangeFrequency) {
$qb
-&gt;andWhere('s.subscriptionInterval &lt;= :maxFrequency')
-&gt;setParameter('maxFrequency', $maxRangeFrequency)
;
}

return (int) $qb
-&gt;setCacheable(false)
-&gt;getQuery()
-&gt;disableResultCache()
-&gt;getSingleScalarResult()
;
}

private function createQueryBuilderForAllActiveByNextShippingAt(\DateTime $nextShippingAt): QueryBuilder
{
$cloneNextShippingAt = clone $nextShippingAt;
$cloneNextShippingAt-&gt;setTime(0, 0);

$start = clone $cloneNextShippingAt;
$start-&gt;sub(new \DateInterval(\sprintf('PT%sS', $cloneNextShippingAt-&gt;getOffset())));

$end = clone $start;
$end-&gt;add(new \DateInterval('P1D'));

$qb = $this-&gt;createQueryBuilder('s');
$qb
-&gt;andWhere('s.nextShippingAt &gt;= :nextShippingAtStart')
-&gt;andWhere('s.nextShippingAt &lt; :nextShippingAtEnd')
-&gt;andWhere($qb-&gt;expr()-&gt;eq('s.state', ':state'))
-&gt;setParameter('nextShippingAtStart', $start-&gt;format('Y-m-d H:i:s'))
-&gt;setParameter('nextShippingAtEnd', $end-&gt;format('Y-m-d H:i:s'))
-&gt;setParameter('state', SubscriptionState::ACTIVE)
;

return $qb;
}

private function createQueryBuilderForAllActiveNonManualByNextShippingAt(\DateTime $nextShippingAt): QueryBuilder
{
$qb = $this-&gt;createQueryBuilderForAllActiveByNextShippingAt($nextShippingAt);
$qb
-&gt;andWhere(
$qb-&gt;expr()-&gt;eq('s.manual', ':manual')
)
-&gt;setParameter('manual', false)
;

return $qb;
}

/**
@throws NonUniqueResultException
@throws NoResultException
/

### `findAllActiveNonManualByNextShippingAt`

- **Parameters**: `\DateTime $nextShippingAt`

### `countAllActiveByNextShippingAt`

- **Parameters**: `\DateTime $nextShippingAt`

### `findAllActiveByNextShippingAt`

- **Parameters**: `\DateTime $nextShippingAt`

### `findAllToRetryToDebit`


### `switchOrderChannel`

- **Parameters**: `Customer $customer`

### `findActiveByCode`

- **Parameters**: `string $code`

