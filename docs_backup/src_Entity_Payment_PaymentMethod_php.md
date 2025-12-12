# PaymentMethod.php

**Path**: `src\Entity\Payment\PaymentMethod.php`

## Summary
The `PaymentMethod` entity extends Sylius's base payment method to add custom functionality for managing different types of payment methods in an e-commerce system. It implements taxable behavior and adds flags to control where payment methods can be used (admin orders, shop orders, or subscriptions), along with API Platform GraphQL endpoints for querying payment methods with various filters for code, position, gateway configuration, and enabled status.

## Classes
- `PaymentMethod`

## Function Details

### `__construct`


### `createTranslation`


### `getEnabledForSubscription`


### `setEnabledForSubscription`

- **Parameters**: `bool $enabledForSubscription`

### `isEnabledForAdminOrder`


### `setEnabledForAdminOrder`

- **Parameters**: `bool $enabledForAdminOrder`

### `getCharges`

- **Description**: @return Collection&lt;int, PaymentMethodCharges&gt;
/

### `addCharge`

- **Parameters**: `PaymentMethodCharges $charge`

### `removeCharge`

- **Parameters**: `PaymentMethodCharges $charge`

### `getTaxCategory`


### `setTaxCategory`

- **Parameters**: `?TaxCategoryInterface $category`

### `isEnabledForShopOrder`


### `setEnabledForShopOrder`

- **Parameters**: `bool $enabledForShopOrder`

