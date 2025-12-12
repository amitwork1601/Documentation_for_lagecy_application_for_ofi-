# Dockerfile

**Path**: `apps\front-ecommerce\.docker\Dockerfile`

## Summary
This Dockerfile builds a production container image for a Nuxt.js-based e-commerce frontend application. It uses Node.js 20 Alpine as the base, creates a non-root user for security, copies the pre-built distribution files and an entrypoint script, and exposes port 3000 for the web server. The container is configured to run the Nuxt server with increased memory allocation (2GB) using Tini as the init process for proper signal handling.

