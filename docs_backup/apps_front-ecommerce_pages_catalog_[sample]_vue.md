# [sample].vue

**Path**: `apps\front-ecommerce\pages\catalog\[sample].vue`

## Summary
This Vue page component displays a product sample detail page for an e-commerce catalog. It fetches sample product data from a CMS, manages cross-sell promotions, tracks user interactions (view/select promotions, add to cart events), and handles navigation back to cart. The page integrates CMS content management with product metadata, internationalization, and comprehensive analytics tracking for promotional content visibility.

## Function Details

### `addToCart`

- **Parameters**: `data: TEmitAddToCartSamples`

### `trackingOnViewItem`


### `trackingOnViewPromotion`

- **Parameters**: `target: HTMLDivElement`

### `trackingOnSelectPromotion`

- **Parameters**: `pushIndex: number`

### `trackingOnAddToCart`

- **Parameters**: `data: TEmitAddToCartSamples`

### `samplePageData`

- **Parameters**: `computed((`

### `trackingSourceItemList`

- **Parameters**: `computed((`

### `trackingCrossSellLinked`

- **Parameters**: `computed((`

### `trackingCrossSellBackToCart`

- **Parameters**: `computed((`

