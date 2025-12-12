# ExceptionProcessor.php

**Path**: `src\Monolog\Datadog\Processor\ExceptionProcessor.php`

## Summary
This Monolog processor extracts exception details from log record contexts and reformats them into a structured format suitable for Datadog logging. When a log record contains an exception in its context, it extracts the exception's message and stack trace into the record's `extra['error']` field, making exception data more accessible for Datadog's error tracking and analysis features.

## Classes
- `ExceptionProcessor`

## Function Details

### `__invoke`

- **Parameters**: `LogRecord $record`

### `getHostname`


