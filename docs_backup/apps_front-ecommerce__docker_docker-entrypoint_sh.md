# docker-entrypoint.sh

**Path**: `apps\front-ecommerce\.docker\docker-entrypoint.sh`

## Summary
This is a Docker container entrypoint script for a front-end e-commerce application that dynamically sets the working directory based on a `SITE` environment variable, enabling multi-site support within a single container. It intelligently handles command execution by automatically prepending `node` to arguments that appear to be Node.js script parameters (arguments starting with "-" or non-executable files) rather than system commands, ensuring proper Node.js application startup in different invocation scenarios.

