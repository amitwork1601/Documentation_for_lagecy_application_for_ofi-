# SendShipmentConfirmationMailAction.php

**Path**: `src\Api\Controller\Order\SendShipmentConfirmationMailAction.php`

## Summary
This API controller action handles sending shipment confirmation emails for orders in an e-commerce system. It retrieves an order by its token value, validates that the order exists and has a shipment in "shipped" state, then triggers the shipment confirmation email to be sent to the customer before returning a 204 No Content response.

## Classes
- `SendShipmentConfirmationMailAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

