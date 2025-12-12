# useGTMGhost.ts

**Path**: `apps\front-ecommerce\composables\useGTMGhost.ts`

## Summary
This composable provides a custom Google Tag Manager (GTM) integration wrapper for Vue applications, specifically implementing a "ghost" version that modifies the standard GTM container ID by stripping the "GTM-" prefix and passing it as a query parameter. It enables country-specific GTM tracking by loading GTM scripts with custom configuration based on the runtime config's country version, while providing Vue plugin installation methods and instance access through the composable pattern.

## Function Details

### `useGTMGhost`


### `installGhost`

- **Parameters**: `app: App, options: VueGtmUseOptions = { id: '' }`

### `createGtmGhost`

- **Parameters**: `options: VueGtmUseOptions`

### `useGtmGhost`


