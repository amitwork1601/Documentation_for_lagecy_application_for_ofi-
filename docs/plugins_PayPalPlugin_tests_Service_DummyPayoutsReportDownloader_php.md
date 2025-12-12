# DummyPayoutsReportDownloader.php

**Path**: `plugins\PayPalPlugin\tests\Service\DummyPayoutsReportDownloader.php`

## Summary
This is a test double implementation of the PayoutsReportDownloaderInterface used for testing PayPal payout report functionality in the Sylius PayPal plugin. It provides a dummy implementation that always returns a mock Report object with hardcoded values instead of actually downloading real payout reports from PayPal, allowing tests to run without external API dependencies.

## Classes
- `DummyPayoutsReportDownloader`

## Function Details

### `downloadFor`

- **Parameters**: `\DateTimeInterface $day, PaymentMethodInterface $paymentMethod`

