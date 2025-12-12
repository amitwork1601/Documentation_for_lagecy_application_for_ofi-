# RecaptchaListener.php

**Path**: `src\EventListener\RecaptchaListener.php`

## Summary
This Symfony event listener implements Google reCAPTCHA protection for specific API routes related to authentication and customer registration (login, customer creation, and state checking). It intercepts incoming requests to protected routes, validates the reCAPTCHA token from the request payload, and returns a 401 Unauthorized response if verification fails or the token is missing.

## Classes
- `RecaptchaListener`

## Function Details

### `__construct`

- **Parameters**: `GoogleRecaptchaService $googleRecaptchaService`

### `getSubscribedEvents`


### `processRecaptchaProtection`

- **Parameters**: `RequestEvent $event`

