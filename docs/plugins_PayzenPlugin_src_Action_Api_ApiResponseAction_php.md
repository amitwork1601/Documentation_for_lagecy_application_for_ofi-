# ApiResponseAction.php

**Path**: `plugins\PayzenPlugin\src\Action\Api\ApiResponseAction.php`

## Summary
This class handles incoming payment responses from the Payzen payment gateway API in a Sylius e-commerce integration. It validates the response by checking the payment amount matches the original request and verifying the response signature integrity, then updates the payment model with the validated response data. The class is part of the Payum payment processing workflow and logs key transaction details like order ID, transaction ID, authorization results, and validation mode for debugging purposes.

## Classes
- `ApiResponseAction`

## Function Details

### `logResponseData`

- **Parameters**: `array $data`
- **Description**: Class ResponseAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
class ApiResponseAction extends AbstractApiAction
{
public function execute($request)
{
/* @var Response $request */
RequestNotSupportedException::assertSupports($this, $request);

$model = ArrayObject::ensureArrayObject($request-&gt;getModel());

$this-&gt;gateway-&gt;execute($httpRequest = new GetHttpRequest());

if (isset($httpRequest-&gt;request['vads_result'])) {
$data = $httpRequest-&gt;request;
} elseif (isset($httpRequest-&gt;query['vads_result'])) {
$data = $httpRequest-&gt;query;
} else {
return;
}

$this-&gt;logResponseData($data);

// Check amount
if ($model['vads_amount'] !== $data['vads_amount']) {
return;
}

// Check the response signature
if ($this-&gt;api-&gt;checkResponseIntegrity($data)) {
// Update the payment details
$model-&gt;replace($data);
$request-&gt;setModel($model);
}
}

/**
Logs the response data.
/

### `supports`

- **Parameters**: `$request`
- **Description**: @inheritdec
/

