# blockTransformer.js

**Path**: `src\helpers\blockTransformer.js`

## Summary
This module provides data transformation functions for various content blocks in what appears to be a B2C e-commerce CMS system. Each transformer function standardizes and sanitizes block data by extracting only essential image properties (id, url, alternativeText) and restructuring specific block types like carousels, category grids, cross-sell products, and editorial content. The transformers ensure consistent data shape across different block components while removing unnecessary fields before passing data to the presentation layer.

