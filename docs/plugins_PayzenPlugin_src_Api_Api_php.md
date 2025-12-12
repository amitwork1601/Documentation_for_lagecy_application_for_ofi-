# Api.php

**Path**: `plugins\PayzenPlugin\src\Api\Api.php`

## Summary
The `Api` class serves as a payment gateway integration for the Payzen payment service within a Sylius e-commerce application. It handles the configuration of payment requests, generates unique transaction IDs, and constructs properly formatted request URLs with signed parameters to communicate with the Payzen payment platform. The class uses Symfony's OptionsResolver to validate and normalize configuration and request data before sending payment transactions to the Payzen gateway.

## Classes
- `Api`

## Function Details

### `setConfig`

- **Parameters**: `array $config`
- **Description**: Class Api.

@author  Etienne Dauvergne &lt;contact@ekyna.com&gt;
/
class Api
{
/**
@var OptionsResolver
/
private $configResolver;

/**
@var OptionsResolver
/
private $requestOptionsResolver;

/**
@var array
/
private $config;

/**
Configures the api.
/

### `getTransactionId`

- **Description**: Returns the next transaction id.

@return string
/

### `createRequestUrl`

- **Parameters**: `array $data`
- **Description**: Creates the request url.

@return string
/

### `createRequestData`

- **Parameters**: `array $data`
- **Description**: Creates the request data.

@return array
/

### `checkResponseIntegrity`

- **Parameters**: `array $data`
- **Description**: Checks the response signature.

@return bool
/

### `generateSignature`

- **Parameters**: `array $data, $hashed = true`
- **Description**: Generates the signature.

@param bool $hashed

@return string
/

### `getDirectoryPath`

- **Description**: Returns the directory path and creates it if not exists.

@return string
/

### `getEndpoint`

- **Description**: Returns the endpoint url.

@return string

@throws \Exception
/

### `getWebserviceEndpoint`

- **Description**: Returns the endpoint url.

@return string

@throws \Exception
/

### `ensureApiIsConfigured`

- **Description**: Check that the API has been configured.

@throws LogicException
/

### `getConfigResolver`

- **Description**: Returns the config option resolver.

@return OptionsResolver
/

### `getRequestOptionsResolver`

- **Description**: Returns request options resolver.

@return OptionsResolver
/

### `getCurrencyCodes`


### `getLanguageCodes`


### `getCardsCodes`


### `getTransactionIdByTimestamp`


### `getTransactionIdByModeFile`


