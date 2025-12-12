# PayPalAddressProcessor.php

**Path**: `plugins\PayPalPlugin\src\Processor\PayPalAddressProcessor.php`

## Summary
The `PayPalAddressProcessor` class processes and updates shipping address information received from PayPal transactions by mapping PayPal's address format to Sylius order addresses. It validates required address fields (city, street, postal code, country code) from PayPal's response, combines address lines into a single street field, and persists the updated shipping address to the order entity through Doctrine ORM.

## Classes
- `PayPalAddressProcessor`

## Function Details

### `__construct`

- **Parameters**: `ObjectManager $objectManager`

### `process`

- **Parameters**: `array $address, OrderInterface $order`
- **Description**: @param array&lt;string, string&gt; $address
/

