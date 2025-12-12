# CloseCustomerSession.php

**Path**: `src\TalonOne\Domain\UseCase\CloseCustomerSession.php`

## Summary
This use case class handles closing a customer session in the TalonOne promotional campaign management system when an order is completed. It builds a close session request using the order data, sends it to the TalonOne Integration API, and handles any technical or API errors that occur during the process. This is part of the order lifecycle integration, ensuring that promotional sessions are properly terminated and any applied discounts or loyalty effects are finalized in TalonOne.

## Classes
- `CloseCustomerSession`

## Function Details

### `execute`

- **Parameters**: `Order $order`

