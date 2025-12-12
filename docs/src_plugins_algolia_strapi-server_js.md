# strapi-server.js

**Path**: `src\plugins\algolia\strapi-server.js`

## Summary
This is a Strapi plugin entry point module that delegates all server-side functionality to a separate `./server` module. It serves as the standard Strapi convention for exposing server-side plugin code, acting as a re-export wrapper that allows the Strapi framework to load and initialize the Algolia search integration plugin's server functionality.

