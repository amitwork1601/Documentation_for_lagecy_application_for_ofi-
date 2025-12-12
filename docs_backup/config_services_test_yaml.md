# services_test.yaml

**Path**: `config\services_test.yaml`

## Summary
This Symfony service configuration file sets up the testing environment for Behat-based acceptance tests in a Sylius e-commerce application. It imports test-specific service definitions for API testing, hooks, and contexts, while implementing a workaround for a known `test.client.history` issue in the FriendsOfBehat SymfonyExtension by aliasing the browser client service and making all services public for test accessibility.

