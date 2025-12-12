# UrlUtils.php

**Path**: `plugins\PayPalPlugin\src\UrlUtils.php`

## Summary
The `UrlUtils` class provides utility functionality for manipulating URLs by appending query strings to existing URLs while handling duplicate parameter keys. It supports three modes for managing duplicates: ignoring them (keeping both), replacing existing keys with new values, or skipping new values when keys already exist. This is a vendor-specific implementation copied from the Nyholm library to support PayPal plugin URL construction needs within the Sylius e-commerce platform.

## Classes
- `UrlUtils`

## Function Details

### `__construct`


### `appendQueryString`

- **Parameters**: `string $url, string $queryString, int $mode = APPEND_QUERY_STRING_IGNORE_DUPLICATE`

