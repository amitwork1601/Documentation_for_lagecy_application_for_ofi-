# AddTrackingShippingNumberAction.php

**Path**: `src\Api\Controller\Order\AddTrackingShippingNumberAction.php`

## Summary
This API controller handles the addition of tracking numbers to shipping orders. It validates the order exists, retrieves it by ID, then dispatches a command via the message bus to associate the provided tracking number with the order's token, returning a 204 No Content response on success or appropriate error responses for validation failures or missing orders.

## Classes
- `AddTrackingShippingNumberAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request, ValidatorInterface $validator`
- **Description**: @throws \Throwable
/

