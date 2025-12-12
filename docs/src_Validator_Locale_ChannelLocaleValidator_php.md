# ChannelLocaleValidator.php

**Path**: `src\Validator\Locale\ChannelLocaleValidator.php`

## Summary
This validator ensures that a given locale code is valid for a specific channel by checking if it exists in the channel's configured locales. It validates that any locale being assigned or used is actually enabled/available for the current channel, preventing invalid locale-channel combinations in what appears to be a multi-channel, multi-locale e-commerce or content management system.

## Classes
- `ChannelLocaleValidator`

## Function Details

### `validate`

- **Parameters**: `mixed $value, Constraint $constraint`

