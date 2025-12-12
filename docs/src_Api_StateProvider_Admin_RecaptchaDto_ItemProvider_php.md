# ItemProvider.php

**Path**: `src\Api\StateProvider\Admin\RecaptchaDto\ItemProvider.php`

## Summary
This API Platform state provider supplies reCAPTCHA configuration data to admin endpoints by retrieving the Google reCAPTCHA site key. It acts as a data source that creates and populates a `RecaptchaDto` object with the public site key needed for rendering reCAPTCHA widgets in the admin interface, without exposing sensitive server-side secrets.

## Classes
- `ItemProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

