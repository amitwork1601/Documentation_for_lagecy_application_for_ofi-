# PayPalCredentialsSpec.php

**Path**: `plugins\PayPalPlugin\spec\Entity\PayPalCredentialsSpec.php`

## Summary
This is a PhpSpec specification file that tests the `PayPalCredentials` entity, which stores OAuth access tokens and authentication credentials for PayPal payment method integrations in the Sylius e-commerce platform. The spec validates that the entity properly manages token lifecycle properties including access token storage, creation/expiration timestamps, association with payment methods, and token expiration status checking.

## Classes
- `PayPalCredentialsSpec`

## Function Details

### `let`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

### `it_implements_pay_pal_credentials_interface`


### `it_has_a_payment_method`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

### `it_has_a_access_token`


### `it_has_a_creation_time`


### `it_has_a_expiration_time`


### `it_can_be_expired`


