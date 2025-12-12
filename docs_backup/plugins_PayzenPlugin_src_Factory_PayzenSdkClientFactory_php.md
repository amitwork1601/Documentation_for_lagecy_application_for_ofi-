# PayzenSdkClientFactory.php

**Path**: `plugins\PayzenPlugin\src\Factory\PayzenSdkClientFactory.php`

## Summary
This factory class creates and configures instances of `PayzenSdkClient` for the Payzen payment gateway integration in Sylius. It retrieves payment configuration (site ID, REST password, and endpoint) from the stored Payzen payment method, then instantiates and initializes the SDK client with these credentials along with Payum and state machine dependencies for handling payment processing workflows.

## Classes
- `PayzenSdkClientFactory`

## Function Details

### `create`


