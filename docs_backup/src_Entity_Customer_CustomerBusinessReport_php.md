# CustomerBusinessReport.php

**Path**: `src\Entity\Customer\CustomerBusinessReport.php`

## Summary
This Doctrine entity represents a business intelligence/analytics report for customers in a Sylius-based e-commerce system. It tracks comprehensive customer purchase behavior including subscriber status, order history (first/last order dates, total counts), purchased products, coupon usage history, and order frequency metrics, with a one-to-one relationship to the Customer entity for generating customer insights and reporting.

## Classes
- `CustomerBusinessReport`

## Function Details

### `getId`


### `getCustomer`


### `setCustomer`

- **Parameters**: `Customer $customer`

### `getSubscriber`


### `setSubscriber`

- **Parameters**: `bool $subscriber`

### `getSubscriberSince`


### `setSubscriberSince`

- **Parameters**: `?DateTimeInterface $subscriberSince`

### `getFirstOrderAt`


### `setFirstOrderAt`

- **Parameters**: `?DateTimeInterface $firstOrderAt`

### `getLastOrderAt`


### `setLastOrderAt`

- **Parameters**: `?DateTimeInterface $lastOrderAt`

### `getBoughtProducts`


### `setBoughtProducts`

- **Parameters**: `array $boughtProducts`

### `getTotalItemsOrderedAmount`


### `setTotalItemsOrderedAmount`

- **Parameters**: `int $totalItemsOrderedAmount`

### `getTotalOrderCount`


### `setTotalOrderCount`

- **Parameters**: `int $totalOrderCount`

### `getTotalOrderCountThisYear`


### `setTotalOrderCountThisYear`

- **Parameters**: `int $totalOrderCountThisYear`

### `getHistoricUsedCoupons`


### `setHistoricUsedCoupons`

- **Parameters**: `array $historicUsedCoupons`

### `getUpdatedAt`


### `toArray`


