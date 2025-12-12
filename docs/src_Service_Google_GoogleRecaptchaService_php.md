# GoogleRecaptchaService.php

**Path**: `src\Service\Google\GoogleRecaptchaService.php`

## Summary
This service integrates Google reCAPTCHA v2/v3 functionality into a Symfony application by managing reCAPTCHA configuration and verification. It retrieves reCAPTCHA settings (active status, secret key, site key, verify URL) from application parameters and provides a `verify()` method that sends the user's reCAPTCHA response token to Google's verification API via HTTP POST request to validate legitimate user interactions. The service acts as a wrapper around Google's reCAPTCHA service to protect forms and endpoints from bot traffic.

## Classes
- `GoogleRecaptchaService`

## Function Details

### `__construct`

- **Parameters**: `private readonly ParameterBagInterface $parameterBag`

### `isActive`


### `getSecret`


### `getSiteKey`


### `getVerifyUrl`


### `verify`

- **Parameters**: `$responseToken`

