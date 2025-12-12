# processing-payments.md

**Path**: `plugins\PayPalPlugin\docs\processing-payments.md`

## Summary
This documentation describes a PayPal payment processing feature for a Sylius e-commerce plugin. The `sylius:pay-pal-plugin:complete-payments` command is designed to run as a scheduled cron job that automatically reconciles payment states by iterating through pending PayPal payments and marking them as complete when the corresponding orders are confirmed as paid in PayPal's system. This automation ensures payment statuses remain synchronized between the e-commerce platform and PayPal without manual intervention.

