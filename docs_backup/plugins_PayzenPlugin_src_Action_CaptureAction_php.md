# CaptureAction.php

**Path**: `plugins\PayzenPlugin\src\Action\CaptureAction.php`

## Summary
The `CaptureAction` class implements a Payum payment gateway action for handling Payzen payment capture requests. It configures various redirect URLs (success, error, cancel, refused, return) by setting them to the payment token's target URL, and establishes a notify URL for payment status callbacks, enabling the Sylius e-commerce platform to process Payzen payment transactions and handle their various outcome scenarios.

## Classes
- `CaptureAction`

## Function Details

### `execute`

- **Parameters**: `$request`
- **Description**: Class CaptureAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
class CaptureAction implements ActionInterface, GatewayAwareInterface, GenericTokenFactoryAwareInterface
{
use GatewayAwareTrait;
use GenericTokenFactoryAwareTrait;

/**
@param Capture $request
/

### `supports`

- **Parameters**: `$request`

