# RefundAction.php

**Path**: `plugins\PayzenPlugin\src\Action\RefundAction.php`

## Summary
This class implements a Payum payment gateway refund action for the Payzen payment provider in a Sylius e-commerce context. It checks if a payment transaction has been captured, and if so, marks it for refund by setting a 'state_override' flag to 'refunded' in the payment model, enabling the refund workflow for completed payments.

## Classes
- `RefundAction`

## Function Details

### `execute`

- **Parameters**: `$request`
- **Description**: Class CaptureAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
class RefundAction implements ActionInterface, GatewayAwareInterface
{
use GatewayAwareTrait;

/**
@param Refund $request
/

### `supports`

- **Parameters**: `$request`

