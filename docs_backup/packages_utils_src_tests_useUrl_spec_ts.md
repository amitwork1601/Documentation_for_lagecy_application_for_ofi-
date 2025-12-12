# useUrl.spec.ts

**Path**: `packages\utils\src\tests\useUrl.spec.ts`

## Summary
This is a test suite for the `useUrl` composable that validates URL manipulation utilities. It tests three main functions: `isAbsoluteUrl()` for detecting absolute vs relative URLs (including protocol-relative URLs starting with `//`), `build()` for constructing URLs with query parameters, and `getRel()` for generating HTML `rel` attribute values based on button configuration flags like `target_blank` and `nofollow`. The tests ensure proper URL handling for a web application that integrates with Strapi CMS button components.

