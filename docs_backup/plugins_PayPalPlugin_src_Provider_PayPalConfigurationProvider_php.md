# PayPalConfigurationProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\PayPalConfigurationProvider.php`

## Summary
The `PayPalConfigurationProvider` class retrieves PayPal payment gateway configuration details for a specific Sylius e-commerce channel. It locates the PayPal payment method enabled for a given channel and extracts configuration values like the client ID and partner attribution ID, which are required for PayPal API integration. This provider acts as a centralized service to access PayPal-specific settings needed for payment processing within the Sylius platform.

## Classes
- `PayPalConfigurationProvider`

## Function Details

### `__construct`

- **Parameters**: `PaymentMethodRepositoryInterface $paymentMethodRepository`

### `getClientId`

- **Parameters**: `ChannelInterface $channel`

### `getPartnerAttributionId`

- **Parameters**: `ChannelInterface $channel`

### `getPayPalPaymentMethod`

- **Parameters**: `ChannelInterface $channel`

### `getPayPalPaymentMethodConfig`

- **Parameters**: `ChannelInterface $channel`

