# AvailableCountriesProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\AvailableCountriesProviderSpec.php`

## Summary
This is a PHPSpec test specification for an `AvailableCountriesProvider` class in the PayPal plugin for Sylius e-commerce platform. It tests the provider's functionality to retrieve available country codes for PayPal transactions, with logic that falls back to all enabled countries from the repository when the current channel has no specific countries configured, or uses the channel's restricted country list when available.

## Classes
- `AvailableCountriesProviderSpec`

## Function Details

### `let`

- **Parameters**: `RepositoryInterface $countryRepository, ChannelContextInterface $channelContext`

