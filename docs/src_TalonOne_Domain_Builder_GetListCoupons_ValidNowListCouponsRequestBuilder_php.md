# ValidNowListCouponsRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\GetListCoupons\ValidNowListCouponsRequestBuilder.php`

## Summary
This class is a builder that constructs API requests to retrieve currently valid coupons from TalonOne's management API for a specific application and campaign. It configures the request with query parameters to fetch up to 1000 coupons that are valid at the current moment (using the 'validNow' filter), returning only their values rather than full details. The builder follows the builder pattern to separate the construction logic of coupon list requests from their representation.

## Classes
- `ValidNowListCouponsRequestBuilder`

## Function Details

### `reset`


### `produceRequestPayload`


### `produceRequestQueryParams`


### `getRequest`


