# PayPalCredentials.php

**Path**: `plugins\PayPalPlugin\src\Entity\PayPalCredentials.php`

## Summary
The `PayPalCredentials` entity class stores OAuth access tokens and their lifecycle metadata for PayPal payment integration within the Sylius e-commerce platform. It maintains the relationship between a payment method and its corresponding PayPal API credentials, including the access token, creation time, and expiration time, allowing the system to authenticate API requests to PayPal and manage token refresh cycles.

## Classes
- `PayPalCredentials`

## Function Details

### `id`


### `paymentMethod`


### `accessToken`


### `creationTime`


### `expirationTime`


### `isExpired`


