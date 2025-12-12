# Animal.xml

**Path**: `config\api_platform\resources\admin\Animal.xml`

## Summary
This API Platform configuration file defines REST API endpoints for managing Animal resources within an admin context. It configures three operations: GET collection (list animals), POST (create animal with custom persistence processor), and GET (retrieve single animal), each with specific serialization groups for controlling data exposure (read, create contexts). The configuration uses a parameterized class reference and applies the "admin" route prefix to all endpoints for administrative access control.

