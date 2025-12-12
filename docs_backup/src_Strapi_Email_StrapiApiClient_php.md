# StrapiApiClient.php

**Path**: `src\Strapi\Email\StrapiApiClient.php`

## Summary
The `StrapiApiClient` class is an HTTP client wrapper that communicates with a Strapi CMS API specifically for retrieving email templates. It sends POST requests to the Strapi email templates endpoint with a template slug, locale, and dynamic body content, returning the rendered email content while logging any errors that occur during the API communication.

## Classes
- `StrapiApiClient`

## Function Details

### `post`

- **Parameters**: `string $baseUrl, string $templateSlug, string $locale, array $body`
- **Description**: @throws \Throwable
/

