# ChannelSpec.php

**Path**: `spec\Entity\Channel\ChannelSpec.php`

## Summary
This is a PHPSpec test specification for the `Channel` entity class, which extends Sylius's channel functionality. The spec verifies that the Channel entity properly implements the Sylius `ChannelInterface` and tests a custom `getEnvConfigWithKey()` method that retrieves nested configuration values (specifically GTM/Google Tag Manager settings) using bracket notation for array keys, returning null for non-existent keys.

## Classes
- `ChannelSpec`

## Function Details

### `it_is_initializable`


### `it_should_have_getEnvConfigWithKey_method`


