# admin.js

**Path**: `config\admin.js`

## Summary
This configuration file sets up authentication and security parameters for a Strapi admin panel. It exports a configuration object that defines JWT secrets for admin authentication, API token salts for secure token generation, and transfer token salts for data transfer operations, all pulled from environment variables. This centralizes security credential management for the CMS admin interface and API access control.

