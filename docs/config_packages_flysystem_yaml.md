# flysystem.yaml

**Path**: `config\packages\flysystem.yaml`

## Summary
This configuration file sets up Flysystem, a filesystem abstraction library for PHP, defining a default storage adapter. It configures local filesystem storage with a directory path pointing to `var/storage/default` within the Symfony project root, enabling the application to store and manage files in a consistent, abstraction-layer manner that could be swapped for cloud storage (S3, Azure, etc.) without code changes.

