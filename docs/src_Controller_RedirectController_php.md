# RedirectController.php

**Path**: `src\Controller\RedirectController.php`

## Summary
This Symfony controller handles redirection between different application environments (site and backoffice) based on configured URLs. It accepts an environment variable name and optional permanent flag, then returns an HTTP redirect response (301 or 302) to either the backoffice URL or the main site URL, with the site URL serving as the default fallback.

## Classes
- `RedirectController`

## Function Details

### `__invoke`

- **Parameters**: `string $envVar, bool $permanent = false`

