# Address.php

**Path**: `src\Model\CheckoutCom\Address.php`

## Summary
This class extends the Checkout.com SDK's base Address class to provide enhanced address handling with null-safety for payment processing. It adds getter/setter methods that convert null values to empty strings for address fields (line1, line2, city, state, zip) and implements country code validation using the Checkout.com Country enum through reflection. The class serves as a wrapper to ensure address data is properly formatted and validated before being sent to the Checkout.com payment gateway.

## Classes
- `Address`

## Function Details

### `getAddressLine1`


### `setAddressLine1`

- **Parameters**: `?string $address_line1`

### `getAddressLine2`


### `setAddressLine2`

- **Parameters**: `?string $address_line2`

### `getCity`


### `setCity`

- **Parameters**: `?string $city`

### `getState`


### `setState`

- **Parameters**: `?string $state`

### `getZip`


### `setZip`

- **Parameters**: `?string $zip`

### `getCountry`


### `setCountry`

- **Parameters**: `?string $countryCode`

