# SftpPayoutsReportDownloader.php

**Path**: `plugins\PayPalPlugin\src\Downloader\SftpPayoutsReportDownloader.php`

## Summary
This class downloads PayPal payout reports via SFTP for a specific date and payment method. It authenticates using credentials from the payment gateway configuration, retrieves a CSV report file following PayPal's naming convention (PYT.{date}.{partner_id}.R.0.2.0.CSV), and returns it as a Report object for further processing in the Sylius e-commerce platform.

## Classes
- `SftpPayoutsReportDownloader`

## Function Details

### `__construct`

- **Parameters**: `SFTP $sftp`

### `downloadFor`

- **Parameters**: `\DateTimeInterface $day, PaymentMethodInterface $paymentMethod`

