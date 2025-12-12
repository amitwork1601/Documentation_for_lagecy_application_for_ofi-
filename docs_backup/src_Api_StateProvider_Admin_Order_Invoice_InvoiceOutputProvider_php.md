# InvoiceOutputProvider.php

**Path**: `src\Api\StateProvider\Admin\Order\Invoice\InvoiceOutputProvider.php`

## Summary
This API state provider retrieves and generates signed URLs for order invoice documents stored in Google Cloud Storage. It looks up an order by its token value, fetches the invoice file path from the order entity, generates a temporary signed URL for secure access to the stored invoice PDF, and returns it wrapped in an `InvoiceOutput` DTO, throwing a `ResourceNotFoundException` if the invoice file cannot be accessed.

## Classes
- `InvoiceOutputProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

