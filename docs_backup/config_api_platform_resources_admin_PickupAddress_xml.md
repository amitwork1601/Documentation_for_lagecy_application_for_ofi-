# PickupAddress.xml

**Path**: `config\api_platform\resources\admin\PickupAddress.xml`

## Summary
This API Platform resource configuration file defines a REST API endpoint for retrieving pickup address data in an admin context. It configures a single GET operation at `/admin/pickup-address/{id}` that uses the `admin:pickup_address:read` serialization group to control which fields are exposed when fetching individual pickup address records for administrative purposes.

