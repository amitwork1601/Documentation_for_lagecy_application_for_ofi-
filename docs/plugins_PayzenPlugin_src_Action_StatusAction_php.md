# StatusAction.php

**Path**: `plugins\PayzenPlugin\src\Action\StatusAction.php`

## Summary
The `StatusAction` class is a Payum payment gateway action that interprets Payzen payment transaction result codes and maps them to standardized payment statuses (captured, pending, canceled, or failed). It examines the `vads_result` code from Payzen's response and translates various transaction outcomes (successful payments, card rejections, fraud suspicions, etc.) into Payum's internal status markers to drive the payment workflow in a Sylius e-commerce application.

## Classes
- `StatusAction`

## Function Details

### `execute`

- **Parameters**: `$request`
- **Description**: Class StatusAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
class StatusAction implements ActionInterface
{
/**
@param GetStatusInterface $request
/

### `supports`

- **Parameters**: `$request`

