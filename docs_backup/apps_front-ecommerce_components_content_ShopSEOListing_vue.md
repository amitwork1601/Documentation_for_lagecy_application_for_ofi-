# ShopSEOListing.vue

**Path**: `apps\front-ecommerce\components\content\ShopSEOListing.vue`

## Summary
This Vue component renders an SEO-optimized listing of physical shops organized in a collapsible accordion format. It splits shop data from a Strapi CMS into three equal columns for display, extracting key shop information (postal code prefix, title, slug) and providing links to individual shop pages for better search engine visibility and user navigation.

## Function Details

### `shops`

- **Parameters**: `computed<Pick<IShop, 'code' | 'title' | 'slug'>[][]>((`

