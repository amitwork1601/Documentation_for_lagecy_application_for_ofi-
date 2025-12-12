# DatadogLog.php

**Path**: `src\Monolog\Datadog\Dto\DatadogLog.php`

## Summary
This is a Data Transfer Object (DTO) that represents a structured log entry for Datadog's logging service. It defines the schema for log data that will be sent to Datadog, including standard logging fields (message, timestamp, status), infrastructure metadata (hostname, service, source), categorization (tags), and debugging information (stacktrace, extra data, context). This DTO serves as a contract between the application's Monolog logging system and the Datadog API, ensuring all required fields are present when transmitting logs to the Datadog platform.

## Classes
- `DatadogLog`

