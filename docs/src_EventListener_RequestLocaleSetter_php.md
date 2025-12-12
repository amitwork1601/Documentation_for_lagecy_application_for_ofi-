# RequestLocaleSetter.php

**Path**: `src\EventListener\RequestLocaleSetter.php`

## Summary
This class decorates Sylius's request locale setter to bypass locale handling for specific routes (currently just the 'healthz' health check endpoint). It intercepts kernel request events and only delegates to the original Sylius locale setter if the current route is not in the bypass list, preventing unnecessary locale processing overhead for utility endpoints that don't require localization.

## Classes
- `RequestLocaleSetter`

## Function Details

### `onKernelRequest`

- **Parameters**: `RequestEvent $event`

