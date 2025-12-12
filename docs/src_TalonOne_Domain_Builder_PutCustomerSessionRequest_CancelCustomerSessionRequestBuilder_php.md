# CancelCustomerSessionRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\PutCustomerSessionRequest\CancelCustomerSessionRequestBuilder.php`

## Summary
This builder class constructs API requests to cancel customer sessions in the TalonOne promotion engine system. It creates a `PutCustomerSessionRequest` that sets a customer session's state to "CANCELLED" based on an Order entity, configuring the payload to update the session state and setting query parameters to execute the cancellation (non-dry-run mode). This is used when an order needs to be cancelled and the corresponding promotional session in TalonOne must be invalidated.

## Classes
- `CancelCustomerSessionRequestBuilder`

## Function Details

### `__construct`

- **Parameters**: `private readonly Order $order`

### `reset`


### `produceRequestPayload`


### `produceRequestQueryParams`


### `getRequest`


