# CustomerPassword.xml

**Path**: `config\api_platform\resources\admin\CustomerPassword.xml`

## Summary
This API Platform configuration defines an admin endpoint for initiating customer password reset requests in a Sylius e-commerce application. It configures a POST operation at `/admin/customer-reset-password-requests` that accepts password reset token requests, processes them asynchronously via Symfony Messenger, and returns a 202 (Accepted) status with no output, using specific serialization and validation groups for the reset password workflow.

