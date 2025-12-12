# SyncAction.php

**Path**: `plugins\PayzenPlugin\src\Action\SyncAction.php`

## Summary
The `SyncAction` class implements a Payum payment gateway synchronization action for the Payzen payment provider. It handles `Sync` requests by converting the payment model to an ArrayObject and executing a `Response` request through the gateway to synchronize the local payment state with Payzen's remote payment status. This ensures that the local payment data stays consistent with the actual transaction state on the Payzen platform.

## Classes
- `SyncAction`

## Function Details

### `execute`

- **Parameters**: `$request`
- **Description**: Class SyncAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
class SyncAction implements ActionInterface, GatewayAwareInterface
{
use GatewayAwareTrait;

/**
@param Sync $request
/

### `supports`

- **Parameters**: `$request`

