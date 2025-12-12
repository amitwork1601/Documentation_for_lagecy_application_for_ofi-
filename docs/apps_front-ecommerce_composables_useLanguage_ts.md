# useLanguage.ts

**Path**: `apps\front-ecommerce\composables\useLanguage.ts`

## Summary
This composable provides internationalization and language switching functionality for an e-commerce front-end application. It manages locale selection, country detection based on browser language, and provides computed properties for available countries and languages that can be used in language/country selector UI components. The code handles the relationship between countries, languages, and locales defined in the runtime configuration, enabling users to switch between different market-specific versions of the storefront.

## Type Aliases
- `TCountries`
- `TKeyCountries`
- `TAvailableCountries`
- `TAvailableLanguages`

## Function Details

### `useLanguage`

- **Parameters**: `defaultCountry?: string`

### `addTrailingSlash`

- **Parameters**: `str: string`

### `buildHrefLangURL`

- **Parameters**: `url: string`

### `replaceValue`


### `flagToDisplay`

- **Parameters**: `countryCode: string`

### `fetchBackendLocales`


### `routeParams`

- **Parameters**: `computed((`

### `availableCountriesCountryWall`

- **Parameters**: `computed((`

### `availableCountriesComputed`

- **Parameters**: `computed((`

### `languagesComputed`

- **Parameters**: `computed((`

### `availableLocalesComputed`

- **Parameters**: `computed((`

