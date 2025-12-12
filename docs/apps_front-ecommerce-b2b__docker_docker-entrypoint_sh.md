# docker-entrypoint.sh

**Path**: `apps\front-ecommerce-b2b\.docker\docker-entrypoint.sh`

## Summary
This is a Docker container entrypoint script for a B2B e-commerce front-end application that dynamically sets the working directory based on a runtime `SITE` environment variable, enabling multi-tenant or multi-site deployments from a single container image. The script intelligently handles command execution by defaulting to Node.js for flag-based arguments or non-executable commands, while allowing direct execution of system commands, providing flexible container startup behavior for different deployment scenarios.

