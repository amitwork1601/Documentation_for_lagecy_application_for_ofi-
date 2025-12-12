# customRouter.ts

**Path**: `apps\front-ecommerce\types\customRouter.ts`

## Summary
This TypeScript module defines a custom router type extension for an e-commerce front-end application. It extends Vue Router's standard `Router` interface with two optional properties: `running` (likely a boolean flag to track navigation state) and `nextRoute` (to store a pending route destination as a string). This custom type enables additional navigation control and state management beyond Vue Router's default capabilities, possibly for handling authentication redirects or managing navigation flow in the e-commerce application.

## Interfaces
- `ICustomRouter`

