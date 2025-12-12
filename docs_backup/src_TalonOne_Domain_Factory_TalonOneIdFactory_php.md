# TalonOneIdFactory.php

**Path**: `src\TalonOne\Domain\Factory\TalonOneIdFactory.php`

## Summary
The `TalonOneIdFactory` class generates standardized identifier strings for the Talon.One promotion engine integration by prefixing customer profiles, session IDs, and anonymous profiles with an environment-specific prefix. It creates three types of IDs: customer profile IDs (using customer ID), session IDs (using order token), and anonymous profile IDs (using order token), ensuring consistent identification across the e-commerce system and the Talon.One API for coupon/promotion management.

## Classes
- `TalonOneIdFactory`

## Function Details

### `__construct`

- **Parameters**: `#[Autowire(env: 'TALON_ONE_ENV_PREFIX_ID'`

### `buildProfileId`

- **Parameters**: `CustomerInterface $customer`

### `buildSessionId`

- **Parameters**: `Order $order`

### `buildAnonymousProfileId`

- **Parameters**: `Order $order`

