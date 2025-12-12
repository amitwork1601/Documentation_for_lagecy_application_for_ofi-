# Shipment.xml

**Path**: `config\api_platform\resources\admin\Shipment.xml`

## Summary
This API Platform configuration file defines an admin-level REST API endpoint for managing shipments in a Sylius e-commerce system. Specifically, it configures a PATCH operation at `/admin/shipments/{id}/ship` that processes a shipment by triggering the `ShipShipment` command through a messenger, allowing administrators to mark a shipment as shipped with proper serialization groups for input validation, denormalization, and normalization of the shipment data.

