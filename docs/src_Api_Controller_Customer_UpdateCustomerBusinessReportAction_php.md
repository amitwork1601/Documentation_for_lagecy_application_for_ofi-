# UpdateCustomerBusinessReportAction.php

**Path**: `src\Api\Controller\Customer\UpdateCustomerBusinessReportAction.php`

## Summary
This API controller handles HTTP requests to update a customer's business report. It validates the incoming JSON request to extract a customer ID, verifies the customer exists in the database, then dispatches an `UpdateCustomerBusinessReport` command via the message bus to trigger the business report update process asynchronously, returning an HTTP 202 (Accepted) response.

## Classes
- `UpdateCustomerBusinessReportAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

