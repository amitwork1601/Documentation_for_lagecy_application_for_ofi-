# PaymentInstrument.php

**Path**: `src\Entity\Customer\PaymentInstrument.php`

## Summary
This is a Doctrine ORM entity class that represents a customer's stored payment instrument (e.g., saved credit card, bank account) in an e-commerce system built with Sylius. The entity manages payment instrument lifecycle states (draft, processing, active, expired, revoked), stores encrypted payment details as JSON, tracks expiration dates, and maintains relationships between customers and their payment methods. It includes audit tracking and timestamping capabilities for compliance and record-keeping purposes.

## Classes
- `PaymentInstrument`

## Function Details

### `getId`


### `getCode`


### `setCode`

- **Parameters**: `string $code`

### `getState`


### `setState`

- **Parameters**: `string $state`

### `getCustomer`


### `setCustomer`

- **Parameters**: `?Customer $customer`

### `getMethod`


### `setMethod`

- **Parameters**: `?PaymentMethod $method`

### `getDetails`


### `setDetails`

- **Parameters**: `$details`

### `getExpiration`


### `setExpiration`

- **Parameters**: `?\DateTime $expiration`

