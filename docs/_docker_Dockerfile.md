# Dockerfile

**Path**: `.docker\Dockerfile`

## Summary
This Dockerfile creates a production-ready Node.js 18 container for a Strapi CMS application (indicated by port 1337 and admin configuration). It installs system dependencies including image processing libraries (vips), sets up PM2 for process management, builds the application using Yarn, and configures the container to run in production mode with admin panel enabled at the root URL path.

