# PayPalRefundDataProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\PayPalRefundDataProvider.php`

## Summary
This class provides PayPal refund data by retrieving information about a refund transaction through PayPal's API. It authenticates with PayPal using cached client credentials, fetches refund details from a given URL, then follows the "up" relationship link in the response to retrieve and return the associated parent payment transaction data.

## Classes
- `PayPalRefundDataProvider`

## Function Details

### `provide`

- **Parameters**: `string $url`

