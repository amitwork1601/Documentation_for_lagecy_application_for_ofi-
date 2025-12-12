# Dockerfile

**Path**: `apps\front-ecommerce-b2b\.docker\Dockerfile`

## Summary
This Dockerfile creates a production container for a Nuxt.js-based B2B e-commerce frontend application. It sets up a secure Node.js 20 Alpine environment with a non-root user, copies the pre-built application distribution files, and configures the container to run the Nuxt server with increased memory allocation (2GB) on port 3000. The use of Tini as an init system ensures proper process signal handling and zombie process reaping in the containerized environment.

