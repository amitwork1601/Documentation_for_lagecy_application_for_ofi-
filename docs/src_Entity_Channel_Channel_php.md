# Channel.php

**Path**: `src\Entity\Channel\Channel.php`

## Summary
The `Channel` class extends Sylius e-commerce framework's base Channel entity to add custom configuration properties for multi-channel store management. It adds three main extensions: a product URL pattern for generating product links, a Strapi CMS base URL for headless content management integration, and a flexible JSON-based environment configuration array. The class is exposed as a GraphQL API resource with search and ordering capabilities, allowing dynamic property access for retrieving nested configuration values using Symfony's PropertyAccessor component.

## Classes
- `Channel`

## Function Details

### `getProductUrlPattern`


### `setProductUrlPattern`

- **Parameters**: `?string $productUrlPattern`

### `getStrapiBaseUrl`


### `setStrapiBaseUrl`

- **Parameters**: `?string $strapiBaseUrl`

### `getEnvConfig`


### `setEnvConfig`

- **Parameters**: `?array $envConfig`

### `getEnvConfigWithKey`

- **Parameters**: `string $key`
- **Description**: @see https://symfony.com/doc/current/components/property_access.html

@param string $key format as "[gtm][measurement_id]"

@return array|mixed|null
/

### `getPropertyAccessor`


