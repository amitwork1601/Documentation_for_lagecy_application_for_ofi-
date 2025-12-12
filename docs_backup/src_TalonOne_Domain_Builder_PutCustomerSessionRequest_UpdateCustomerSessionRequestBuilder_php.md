# UpdateCustomerSessionRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\PutCustomerSessionRequest\UpdateCustomerSessionRequestBuilder.php`

## Summary
This builder class constructs TalonOne API requests for updating customer sessions based on order data. It generates a `PutCustomerSessionRequest` by extracting order information (items, customer details), applying optional coupon codes, and enriching the session with shipping-related attributes (zipcode, country, shipping zone) when available. The class serves as part of an integration layer to synchronize e-commerce order state with the TalonOne promotional/campaign management platform.

## Classes
- `UpdateCustomerSessionRequestBuilder`

## Function Details

### `reset`


### `produceRequestPayload`


### `produceRequestQueryParams`


### `getRequest`


