# middlewares.js

**Path**: `config\middlewares.js`

## Summary
This Strapi middleware configuration file defines the application's middleware stack, including security policies, CORS settings, and request body parsing limits. It customizes the Content Security Policy to allow resources from ImageKit CDN, enables permissive CORS for all origins, and significantly increases file upload limits to 200MB with 256MB body size limits for handling large media files. The configuration also includes a custom global middleware for cleaning API responses.

