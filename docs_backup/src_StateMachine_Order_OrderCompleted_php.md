# OrderCompleted.php

**Path**: `src\StateMachine\Order\OrderCompleted.php`

## Summary
This class implements a state machine callback that triggers when an order is completed, specifically to send e-commerce tracking data to Google Tag Manager (GTM) via the Measurement Protocol API. It retrieves GTM credentials from the channel configuration, prepares order data including items, promotions, and customer information, and sends POST requests to GTM endpoints for analytics tracking purposes.

## Classes
- `OrderCompleted`

## Function Details

### `apply`

- **Parameters**: `Order $order`

### `prepareBody`

- **Parameters**: `Order $order`

### `extractCategoriesValue`

- **Parameters**: `?AttributeValueInterface $attributeValue`

### `getCollectUris`

- **Parameters**: `string $measurementId, string $gtmApiSecret`

### `getClassificationLiteral`

- **Parameters**: `$classificationCode`

