# sylius_uploader.yaml

**Path**: `config\packages\test\sylius_uploader.yaml`

## Summary
This test configuration file overrides the Sylius image path generator service specifically for the test environment. It replaces the default production implementation with a Behat-specific `UploadedImagePathGenerator`, which likely generates deterministic or simplified file paths for uploaded images during automated testing scenarios. This ensures consistent and predictable image handling behavior when running Behat acceptance tests for the Sylius e-commerce platform.

