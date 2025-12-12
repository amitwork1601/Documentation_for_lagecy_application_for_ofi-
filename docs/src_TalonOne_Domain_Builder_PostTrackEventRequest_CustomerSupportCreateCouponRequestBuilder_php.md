# CustomerSupportCreateCouponRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\PostTrackEventRequest\CustomerSupportCreateCouponRequestBuilder.php`

## Summary
This class builds a request payload for creating customer support coupons through the TalonOne promotion engine API. It extends an abstract track event builder to construct a specific event type that triggers coupon generation for a given customer, including their profile ID, custom attributes, and a request for the customer profile to be returned in the response.

## Classes
- `CustomerSupportCreateCouponRequestBuilder`

## Function Details

### `__construct`

- **Parameters**: `Customer $customer, private readonly array $attributes = []`

### `produceRequestPayload`


