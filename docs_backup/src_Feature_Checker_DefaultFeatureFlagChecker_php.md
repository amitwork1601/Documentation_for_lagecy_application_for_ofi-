# DefaultFeatureFlagChecker.php

**Path**: `src\Feature\Checker\DefaultFeatureFlagChecker.php`

## Summary
This class implements a simple feature flag checker that determines whether specific features are enabled or disabled in the application. It acts as the default implementation of `FeatureFlagCheckerInterface`, checking feature availability by looking up feature names in a configuration array (injected via the `feature_flags` parameter), returning false if a feature flag doesn't exist. This provides a centralized mechanism for controlling feature rollouts and toggling functionality without code changes.

## Classes
- `DefaultFeatureFlagChecker`

## Function Details

### `isEnabled`

- **Parameters**: `string $feature`

