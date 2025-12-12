# monolog.yaml

**Path**: `config\packages\monolog.yaml`

## Summary
This is a Symfony Monolog configuration file that sets up logging infrastructure for a backend application with Datadog integration. It configures environment-specific logging handlers: development logs to local files (including a dedicated TalonOne promotions channel), test uses error-level filtering, and production sends errors to Datadog monitoring service while excluding common HTTP error codes (401, 403, 404, 405). The configuration includes Datadog parameters for API integration and defines custom logging channels for deprecations, Datadog, and TalonOne (a promotions/loyalty platform).

