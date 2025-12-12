# SubscriptionTest.php

**Path**: `tests\Unit\Entity\Subscription\SubscriptionTest.php`

## Summary
This is a PHPUnit test class for the `Subscription` entity, which validates the core functionality of a subscription management system. The tests verify getter/setter methods and relationships for subscription properties including customer assignment, subscription items, orders, shipping/billing addresses, payment methods, and subscription lifecycle attributes (code, next shipping date, state, stop reasons). This ensures the Subscription entity correctly manages recurring order data and maintains proper associations with related entities like customers, payment instruments, channels, and addresses.

## Classes
- `SubscriptionTest`

## Function Details

### `testGetId`


### `testSetAndGetCode`


### `testSetAndGetNextShippingAt`


### `testAddAndRemoveItem`


### `testSetAndGetCustomer`


### `testSetAndGetOriginalOrder`


### `testSetAndGetBillingAddress`


### `testSetAndGetShippingMethod`


### `testSetAndGetPaymentInstrument`


### `testSetAndGetChannel`


### `testSetAndGetState`


### `testSetAndGetStoppedAt`


### `testSetAndGetSubscriptionInterval`


### `testSetAndGetPeriodicity`


### `testSetAndGetManual`


### `testSetAndGetNextShippingAtReference`


### `testSetAndGetSubscriptionAlert`


### `testSetAndGetStoppedReason`


### `testSetAndGetNextShippingAtBlameUserType`


### `testRollbackNextShippingAt`


### `testGetPaymentMethod`


### `testGetCardExpiration`


