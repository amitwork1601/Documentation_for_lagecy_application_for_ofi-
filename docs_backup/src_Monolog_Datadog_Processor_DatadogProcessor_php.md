# DatadogProcessor.php

**Path**: `src\Monolog\Datadog\Processor\DatadogProcessor.php`

## Summary
This is a Monolog processor that enriches log records with Datadog-specific metadata for proper integration with Datadog's logging service. It automatically tags each log entry with Datadog-required fields including status (log level), source, environment tags, service name, and hostname by reading from environment variables (DD_SOURCE, DD_SERVICE, DD_TAGS, etc.). The processor ensures logs are properly formatted and contextualized when sent to Datadog's observability platform for monitoring and analysis.

## Classes
- `DatadogProcessor`

## Function Details

### `__invoke`

- **Parameters**: `LogRecord $record`

### `getHostname`


