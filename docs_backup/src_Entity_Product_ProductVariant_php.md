# ProductVariant.php

**Path**: `src\Entity\Product\ProductVariant.php`

## Summary
The `ProductVariant` entity extends Sylius's base product variant model to represent specific variants of products (e.g., different sizes, colors) in an e-commerce system. It is configured as an API Platform resource with GraphQL support, providing queryable endpoints for retrieving variant data with filtering capabilities (search, boolean filters) and custom collection resolvers, particularly for order-related variant queries. The entity integrates with Doctrine ORM for persistence, includes audit tracking, and maintains relationships with channel pricing to support multi-channel product management.

## Classes
- `ProductVariant`

## Function Details

### `isSubscribable`


### `setSubscribable`

- **Parameters**: `bool $subscribable`

### `isDisableForNewSubscription`


### `setDisableForNewSubscription`

- **Parameters**: `bool $disableForNewSubscription`

### `getCodeLogistic`


### `setCodeLogistic`

- **Parameters**: `?string $codeLogistic`

### `getNameWithOptionsValues`


### `createTranslation`


### `__toString`


### `getStock`


### `setStock`

- **Parameters**: `?string $stock`

### `isInStock`

- **Parameters**: `bool $excludePartialOutOfStock = false`

### `getName`


### `diffOptionValues`

- **Parameters**: `array $optionValues`

### `getChannelPricingForChannelCode`

- **Parameters**: `string $channelCode`

### `diffChannelPricings`

- **Parameters**: `array $channelPricings`

### `diffTranslations`

- **Parameters**: `array $translations`

### `getSubscriptionPrice`


### `setSubscriptionPrice`

- **Parameters**: `$subscriptionPrice`

