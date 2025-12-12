# services.yml

**Path**: `plugins\PayzenPlugin\src\Resources\config\services.yml`

## Summary
This Symfony service configuration file defines the dependency injection setup for a Payzen payment gateway integration plugin for Sylius e-commerce platform. It registers three main services: auto-configured controllers for handling payment requests, a form type for configuring Payzen gateway settings in the admin panel, a Payum gateway factory builder that integrates Payzen as a payment method, and an SDK client factory for communicating with the Payzen payment API using repositories and state machines.

