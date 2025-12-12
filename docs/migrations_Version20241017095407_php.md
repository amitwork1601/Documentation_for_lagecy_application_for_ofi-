# Version20241017095407.php

**Path**: `migrations\Version20241017095407.php`

## Summary
This Doctrine migration creates a `sylius_customer_business_report` table that stores aggregated business analytics and purchasing behavior for Sylius e-commerce customers. The table tracks key metrics including subscription status, order history timestamps, purchased products (as JSON), total items ordered, and order counts (overall and year-to-date), with a one-to-one relationship to the customer table. This enables efficient reporting and analysis of customer lifetime value and purchase patterns without repeatedly querying transactional data.

## Classes
- `Version20241017095407`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

