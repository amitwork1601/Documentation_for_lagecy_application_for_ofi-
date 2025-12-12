# mailer.yaml

**Path**: `config\packages\test\mailer.yaml`

## Summary
This Symfony test environment configuration file disables actual email delivery during testing by setting the mailer DSN to 'null://null', which prevents emails from being sent while still allowing the application to execute mail-related code. It also configures a filesystem-based cache pool specifically for testing mailer functionality, ensuring that email operations can be tested in isolation without external dependencies or side effects.

