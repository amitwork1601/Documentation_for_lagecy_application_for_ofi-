# AdminUserGroup.xml

**Path**: `config\api_platform\resources\admin\AdminUserGroup.xml`

## Summary
This API Platform configuration file defines REST API endpoints for managing admin user groups in a Sylius-based application. It configures three standard CRUD operations (get collection, get single item, and post/create) with their respective serialization contexts, specifying which data groups should be included when reading or writing admin user group resources. The configuration uses the `admin` route prefix and applies different serialization group permissions for read operations (`admin:admin_user_group:read`) versus create operations (`admin:admin_user_group:create`).

