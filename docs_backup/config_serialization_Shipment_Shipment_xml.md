# Shipment.xml

**Path**: `config\serialization\Shipment\Shipment.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the `Shipment` entity in an e-commerce application. It controls which shipment attributes (id, createdAt, updatedAt, state, method) are exposed in different API contexts, such as admin views, shop views, order management, and subscription services. The configuration enables fine-grained access control over shipment data across various user roles and application features (admin panels, customer-facing shop, web methods).

