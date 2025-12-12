# RegisterShopUser.xml

**Path**: `config\serialization\Commands\Account\RegisterShopUser.xml`

## Summary
This Symfony serializer configuration file defines the serialization groups for the `RegisterShopUser` command class, which handles customer registration in an e-commerce system. It specifies which attributes (firstName, lastName, email, password, etc.) are exposed during serialization for two contexts: admin-initiated customer creation (`admin:customer:create`) and self-service shop registration (`shop:customer:create`), with the `group` attribute only available to admins and `recaptcha` only available in the shop context for security validation.

