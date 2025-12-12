# _contexts.yaml

**Path**: `config\behat\_contexts.yaml`

## Summary
This Symfony service configuration file defines Behat testing contexts for API-based behavioral testing of a Sylius e-commerce application. It configures service dependencies for shop-related test contexts (customer management, login, and registration) and setup contexts (channel configuration), injecting various clients, storage handlers, and API security components needed to execute BDD test scenarios. The file specifically organizes test contexts for testing shop customer workflows through API endpoints, with each context receiving the necessary tools for making API requests, checking responses, and managing test state.

