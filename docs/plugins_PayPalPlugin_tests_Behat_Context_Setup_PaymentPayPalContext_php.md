# PaymentPayPalContext.php

**Path**: `plugins\PayPalPlugin\tests\Behat\Context\Setup\PaymentPayPalContext.php`

## Summary
This is a Behat context class for testing PayPal payment integration within the Sylius e-commerce platform. It provides test setup functionality to configure PayPal as a payment method in the store, allowing behavior-driven tests to simulate scenarios involving PayPal payment options during checkout. The class manages payment method creation, repository interactions, and page objects for testing the PayPal payment selection flow.

## Classes
- `PaymentPayPalContext`

## Function Details

### `theStoreAllowsPayingWithWithFactoryNameAtPosition`

- **Parameters**: `string $paymentMethodName, string $gatewayFactory, ?int $position = 0`
- **Description**: @Given /^the store allows paying with "([^"]*)" with "([^"]*)" factory name at position (\d+)$/
@Given /^the store allows paying with "([^"]*)" with "([^"]*)" factory name$/
/

### `iShouldHavePaymentMethodSelected`

- **Parameters**: `string $paymentMethodName`
- **Description**: @Given /^I should have "([^"]*)" payment method selected$/
/

### `findGatewayNameByTranslation`

- **Parameters**: `$translation, $gateways`

