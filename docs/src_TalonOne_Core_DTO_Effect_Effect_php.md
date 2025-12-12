# Effect.php

**Path**: `src\TalonOne\Core\DTO\Effect\Effect.php`

## Summary
This abstract base class serves as a discriminator-based polymorphic parent for TalonOne promotion engine effects, using Symfony's serialization component to map effect types to their corresponding concrete implementations. It defines a comprehensive mapping of 31+ different effect types (coupons, loyalty points, referrals, discounts, audiences, etc.) that can be applied during promotional campaign execution. The discriminator pattern enables automatic deserialization of JSON/API responses into the correct effect subclass based on the `effectType` property, facilitating type-safe handling of TalonOne's diverse promotion rule outcomes.

## Classes
- `Effect`

