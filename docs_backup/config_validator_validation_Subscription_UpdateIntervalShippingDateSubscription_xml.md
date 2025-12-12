# UpdateIntervalShippingDateSubscription.xml

**Path**: `config\validator\validation\Subscription\UpdateIntervalShippingDateSubscription.xml`

## Summary
This XML file defines Symfony validation constraints for updating a subscription's shipping interval and date. It ensures that when modifying a subscription's `shippingDate`, the date either matches the current next shipping date or falls within a range from tomorrow to 365 days in the future, while the `interval` must be an integer type. The validation rules are applied to the `UpdateIntervalShippingDateSubscription` command class and are grouped under both "Default" and "sylius" validation groups for use in a Sylius-based e-commerce subscription system.

