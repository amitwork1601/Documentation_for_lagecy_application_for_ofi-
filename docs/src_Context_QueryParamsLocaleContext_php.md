# QueryParamsLocaleContext.php

**Path**: `src\Context\QueryParamsLocaleContext.php`

## Summary
This class implements a locale context provider that determines the application's locale from URL query parameters (e.g., `?locale=en`). It integrates with Sylius's locale resolution system as a prioritized context provider (priority 65), throwing a `LocaleNotFoundException` if no query parameter is present, allowing other locale resolution strategies to take over.

## Classes
- `QueryParamsLocaleContext`

## Function Details

### `__construct`

- **Parameters**: `private RequestStack $requestStack`

### `getLocaleCode`


