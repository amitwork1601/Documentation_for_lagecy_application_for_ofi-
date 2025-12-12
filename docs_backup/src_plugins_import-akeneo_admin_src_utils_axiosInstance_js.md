# axiosInstance.js

**Path**: `src\plugins\import-akeneo\admin\src\utils\axiosInstance.js`

## Summary
This file configures a custom Axios instance for the Akeneo import plugin's admin interface to communicate with the Strapi backend API. It automatically attaches authentication bearer tokens to all outgoing requests and handles 401 unauthorized responses by clearing storage and reloading the page to force re-authentication. This centralized HTTP client ensures consistent authentication and error handling across all API calls made by the Akeneo import plugin.

