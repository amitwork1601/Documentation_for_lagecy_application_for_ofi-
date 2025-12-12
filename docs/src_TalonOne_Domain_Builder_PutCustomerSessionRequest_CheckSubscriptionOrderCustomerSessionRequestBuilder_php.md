# CheckSubscriptionOrderCustomerSessionRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\PutCustomerSessionRequest\CheckSubscriptionOrderCustomerSessionRequestBuilder.php`

## Summary
This class builds a TalonOne API request to validate a subscription order's customer session in "dry run" mode, which checks promotional rules and coupon eligibility without actually applying them. It constructs a PUT request with the subscription order details, optional coupon codes, and uses the subscription's next shipping date as the evaluation time point. The builder follows a multi-step construction pattern (reset, produce payload, produce query params) to create a complete API request for promotional validation in a subscription e-commerce context.

## Classes
- `CheckSubscriptionOrderCustomerSessionRequestBuilder`

## Function Details

### `reset`


### `produceRequestPayload`


### `produceRequestQueryParams`


### `getRequest`


