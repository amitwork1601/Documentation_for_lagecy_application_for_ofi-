# Adjustment.xml

**Path**: `config\serialization\Adjustment\Adjustment.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the `App\Entity\Order\Adjustment` entity. It controls which attributes (id, type, label) are exposed when serializing Adjustment objects across different contexts including admin panels, shop cart/order views, subscription management, and web API methods. The configuration ensures proper data visibility and access control by mapping entity attributes to specific serialization groups used throughout the application's order and subscription workflows.

