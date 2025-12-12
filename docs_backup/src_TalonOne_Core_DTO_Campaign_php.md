# Campaign.php

**Path**: `src\TalonOne\Core\DTO\Campaign.php`

## Summary
This is a Data Transfer Object (DTO) class representing a Campaign entity from the TalonOne promotion management system. It contains properties for campaign configuration (name, description, start/end times, state), settings for coupons and referrals, and various metrics tracking redemptions, discounts, loyalty points, and other campaign effects. Most properties are marked with `#[Ignore]` attributes to exclude them from serialization, with only core fields like id, name, description, and time periods being serialized by default.

## Classes
- `Campaign`

