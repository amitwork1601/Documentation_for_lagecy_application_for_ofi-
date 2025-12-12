# crossSellTransform.js

**Path**: `src\helpers\crossSellTransform.js`

## Summary
This code transforms cross-sell data structures from Strapi CMS format into a frontend-compatible format for B2C e-commerce applications. It handles two types of cross-sell components: direct cross-sells (which it transforms by extracting product SKUs from related products) and linked cross-sells (which it fetches from the database and deeply populates before transforming), ensuring consistent data structure for the frontend to display product recommendations and upselling opportunities.

