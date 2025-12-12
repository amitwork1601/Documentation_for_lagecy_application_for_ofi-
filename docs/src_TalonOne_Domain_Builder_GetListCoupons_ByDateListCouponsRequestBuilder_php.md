# ByDateListCouponsRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\GetListCoupons\ByDateListCouponsRequestBuilder.php`

## Summary
This builder class constructs API requests to retrieve a filtered list of coupons from TalonOne's Management API based on creation date criteria. It configures query parameters including optional `createdBefore` and `createdAfter` datetime filters for a specific application and campaign, with a fixed page size of 1000 records. The class follows the Builder pattern to incrementally construct a `GetListCouponsRequest` object with proper date formatting and query parameter configuration.

## Classes
- `ByDateListCouponsRequestBuilder`

## Function Details

### `reset`


### `produceRequestPayload`


### `produceRequestQueryParams`


### `getRequest`


