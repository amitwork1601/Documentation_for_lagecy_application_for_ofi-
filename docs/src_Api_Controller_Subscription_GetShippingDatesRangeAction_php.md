# GetShippingDatesRangeAction.php

**Path**: `src\Api\Controller\Subscription\GetShippingDatesRangeAction.php`

## Summary
This API controller action retrieves the estimated shipping date range for a given subscription by utilizing the ShippingBalancerService. It validates that the subscription exists and is not in a stopped state, then returns the available shipping dates formatted in ISO 8601 format as a JSON response, enabling clients to understand when their subscription items can be shipped.

## Classes
- `GetShippingDatesRangeAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

