# crossSell.ts

**Path**: `apps\front-ecommerce\types\cms\content\components\crossSell.ts`

## Summary
This TypeScript definitions file specifies the data structure for a cross-sell component in an e-commerce CMS system. It defines two interfaces: `ICrossSellStrapi` for the raw data format from Strapi CMS (containing product objects with id and sku), and `ICrossSell` for the transformed application format (containing an array of SKU strings and an optional listing display flag). The types enable consistent handling of product recommendations/cross-selling features across the front-end application.

## Interfaces
- `ICrossSellStrapi`
- `ICrossSell`

