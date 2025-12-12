# fetch.ts

**Path**: `apps\front-ecommerce\types\fetch.ts`

## Summary
This TypeScript file defines type interfaces for HTTP fetch operations in an e-commerce frontend application. It establishes a hierarchy of options interfaces for making API requests, including base fetch configuration (method, body, query, headers), backend API calls with JWT authentication, and CMS-specific requests with API keys. The types provide type safety for different fetch scenarios across the application, distinguishing between general backend requests and content management system interactions.

## Interfaces
- `IUseFetchOptions`
- `IFetchDefaultOptions`
- `IFetchBackendOptions`
- `IFetchCmsOptions`

