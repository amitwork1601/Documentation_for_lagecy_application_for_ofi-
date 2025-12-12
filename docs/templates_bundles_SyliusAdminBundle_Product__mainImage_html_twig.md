# _mainImage.html.twig

**Path**: `templates\bundles\SyliusAdminBundle\Product\_mainImage.html.twig`

## Summary
This Twig template renders the main product image for the Sylius admin interface by implementing a three-tier fallback strategy: first attempting to use thumbnail-type images, then falling back to the first available product image, and finally defaulting to an external CDN URL constructed from the product code if no images exist. The template applies the Imagine filter (defaulting to 'sylius_admin_product_thumbnail') to local images for consistent sizing and displays the result as a bordered UI image element suitable for product grid listings.

