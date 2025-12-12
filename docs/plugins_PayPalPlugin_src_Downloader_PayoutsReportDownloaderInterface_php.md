# PayoutsReportDownloaderInterface.php

**Path**: `plugins\PayPalPlugin\src\Downloader\PayoutsReportDownloaderInterface.php`

## Summary
This interface defines a contract for downloading PayPal payout reports for a specific date and payment method. It serves as an abstraction layer for retrieving financial payout data from PayPal's API, returning a structured Report object or throwing a PayPalReportDownloadException if the download fails.

## Function Details

### `downloadFor`

- **Parameters**: `\DateTimeInterface $day, PaymentMethodInterface $paymentMethod`
- **Description**: @throws PayPalReportDownloadException
/

