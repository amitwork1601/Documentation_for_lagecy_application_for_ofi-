# ApiRequestAction.php

**Path**: `plugins\PayzenPlugin\src\Action\Api\ApiRequestAction.php`

## Summary
This class handles the initialization and submission of payment requests to the Payzen payment gateway. It generates a unique transaction ID and timestamp if not already present, creates a signed request URL with the payment data, and redirects the user to Payzen's payment form to complete the transaction.

## Classes
- `ApiRequestAction`

## Function Details

### `execute`

- **Parameters**: `$request`
- **Description**: Class RequestAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
class ApiRequestAction extends AbstractApiAction
{
/**
@throws HttpRedirect
/

### `logRequestData`

- **Parameters**: `array $data`
- **Description**: Logs the request data.
/

### `supports`

- **Parameters**: `$request`

