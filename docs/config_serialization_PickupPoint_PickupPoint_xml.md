# PickupPoint.xml

**Path**: `config\serialization\PickupPoint\PickupPoint.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the `PickupPoint` entity. It controls which attributes (`tokenValue`, `location`, `photo`) are exposed in different API contexts, including admin and shop interfaces for orders, subscriptions, and pickup point operations. The configuration enables fine-grained access control over pickup point data across various read and search operations in both administrative and customer-facing scenarios.

