# SearchInput.vue

**Path**: `apps\front-ecommerce\components\search\SearchInput.vue`

## Summary
This Vue 3 component implements a debounced search input field for an e-commerce search interface. It delays emitting input events by a configurable time (default 200ms) to avoid excessive search queries while typing, and supports customization through props like placeholder text, autofocus behavior, and color theming (white or primary). The component includes a reset button that appears on hover/focus when there's text entered, and handles form submission prevention for single-page application behavior.

## Function Details

### `onFormReset`


