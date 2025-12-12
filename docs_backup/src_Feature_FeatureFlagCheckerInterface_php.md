# FeatureFlagCheckerInterface.php

**Path**: `src\Feature\FeatureFlagCheckerInterface.php`

## Summary
This interface defines a contract for checking whether feature flags are enabled in the application. It provides a single method `isEnabled()` that takes a feature name and returns a boolean, allowing the application to conditionally enable/disable functionality based on feature flag configuration. This is a common pattern for feature toggles, A/B testing, or gradual rollout of new features in production environments.

## Function Details

### `isEnabled`

- **Parameters**: `string $feature`

