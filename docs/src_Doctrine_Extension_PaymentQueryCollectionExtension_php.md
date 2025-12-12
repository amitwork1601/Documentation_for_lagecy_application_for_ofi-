# PaymentQueryCollectionExtension.php

**Path**: `src\Doctrine\Extension\PaymentQueryCollectionExtension.php`

## Summary
This Doctrine ORM extension filters Payment entity collections in GraphQL operations by automatically excluding payments in the "cart" state. It implements ApiPlatform's query collection extension interface to intercept and modify database queries, ensuring that only payments beyond the cart stage (completed, processing, etc.) are returned when fetching payment collections through the GraphQL API.

## Classes
- `PaymentQueryCollectionExtension`

