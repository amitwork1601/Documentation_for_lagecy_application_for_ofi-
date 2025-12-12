# TraceIdProcessor.php

**Path**: `src\Monolog\Datadog\Processor\TraceIdProcessor.php`

## Summary
This Monolog processor adds a consistent trace ID to all log records within the same request/process lifecycle for distributed tracing and log correlation in Datadog. It generates a unique trace ID on first invocation and appends it to the 'extra' field of every subsequent log record, enabling developers to group and track related log entries across a single execution context.

## Classes
- `TraceIdProcessor`

## Function Details

### `__invoke`

- **Parameters**: `LogRecord $record`

