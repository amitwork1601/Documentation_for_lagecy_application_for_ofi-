# axiosInstance.js

**Path**: `src\plugins\algolia\admin\src\utils\axiosInstance.js`

## Summary
This module creates a configured Axios instance for the Algolia plugin's admin panel to communicate with the Strapi backend API. It automatically attaches JWT authentication tokens to all outgoing requests and handles 401 unauthorized responses by clearing stored credentials and reloading the page. This centralized HTTP client ensures consistent authentication and error handling across all API calls made by the Algolia plugin's admin interface.

