# HttpProcessor.php

**Path**: `src\Monolog\Datadog\Processor\HttpProcessor.php`

## Summary
This Monolog processor enriches HTTP request log records with request-specific metadata for Datadog logging integration. It extracts and appends HTTP request details (URL, method, user agent, referer, forwarded IP) and generates a unique request ID to correlate all logs from the same request, skipping processing for CLI environments. The processor integrates with Symfony's dependency injection to automatically tag and apply itself to all Monolog log entries during web requests.

## Classes
- `HttpProcessor`

## Function Details

### `__invoke`

- **Parameters**: `LogRecord $record`

