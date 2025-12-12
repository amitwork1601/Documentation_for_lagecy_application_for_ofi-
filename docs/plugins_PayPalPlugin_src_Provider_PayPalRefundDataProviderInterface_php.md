# PayPalRefundDataProviderInterface.php

**Path**: `plugins\PayPalPlugin\src\Provider\PayPalRefundDataProviderInterface.php`

## Summary
This interface defines a contract for providers that retrieve refund data from PayPal's API. It exists to abstract the retrieval of refund information by accepting a PayPal refund URL and returning the associated refund data as an array, enabling the Sylius e-commerce platform to process and display PayPal refund details.

## Function Details

### `provide`

- **Parameters**: `string $refundUrl`

