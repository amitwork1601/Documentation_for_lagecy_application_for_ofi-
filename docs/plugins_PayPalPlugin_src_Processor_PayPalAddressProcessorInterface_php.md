# PayPalAddressProcessorInterface.php

**Path**: `plugins\PayPalPlugin\src\Processor\PayPalAddressProcessorInterface.php`

## Summary
This interface defines a contract for processing PayPal address data within the Sylius e-commerce platform's PayPal plugin. It specifies a single method that takes an address array (typically returned from PayPal API) and an order object, likely to synchronize or update the order's address information with the address data received from PayPal during the payment process.

## Function Details

### `process`

- **Parameters**: `array $address, OrderInterface $order`
- **Description**: @param array&lt;string, string&gt; $address
/

