# messenger.yaml

**Path**: `config\packages\messenger.yaml`

## Summary
This Symfony Messenger configuration file sets up message routing and transport infrastructure for asynchronous message processing in the application. It defines multiple message buses (command, query, and raw command buses) and configures various transport mechanisms including Redis for general async operations and Google Pub/Sub for critical operations, subscriptions, and email handling. The configuration supports a CQRS (Command Query Responsibility Segregation) architecture with different retry strategies and timeout settings for different message types, enabling reliable distributed message processing across different business domains like orders, customers, subscriptions, and promotions.

