# useUrl.ts

**Path**: `packages\utils\src\composables\useUrl.ts`

## Summary
This is a Vue composable utility that provides URL manipulation and validation helpers. It offers functions to check if URLs are absolute, construct URLs with query parameters, generate HTML `rel` attributes for links (handling security attributes like noopener/noreferrer based on target_blank/nofollow flags), and join URL path segments while handling trailing/leading slashes. The composable exists to centralize common URL-handling operations across the application, with specific support for Strapi CMS button configurations.

## Function Details

### `useUrl`


### `isAbsoluteUrl`

- **Parameters**: `url: string`

### `build`

- **Parameters**: `uri: string, params: { [key: string]: string }`

### `join`

- **Parameters**: `...args: string[]`

