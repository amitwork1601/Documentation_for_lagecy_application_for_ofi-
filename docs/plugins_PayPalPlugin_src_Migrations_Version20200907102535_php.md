# Version20200907102535.php

**Path**: `plugins\PayPalPlugin\src\Migrations\Version20200907102535.php`

## Summary
This is a Doctrine database migration for the Sylius PayPal Plugin that creates a credentials storage table for PayPal OAuth access tokens. The migration establishes the `sylius_paypal_plugin_pay_pal_credentials` table to store PayPal API access tokens with their creation and expiration times, linked to specific payment methods via a foreign key relationship, enabling the plugin to manage and persist PayPal authentication credentials for payment processing.

## Classes
- `Version20200907102535`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

