# useImageKit.ts

**Path**: `packages\smartImage\src\composables\useImageKit.ts`

## Summary
This Vue composable provides integration with ImageKit CDN for dynamic image transformation and URL generation. It injects ImageKit configuration, normalizes image URLs (handling both relative and absolute paths), and manages URL transformations by detecting registered ImageKit domains, extracting image paths/filenames, and applying transformation parameters to generate optimized ImageKit URLs for image delivery.

## Function Details

### `hashCode`

- **Parameters**: `str: string`

### `normalizeUrl`

- **Parameters**: `_url: string`

### `getImageFilename`

- **Parameters**: `_imageUrl: string`

### `getImageFolder`

- **Parameters**: `_imageUrl: string`

### `detectedRootUrl`

- **Parameters**: `imagekitConfig?.detectUrls?.find?.((d`

### `absolutePrefix`

- **Parameters**: `imagekitConfig?.detectUrls?.find?.((imageKitUrl`

