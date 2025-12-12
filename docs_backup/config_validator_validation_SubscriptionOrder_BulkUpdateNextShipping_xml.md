# BulkUpdateNextShipping.xml

**Path**: `config\validator\validation\SubscriptionOrder\BulkUpdateNextShipping.xml`

## Summary
This Symfony validation configuration file defines constraints for the `BulkUpdateNextShipping` command, which handles bulk updates of subscription order shipping dates. It enforces that the `nextShippingAt` property must not be blank and must fall within a date range between tomorrow and 155 days in the future, ensuring subscription shipping schedules remain within acceptable business parameters.

