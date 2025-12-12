# OrderInvoice.vue

**Path**: `apps\front-ecommerce\components\order\OrderInvoice.vue`

## Summary
This Vue component manages order invoice retrieval and display for an e-commerce application. It provides a button that fetches and opens an order's invoice PDF in a new browser tab using the order's token value, with the button disabled if no invoice is available. When invoices aren't ready, it displays an informational banner to notify users why the invoice download is unavailable.

## Function Details

### `getInvoice`

- **Parameters**: `tokenValue: string | undefined`

