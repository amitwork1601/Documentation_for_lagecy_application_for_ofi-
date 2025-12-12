# PaymentMethodCharges.php

**Path**: `src\Entity\Payment\PaymentMethodCharges.php`

## Summary
This entity class represents configurable payment charges for different payment methods based on transaction amount ranges. It defines a Doctrine ORM entity that stores charge configurations (min/max ranges and related settings) associated with payment methods, enabling tiered or range-based fee structures. The class is exposed via GraphQL API (read-only queries) and includes audit tracking, making it part of a Sylius-based e-commerce payment system.

## Classes
- `PaymentMethodCharges`

## Function Details

### `getId`


### `getPaymentMethod`


### `setPaymentMethod`

- **Parameters**: `?PaymentMethod $paymentMethod`

### `getRangeMin`


### `setRangeMin`

- **Parameters**: `string $rangeMin`

### `getRangeMax`


### `setRangeMax`

- **Parameters**: `string $rangeMax`

### `getConfiguration`


### `setConfiguration`

- **Parameters**: `array $configuration`

