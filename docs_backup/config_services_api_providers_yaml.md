# providers.yaml

**Path**: `config\services\api\providers.yaml`

## Summary
# Summary

This service configuration file defines a composite payment state provider that aggregates multiple payment state handlers using Symfony's tagged iterator pattern. It enables the application to manage payment states across different payment methods or scenarios by collecting all services tagged with `app.api.payment_state_handler` and injecting them into the composite provider. This design pattern allows for extensible payment state handling where new payment state handlers can be added by simply tagging them, without modifying the composite provider itself.

