# PayPalRefundDataProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\PayPalRefundDataProviderSpec.php`

## Summary
This is a PHPSpec specification file that tests the `PayPalRefundDataProvider` class, which retrieves refund-related data from PayPal's API. The provider authenticates with PayPal, fetches refund data from a given URL, extracts the "up" relation link from the response, and makes a follow-up API call to retrieve complete refund information. It validates that the PayPal API response contains the necessary URL links and throws a `PayPalWrongDataException` when required data is missing.

## Classes
- `PayPalRefundDataProviderSpec`

