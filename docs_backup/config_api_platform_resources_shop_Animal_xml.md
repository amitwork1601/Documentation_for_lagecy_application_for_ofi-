# Animal.xml

**Path**: `config\api_platform\resources\shop\Animal.xml`

## Summary
This API Platform configuration file defines REST API endpoints for managing Animal resources in a shop context, specifically under the `/account/animals` route. It configures two operations: a GET collection endpoint for retrieving customer animals with read permissions, and a POST endpoint for creating new animals with custom processing logic through a dedicated `PersistProcessor`. The configuration uses serialization groups to control which Animal fields are exposed or accepted for each operation (read, create) in the shop's customer account area.

