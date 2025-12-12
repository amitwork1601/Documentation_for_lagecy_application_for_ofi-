# BulkDebitSubscriptionOrderAction.php

**Path**: `src\Api\Controller\SubscriptionOrder\BulkDebitSubscriptionOrderAction.php`

## Summary
This API controller action handles bulk debit operations for subscription orders. It accepts a request containing multiple subscription order tokens, validates them, and dispatches a `BulkDebitSubscriptionOrder` command to a message bus for asynchronous processing, returning a 204 No Content response upon success or when no orders are provided.

## Classes
- `BulkDebitSubscriptionOrderAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request, ValidatorInterface $validator`

