# cleanAPIResponse.js

**Path**: `src\middlewares\cleanAPIResponse.js`

## Summary
This Strapi middleware filters sensitive or unwanted fields from API responses by recursively removing blacklisted properties (specifically "buffer" fields) from JSON objects. It intercepts GET requests to public API endpoints (excluding admin routes) and sanitizes the response body before sending it to clients, preventing exposure of internal data structures or binary content that shouldn't be publicly accessible.

## Function Details

### `cleanJsonWithBlacklist`

- **Parameters**: `obj, blacklist`

