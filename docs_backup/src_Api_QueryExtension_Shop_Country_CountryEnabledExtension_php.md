# CountryEnabledExtension.php

**Path**: `src\Api\QueryExtension\Shop\Country\CountryEnabledExtension.php`

## Summary
This API Platform query extension filters the Country collection endpoint to only return enabled countries that are associated with the current channel when accessed through the shop API. It ensures that shop customers only see countries that are both enabled and configured for their specific sales channel, preventing them from selecting unavailable shipping/billing countries during checkout or registration.

## Classes
- `CountryEnabledExtension`

## Function Details

### `__construct`

- **Parameters**: `private SectionProviderInterface $sectionProvider`

