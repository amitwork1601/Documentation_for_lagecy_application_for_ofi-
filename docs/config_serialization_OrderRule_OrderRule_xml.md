# OrderRule.xml

**Path**: `config\serialization\OrderRule\OrderRule.xml`

## Summary
This XML file configures serialization groups for the `OrderRule` entity in a Symfony application, defining which attributes are exposed during create, read, and update operations in the admin context. It specifies that the `id` field is only readable, while other fields like `name`, `description`, `enabled`, `channels`, `conditions`, and `translations` are accessible across create, read, and update operations. This configuration enables granular control over data exposure in API endpoints or other serialization scenarios for managing business rules applied to orders.

