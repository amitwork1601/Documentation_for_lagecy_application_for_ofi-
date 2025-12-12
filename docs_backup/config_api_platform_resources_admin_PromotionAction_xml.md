# PromotionAction.xml

**Path**: `config\api_platform\resources\admin\PromotionAction.xml`

## Summary
This API Platform configuration file defines REST API endpoints for managing promotion actions in Sylius's admin interface. It configures three operations: GET collection (list all promotion actions), GET single item (retrieve one promotion action), and POST (create new promotion action), each with specific serialization groups for controlling data exposure. The configuration uses the `sylius:admin:promotion:show` group for reading operations and `sylius:admin:promotion:create` group for write operations, providing role-based access control for the admin promotion management system.

