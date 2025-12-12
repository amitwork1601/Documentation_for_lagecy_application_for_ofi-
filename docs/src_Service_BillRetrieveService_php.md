# BillRetrieveService.php

**Path**: `src\Service\BillRetrieveService.php`

## Summary
The `BillRetrieveService` is responsible for retrieving invoice/bill files from Google Cloud Storage for a given order. It extracts the bill file path from an Order entity and uses the GoogleStorageFactory to download the corresponding file from the cloud storage bucket, returning either the file contents or false if no bill path exists.

## Classes
- `BillRetrieveService`

## Function Details

### `getBillFile`

- **Parameters**: `Order $order`
- **Description**: Télécharge la facture sur le bucket à partir des informations stockées sur la commande.
/

