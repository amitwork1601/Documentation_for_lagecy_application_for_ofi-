# [product].vue

**Path**: `apps\front-ecommerce\pages\catalog\[product].vue`

## Summary
This is a Vue.js product detail page (PDP) component for an e-commerce catalog that displays individual product information based on a dynamic route parameter. It handles product context initialization, validates product viewability (showing 404 if not viewable), determines the product page type (classic, subscription funnel, or account subscription based on query parameters), and tracks page view events for analytics. The page renders product metadata including breadcrumb navigation and product heading, while utilizing CMS-driven content through a composable components map.

## Function Details

### `trackingOnPageView`


### `productPageType`

- **Parameters**: `computed<string>((`

