# Version20241107102201.php

**Path**: `migrations\Version20241107102201.php`

## Summary
This Doctrine database migration adds Strapi CMS integration fields to the Sylius e-commerce platform. It adds a `strapi_base_url` field to the channel table and introduces `template_slug` and `strapi_contents` fields to the email audit table, enabling the system to store and reference Strapi-managed content for emails while also standardizing the naming convention for `product_url_pattern`.

## Classes
- `Version20241107102201`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

