# DatadogLogFactory.php

**Path**: `src\Monolog\Datadog\Factory\DatadogLogFactory.php`

## Summary
This factory class converts Monolog log records into Datadog-compatible log objects for integration with Datadog's logging service. It extracts log data from Monolog's `LogRecord` format and maps it to a `DatadogLog` DTO, enriching it with environment-specific metadata such as hostname, source, environment tags, and Datadog-specific configuration from environment variables. The class serves as an adapter layer between Monolog's logging framework and Datadog's expected log format for centralized log management and monitoring.

## Classes
- `DatadogLogFactory`

## Function Details

### `fromRecord`

- **Parameters**: `LogRecord $record`

### `getHostname`


