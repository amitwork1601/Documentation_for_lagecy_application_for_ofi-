# DatadogSender.php

**Path**: `src\Monolog\Datadog\DatadogSender.php`

## Summary
The `DatadogSender` class is responsible for sending formatted Monolog log records to Datadog's logging API via HTTP POST requests. It uses cURL to transmit logs to the configured Datadog endpoint with proper authentication headers (DD-API-KEY), returning a boolean indicating whether the request was successful based on the HTTP response code (2xx range).

## Classes
- `DatadogSender`

## Function Details

### `send`

- **Parameters**: `LogRecord $record`

