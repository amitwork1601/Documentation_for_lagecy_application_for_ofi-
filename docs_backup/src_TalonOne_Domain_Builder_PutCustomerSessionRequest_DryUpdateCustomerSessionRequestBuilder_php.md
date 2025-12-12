# DryUpdateCustomerSessionRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\PutCustomerSessionRequest\DryUpdateCustomerSessionRequestBuilder.php`

## Summary
This builder class creates a "dry run" request for updating customer sessions in the TalonOne promotion/loyalty platform, specifically for validating orders without applying changes. It constructs a `PutCustomerSessionRequest` with customer session data from an `Order` entity, optionally includes coupon codes, and sets the request to dry-run mode to preview promotion/discount rule applications and potential failures. For subscription orders, it also handles special date resolution logic using a `HolidayDateResolver` to account for business closure dates.

## Classes
- `DryUpdateCustomerSessionRequestBuilder`

## Function Details

### `reset`


### `produceRequestPayload`


### `produceRequestQueryParams`


### `getRequest`


