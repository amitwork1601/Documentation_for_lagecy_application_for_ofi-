# importer.js

**Path**: `src\plugins\import-akeneo\server\services\importer.js`

## Summary
This service handles the import and synchronization of product catalog data from Akeneo PIM (Product Information Management) into Strapi CMS. It manages the transformation and mapping of products, categories, filters, ingredients, and other e-commerce entities across multiple locales (French and Dutch) and channels (FR_B2C, NL_B2C), while also handling image assets through ImageKit integration.

## Function Details

### `parseDecimalFromString`

- **Parameters**: `value`

### `logAxiosError`

- **Parameters**: `error, context = 'API Request'`

### `initGlobals`

- **Parameters**: `strapi`

### `getAkeneoAccessToken`

- **Parameters**: `strapi`

### `getSyliusAccessToken`


### `syliusDataLoader`

- **Parameters**: `path, token, withQuery = true`

### `akeneoDataLoader`

- **Parameters**: `path, token`

### `importSyliusAttributes`

- **Parameters**: `akeneoToken, syliusAccessToken`

### `importSyliusOptions`

- **Parameters**: `akeneoToken, syliusAccessToken`

### `importSyliusTaxons`

- **Parameters**: `akeneoToken, syliusAccessToken`

### `extractedSyliusTaxonsCodes`

- **Parameters**: `syliusTaxons.map((taxon`

### `extractedAkeneoTaxonsCodes`

- **Parameters**: `akeneoTaxons.map((taxon`

### `correspondingItem`

- **Parameters**: `correspondingTables.find(item`

### `akeneoChannel`

- **Parameters**: `akeneoChannels.find((el`

### `importProductPageAvis`

- **Parameters**: `akeneoAccessToken, url`

### `item`

- **Parameters**: `items.find((element`

### `importProductPageLocalizer`

- **Parameters**: `akeneoAccessToken, url`

### `sortedVersions`

- **Parameters**: `versions.filter(version`

### `loadVariantConfiguration`

- **Parameters**: `url`

### `prepareFiltersGroups`

- **Parameters**: `strapi, akeneoAccessToken`

### `importFilter`

- **Parameters**: `url`

### `importFilterGroup`

- **Parameters**: `url`

### `jsonTryParse`

- **Parameters**: `text`

### `usp`

- **Parameters**: `USPList.find((usp`

### `addVariantToProductObject`

- **Parameters**: `productItem, productObject`

### `getEchantillonsParentData`

- **Parameters**: `akeneoAccessToken, parent`

### `getEchantillonsTypes`

- **Parameters**: `akeneoAccessToken`

### `generateProductsTranslation`

- **Parameters**: `akeneoAccessToken, path, excludedAttributes, type = 'model', translatedArray = null`

### `generateProductsTranslations`

- **Parameters**: `akeneoAccessToken, path, excludedAttributes, type = 'model', translatedArray = null`

### `fetchAllAttributes`

- **Parameters**: `akeneoAccessToken`

### `selectAttributes`

- **Parameters**: `attributes.filter(attribute`

### `generateProductTranslations`

- **Parameters**: `data, akeneoAccessToken, type = 'model', excludedAttributes, alreadyTranslated = null`

### `checkifTrad`

- **Parameters**: `type === 'variant' ? sourceData['activate_variant_translation']?.find(item`

### `checkIfLocalizable`

- **Parameters**: `sourceData[key].find(item`

### `checkifExists`

- **Parameters**: `sourceData[key].find(item`

