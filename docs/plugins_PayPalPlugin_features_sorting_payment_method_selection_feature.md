# sorting_payment_method_selection.feature

**Path**: `plugins\PayPalPlugin\features\sorting_payment_method_selection.feature`

## Summary
This Gherkin feature file tests the PayPal payment method prioritization during the e-commerce checkout process. It verifies that when multiple payment methods are configured with different position values (0-4), PayPal payment methods are automatically sorted to appear first and selected by default at the payment selection step, regardless of their assigned position numbers.

## Function Details

### `Seeing payment methods sorted`

- **Description**: Scenario

