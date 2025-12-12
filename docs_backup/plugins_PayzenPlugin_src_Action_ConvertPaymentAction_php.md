# ConvertPaymentAction.php

**Path**: `plugins\PayzenPlugin\src\Action\ConvertPaymentAction.php`

## Summary
This class converts Sylius payment entities into Payzen payment gateway request parameters. It implements the Payum action pattern to transform order and payment data (amount, currency, order ID, customer details) into the specific `vads_*` fields required by the Payzen payment API, handling currency conversion and ensuring all mandatory payment parameters are properly formatted before transmission to the gateway.

## Classes
- `ConvertPaymentAction`

## Function Details

### `execute`

- **Parameters**: `$request`
- **Description**: Class ConvertPaymentAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
class ConvertPaymentAction implements ActionInterface, GatewayAwareInterface
{
use GatewayAwareTrait;

/**
@param Convert $request
/

### `supports`

- **Parameters**: `$request`

