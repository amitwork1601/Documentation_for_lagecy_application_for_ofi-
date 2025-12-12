# marking_order_as_refunded_via_pay_pal.feature

**Path**: `plugins\PayPalPlugin\features\marking_order_as_refunded_via_pay_pal.feature`

## Summary
This Gherkin feature file tests the PayPal plugin's ability to automatically update an order's payment state to "Refunded" when a refund is initiated from PayPal's side. It ensures that when PayPal sends a refund notification for a paid order, the e-commerce system correctly synchronizes the order status by marking both the payment and order's payment state as refunded. This maintains consistency between the store's order management system and PayPal's payment records.

## Function Details

### `Having order marked as refunded after PayPal-initialized refund`

- **Description**: Scenario

