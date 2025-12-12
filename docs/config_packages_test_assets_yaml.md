# assets.yaml

**Path**: `config\packages\test\assets.yaml`

## Summary
This YAML configuration file sets up the Symfony framework for the test environment. It configures test-specific settings including enabling test mode, using a mock file storage factory for sessions, and disabling the JSON manifest path for assets (setting it to null). This ensures that during automated testing, the application uses isolated session storage and doesn't rely on compiled asset manifests that would be present in production.

