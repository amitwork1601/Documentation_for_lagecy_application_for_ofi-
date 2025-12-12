# AbstractTrackEventRequestBuilder.php

**Path**: `src\TalonOne\Domain\Builder\PostTrackEventRequest\AbstractTrackEventRequestBuilder.php`

## Summary
This abstract builder class serves as a base for constructing POST requests to track events in the TalonOne promotion/loyalty platform. It provides common functionality for building event tracking requests associated with a customer, including setting query parameters (like 'dry' mode) and generating customer support-related attributes (discounts, fees, free items) that can be customized by concrete implementations. The class follows the Builder pattern to construct `PostTrackEventRequest` objects with configurable attributes for various promotional scenarios like product discounts, order adjustments, shipping/payment fee modifications, and free item provisions.

## Classes
- `AbstractTrackEventRequestBuilder`

## Function Details

### `__construct`

- **Parameters**: `protected Customer $customer`

### `reset`


### `produceRequestPayload`


### `produceRequestQueryParams`


### `getRequest`


