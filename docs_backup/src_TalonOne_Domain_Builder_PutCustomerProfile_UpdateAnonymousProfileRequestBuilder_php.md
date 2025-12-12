# UpdateAnonymousProfileRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\PutCustomerProfile\UpdateAnonymousProfileRequestBuilder.php`

## Summary
This builder class constructs API requests to update anonymous customer profiles in the TalonOne promotion engine system. It creates a `PutCustomerProfileRequest` with an anonymous profile ID derived from an order, populating it with locale, channel, and business report attributes, then configures the request to execute the TalonOne rule engine and return triggered campaigns and customer profile data.

## Classes
- `UpdateAnonymousProfileRequestBuilder`

## Function Details

### `__construct`

- **Parameters**: `private readonly Order $order`

### `reset`


### `produceRequestPayload`


### `produceRequestQueryParams`


### `getRequest`


