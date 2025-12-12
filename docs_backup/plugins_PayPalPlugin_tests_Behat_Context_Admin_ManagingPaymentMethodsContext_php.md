# ManagingPaymentMethodsContext.php

**Path**: `plugins\PayPalPlugin\tests\Behat\Context\Admin\ManagingPaymentMethodsContext.php`

## Summary
This Behat context class provides test steps for managing PayPal payment methods in the Sylius admin interface. It enables testing of PayPal-specific functionality including downloading CSV reports for payment methods and validating PayPal gateway factory onboarding restrictions. The class integrates with Sylius's Behat testing infrastructure to verify admin workflows related to PayPal plugin payment method configuration.

## Classes
- `ManagingPaymentMethodsContext`

## Function Details

### `iDownloadPayPalReport`

- **Parameters**: `string $paymentMethodName`
- **Description**: @When I download report for :paymentMethodName payment method
/

### `yesterdayReportCsvFileShouldBeSuccessfullyDownloaded`

- **Description**: @Then yesterday report's CSV file should be successfully downloaded
/

### `iTryToCreateANewPaymentMethodWithGatewayFactory`

- **Description**: @When I try to create a new payment method with "PayPal" gateway factory
/

### `iShouldBeNotifiedThatICannotOnboardMoreThanOnePayPalSeller`

- **Description**: @Then I should be notified that I cannot onboard more than one PayPal seller
/

### `iShouldNotBeNotifiedThatICannotOnboardMoreThanOnePayPalSeller`

- **Description**: @Then I should not be notified that I cannot onboard more than one PayPal seller
/

