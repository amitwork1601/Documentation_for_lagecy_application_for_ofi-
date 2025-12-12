# USP.vue

**Path**: `apps\front-ecommerce\components\content\USP.vue`

## Summary
This Vue component renders a USP (Unique Selling Points) section for an e-commerce storefront by accepting either a direct `usps` array or extracting USPs from a `uspLarge` object parameter. It normalizes these two possible data sources into a single computed property and passes the USP data to a `USPGrid` component for display in a responsive grid layout with specific styling options (columnar mobile/desktop layout with small images).

## Function Details

### `usps`

- **Parameters**: `computed((`

