# gulpfile.babel.js

**Path**: `gulpfile.babel.js`

## Summary
This is a root-level Gulp build orchestrator for a Sylius e-commerce application that coordinates asset compilation for two separate bundles: AdminBundle (back-office) and ShopBundle (storefront). It delegates the actual build work to child gulpfiles in each bundle using `gulp-chug`, passing configurable paths for public assets and node_modules directories, and exposes tasks for building and watching assets in either or both bundles simultaneously.

## Function Details

### `buildAdmin`


### `watchAdmin`


### `buildShop`


### `watchShop`


