# axiosInstance.js

**Path**: `src\plugins\custom-menu\admin\src\utils\axiosInstance.js`

## Summary
This file creates a pre-configured axios instance for making authenticated HTTP requests from the Strapi admin panel's custom menu plugin to the Strapi backend API. It automatically attaches JWT bearer tokens to outgoing requests and handles 401 unauthorized responses by clearing authentication storage and reloading the page to force re-login.

