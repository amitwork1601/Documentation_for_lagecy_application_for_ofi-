# ChannelBasedExtension.php

**Path**: `src\Api\QueryExtension\Shop\ShippingMethod\ChannelBasedExtension.php`

## Summary
This class is a Doctrine ORM query extension that filters shipping methods based on the current channel in a Sylius e-commerce shop API. It decorates the base `channel_based` query extension to ensure that when shipping methods are queried (both collections and individual items), only those available for the active channel are returned, preventing customers from seeing or selecting shipping methods not configured for their current sales channel.

## Classes
- `ChannelBasedExtension`

## Function Details

### `__construct`

- **Parameters**: `private SectionProviderInterface $sectionProvider`

