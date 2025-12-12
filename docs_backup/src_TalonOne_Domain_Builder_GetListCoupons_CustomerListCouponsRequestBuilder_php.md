# CustomerListCouponsRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\GetListCoupons\CustomerListCouponsRequestBuilder.php`

## Summary
This class builds API requests to retrieve a list of coupons associated with a specific customer from the TalonOne promotion management system. It implements the Builder pattern to construct a `GetListCouponsRequest` by setting query parameters including the customer's profile ID (as recipient integration ID), page size limit of 1000, and a flag to return values only, enabling the application to fetch customer-specific coupon data from a particular campaign.

## Classes
- `CustomerListCouponsRequestBuilder`

## Function Details

### `reset`


### `produceRequestPayload`


### `produceRequestQueryParams`


### `getRequest`


