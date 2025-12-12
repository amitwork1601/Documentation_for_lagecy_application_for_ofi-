# liip_imagine.yaml

**Path**: `config\packages\liip_imagine.yaml`

## Summary
This configuration file sets up the LiipImagineBundle for handling image transformations and caching in a Symfony application. It configures the default resolver to use a web path strategy, storing cached/processed images in the `public/media/cache` directory relative to the project root. This enables on-the-fly image manipulation (resizing, cropping, filters) with automatic caching to improve performance for subsequent requests.

