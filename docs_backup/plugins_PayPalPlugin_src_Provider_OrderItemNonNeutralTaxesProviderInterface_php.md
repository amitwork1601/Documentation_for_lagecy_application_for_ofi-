# OrderItemNonNeutralTaxesProviderInterface.php

**Path**: `plugins\PayPalPlugin\src\Provider\OrderItemNonNeutralTaxesProviderInterface.php`

## Summary
This interface defines a contract for providers that calculate and return non-neutral tax amounts associated with order items in a PayPal payment integration context. It exists to separate tax-neutral (e.g., included/VAT) from non-neutral taxes (e.g., sales tax, additional fees) that need to be explicitly reported to PayPal during checkout processing, ensuring accurate tax breakdown in PayPal transactions.

## Function Details

### `provide`

- **Parameters**: `OrderItemInterface $orderItem`
- **Description**: @return array|int[] */

