# UpdateCustomerProfileRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\PutCustomerProfile\UpdateCustomerProfileRequestBuilder.php`

## Summary
This builder class constructs API requests for updating customer profiles in the TalonOne promotional engine system. It transforms a Customer entity into a PutCustomerProfileRequest by extracting customer attributes (group, locale, channel) and business report data, configuring the request to trigger the rule engine and return campaign and profile information. The builder follows a multi-step construction pattern (reset, produce payload/params, get request) to prepare customer profile updates for synchronization with TalonOne's integration API.

## Classes
- `UpdateCustomerProfileRequestBuilder`

## Function Details

### `__construct`

- **Parameters**: `private readonly Customer $customer`

### `reset`


### `produceRequestPayload`


### `produceRequestQueryParams`


### `getRequest`


