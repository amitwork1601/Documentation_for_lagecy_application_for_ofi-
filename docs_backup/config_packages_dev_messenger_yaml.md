# messenger.yaml

**Path**: `config\packages\dev\messenger.yaml`

## Summary
This Symfony Messenger configuration file defines four Redis-based message transport queues for asynchronous task processing in the development environment: critical operations, logging, subscription management, and email delivery. Each transport is configured to use Redis as the message broker with separate queue namespaces and implements a retry strategy that attempts failed messages up to 3 times with no delay between retries. This setup enables the application to handle background jobs asynchronously with different priority levels and failure recovery mechanisms.

