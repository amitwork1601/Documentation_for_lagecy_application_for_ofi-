# PayPalWebhookDataProviderInterface.php

**Path**: `plugins\PayPalPlugin\src\Provider\PayPalWebhookDataProviderInterface.php`

## Summary
This interface defines a contract for providers that retrieve webhook-related data from PayPal's API. It requires implementers to provide a method that fetches webhook information using a PayPal URL and a relationship parameter, likely used to configure and manage PayPal webhook integrations within the Sylius e-commerce platform.

## Function Details

### `provide`

- **Parameters**: `string $paypalUrl, string $rel`

