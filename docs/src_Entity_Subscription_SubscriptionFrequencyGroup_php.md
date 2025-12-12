# SubscriptionFrequencyGroup.php

**Path**: `src\Entity\Subscription\SubscriptionFrequencyGroup.php`

## Summary
This entity represents a subscription frequency group in a Sylius-based e-commerce system, used to categorize and manage different subscription delivery frequencies. It defines frequency ranges (min/max), delivery date rebalancing margins (previous/next working days), and daily capacity caps to control subscription distribution and logistics scheduling. The class is exposed via GraphQL API for querying and managing subscription frequency configurations.

## Classes
- `SubscriptionFrequencyGroup`

## Function Details

### `getId`


### `getLabel`


### `setLabel`

- **Parameters**: `string $label`

### `getMinRange`


### `setMinRange`

- **Parameters**: `?int $minRange`

### `getMaxRange`


### `setMaxRange`

- **Parameters**: `?int $maxRange`

### `getPrevDayMargin`


### `setPrevDayMargin`

- **Parameters**: `int $prevDayMargin`

### `getPostDayMargin`


### `setPostDayMargin`

- **Parameters**: `int $postDayMargin`

### `getDailyCap`


### `setDailyCap`

- **Parameters**: `int $dailyCap`

