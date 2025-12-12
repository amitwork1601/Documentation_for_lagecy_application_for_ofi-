# subscriptionOrderState.ts

**Path**: `apps\front-ecommerce\static\subscriptionOrderState.ts`

## Summary
This TypeScript file defines a constant object that enumerates all possible states for a subscription-based order in an e-commerce system. It serves as a centralized reference for tracking subscription order lifecycle stages, including initial creation (draft), payment and fulfillment issues (payment failed, unavailable pickup points/products/promotions, invalid promotions/shipments), and final states (processed, cancelled). The `as const` assertion ensures type safety by making these values literal types rather than general strings.

