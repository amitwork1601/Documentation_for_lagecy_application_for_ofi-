# DatadogHandler.php

**Path**: `src\Monolog\Datadog\DatadogHandler.php`

## Summary
The `DatadogHandler` class is a custom Monolog log handler that integrates application logging with Datadog's monitoring service. It extends Monolog's `AbstractProcessingHandler` to intercept log records at INFO level and above, formats them using a `DatadogFormatter`, and sends them to Datadog via a `DatadogSender` component for centralized log aggregation and observability.

## Classes
- `DatadogHandler`

## Function Details

### `__construct`

- **Parameters**: `DatadogFormatter $formatter, private readonly DatadogSender $datadogSender`

### `write`

- **Parameters**: `LogRecord $record`

