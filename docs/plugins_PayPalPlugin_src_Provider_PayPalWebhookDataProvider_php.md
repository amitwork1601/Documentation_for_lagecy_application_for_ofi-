# PayPalWebhookDataProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\PayPalWebhookDataProvider.php`

## Summary
This class provides PayPal webhook data by authenticating with PayPal's API and traversing webhook links to retrieve specific resource data. It authorizes the client, fetches initial webhook data from a given URL, then searches through the response links to find and retrieve data from a link matching the specified relationship type (rel), throwing an exception if the requested link relationship is not found.

## Classes
- `PayPalWebhookDataProvider`

## Function Details

### `provide`

- **Parameters**: `string $url, string $rel`
- **Description**: @throws PayPalWrongDataException
@throws \Sylius\PayPalPlugin\Exception\PayPalPaymentMethodNotFoundException
/

