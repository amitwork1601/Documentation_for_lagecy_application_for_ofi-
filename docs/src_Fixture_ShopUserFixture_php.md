# ShopUserFixture.php

**Path**: `src\Fixture\ShopUserFixture.php`

## Summary
This class extends Sylius's base `ShopUserFixture` to customize the configuration schema for loading shop user test data fixtures. It defines the structure and validation rules for shop user fixture data, specifying required fields (email, first_name, last_name, password, channel) and optional fields (gender, phone_number, birthday, enabled status, customer_group) that can be used when seeding the database with shop user records for testing or development purposes.

## Classes
- `ShopUserFixture`

## Function Details

### `configureResourceNode`

- **Parameters**: `ArrayNodeDefinition $resourceNode`

