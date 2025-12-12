# phpstan.neon

**Path**: `phpstan.neon`

## Summary
This is a PHPStan static analysis configuration file that sets up level 1 analysis for the `src` directory while excluding certain paths like plugins, config, spec, and tests. It defines ignore rules for three specific error patterns: database property type mismatches for `$code` fields, and undefined method calls related to translation functionality (`initializeTranslationsCollection` and `doGetTranslation`), which are likely dynamically generated methods in a translation system.

