# PayPalConfigurationProviderInterface.php

**Path**: `plugins\PayPalPlugin\src\Provider\PayPalConfigurationProviderInterface.php`

## Summary
This interface defines a contract for retrieving PayPal configuration settings within the Sylius e-commerce platform. It provides methods to fetch PayPal-specific credentials (client ID, partner attribution ID) and the payment method configuration for a given sales channel. The interface exists to abstract PayPal API configuration management and enable dependency injection for services that need to interact with PayPal payment processing on a per-channel basis.

## Function Details

### `getClientId`

- **Parameters**: `ChannelInterface $channel`

### `getPartnerAttributionId`

- **Parameters**: `ChannelInterface $channel`

### `getPayPalPaymentMethod`

- **Parameters**: `ChannelInterface $channel`

