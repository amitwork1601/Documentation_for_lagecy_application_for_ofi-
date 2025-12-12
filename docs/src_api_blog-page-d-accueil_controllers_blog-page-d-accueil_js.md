# blog-page-d-accueil.js

**Path**: `src\api\blog-page-d-accueil\controllers\blog-page-d-accueil.js`

## Summary
This is a Strapi CMS controller for a blog homepage ("page d'accueil" in French) that retrieves and returns the page's content with deeply nested related data. The controller overrides the default `find` method to populate all associated content components including article boxes, category boxes, blog articles with their images and categories, ensuring the complete page structure is returned in a single API call. It uses custom population helpers to handle the complex data relationships and sanitizes the output before transforming it into the API response format.

