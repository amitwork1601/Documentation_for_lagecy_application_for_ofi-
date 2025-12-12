# swiftmailer.yaml

**Path**: `config\packages\test_cached\swiftmailer.yaml`

## Summary
This configuration file sets up Swiftmailer for the test environment with cached data enabled. It disables actual email delivery during testing while enabling logging, and configures a file-based email spool in the kernel cache directory to store emails for testing purposes instead of sending them. This allows developers to verify email functionality in tests without actually transmitting messages.

