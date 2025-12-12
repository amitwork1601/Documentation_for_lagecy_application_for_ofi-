# DatadogFormatter.php

**Path**: `src\Monolog\Datadog\DatadogFormatter.php`

## Summary
The `DatadogFormatter` class is a Monolog formatter that converts log records into JSON format compatible with Datadog's logging service. It implements `FormatterInterface` to provide three formatting methods: `format()` processes individual log records by interpolating context variables into the message and merging extra data, `formatBatch()` handles multiple records (currently incomplete with commented code), and `formatTrace()` creates a specialized trace format that appends serialized context and extra data to the interpolated message. The formatter enables structured logging integration with Datadog by transforming Monolog's log records into the JSON structure expected by Datadog's API.

## Classes
- `DatadogFormatter`

## Function Details

### `__construct`


### `formatBatch`

- **Parameters**: `array $records`

### `formatTrace`

- **Parameters**: `LogRecord $record`

### `format`

- **Parameters**: `LogRecord $record`

