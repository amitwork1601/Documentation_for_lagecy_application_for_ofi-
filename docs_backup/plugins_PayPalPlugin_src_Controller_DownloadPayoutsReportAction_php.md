# DownloadPayoutsReportAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\DownloadPayoutsReportAction.php`

## Summary
This controller action handles downloading PayPal payout reports for a specific payment method. It retrieves a payment method by ID from the request, fetches the payout report for the previous day using the PayoutsReportDownloader, and returns it as a CSV file download response with appropriate headers for file attachment.

## Classes
- `DownloadPayoutsReportAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

