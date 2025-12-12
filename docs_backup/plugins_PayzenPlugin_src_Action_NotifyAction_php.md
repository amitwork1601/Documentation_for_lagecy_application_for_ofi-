# NotifyAction.php

**Path**: `plugins\PayzenPlugin\src\Action\NotifyAction.php`

## Summary
The `NotifyAction` class handles payment notification callbacks from the Payzen payment gateway in a Sylius e-commerce application. When a payment notification is received, it validates the request, extracts the payment details, and triggers a synchronization action to update the local payment state with the gateway's response, ensuring the order status reflects the actual payment status from Payzen.

## Classes
- `NotifyAction`

## Function Details

### `execute`

- **Parameters**: `$request`
- **Description**: Class NotifyAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
class NotifyAction implements ActionInterface, GatewayAwareInterface
{
use GatewayAwareTrait;

/**
@param Notify $request
/

### `supports`

- **Parameters**: `$request`

