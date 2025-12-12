# AbstractApiAction.php

**Path**: `plugins\PayzenPlugin\src\Action\Api\AbstractApiAction.php`

## Summary
This abstract base class provides common functionality for Payzen payment gateway API actions in a Sylius e-commerce integration. It implements the necessary Payum interfaces (ActionInterface, ApiAwareInterface, GatewayAwareInterface, LoggerAwareInterface) to handle payment operations, manage the Payzen API instance with type validation, and provide logging utilities for debugging payment transactions with optional data filtering for sensitive information.

## Classes
- `AbstractApiAction`

## Function Details

### `log`

- **Parameters**: `$message`
- **Description**: Class AbstractApiAction.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
abstract class AbstractApiAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface, LoggerAwareInterface
{
use GatewayAwareTrait;

/**
@var Api
/
protected $api;

/**
@var LoggerInterface
/
private $logger;

public function setApi($api)
{
if (false === $api instanceof Api) {
throw new UnsupportedApiException('Not supported.');
}

$this-&gt;api = $api;
}

public function setLogger(LoggerInterface $logger)
{
$this-&gt;logger = $logger;
}

/**
Logs the given message.

@param string $message
/

### `logData`

- **Parameters**: `$message, array $data, array $filterKeys = []`
- **Description**: Logs the given message and data.

@param string $message
/

