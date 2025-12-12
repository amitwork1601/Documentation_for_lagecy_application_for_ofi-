# PayPalAddressProcessorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Processor\PayPalAddressProcessorSpec.php`

## Summary
This is a PhpSpec specification file that tests the `PayPalAddressProcessor` class, which is responsible for updating Sylius order shipping addresses with address data received from PayPal's API. The specs verify that the processor correctly maps PayPal's address format (with fields like `address_line_1`, `admin_area_2`, `postal_code`, `country_code`) to Sylius's internal address model and persists the changes through Doctrine's ObjectManager.

## Classes
- `PayPalAddressProcessorSpec`

## Function Details

### `let`

- **Parameters**: `ObjectManager $objectManager`

### `it_implements_pay_pal_address_processor_interface`


