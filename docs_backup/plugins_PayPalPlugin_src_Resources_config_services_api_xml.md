# api.xml

**Path**: `plugins\PayPalPlugin\src\Resources\config\services\api.xml`

## Summary
This Symfony service configuration file defines the API client infrastructure for the PayPal payment integration plugin in Sylius. It configures the core PayPalClient service with dependencies for HTTP communication, logging, UUID generation, and channel context, along with API-specific services for authorizing PayPal clients and payment orders. The file also sets parameters for request retry limits and enhanced logging to support reliable PayPal API interactions.

