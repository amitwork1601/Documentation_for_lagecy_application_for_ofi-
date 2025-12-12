# PaymentMethod.php

**Path**: `plugins\PayPalPlugin\src\Model\PaymentMethod.php`

## Summary
The `PaymentMethod` class represents PayPal payment method configuration options for transactions in the Sylius PayPal plugin. It encapsulates payment preferences including payee-preferred payment types (unrestricted or immediate payment required), optional payer-selected payment methods, and standard entry class codes (SEC) for ACH transactions (TEL, WEB, CCD, PPD). The class validates these payment settings and provides serialization to an array format for PayPal API requests.

## Classes
- `PaymentMethod`

## Function Details

### `toArray`


### `getPayeePreferred`


### `getPayerSelected`


### `getStandardEntryClassCode`


