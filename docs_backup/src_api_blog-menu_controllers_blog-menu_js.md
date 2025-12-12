# blog-menu.js

**Path**: `src\api\blog-menu\controllers\blog-menu.js`

## Summary
This is a Strapi CMS controller for managing a blog menu single-type content structure. It overrides the default `find` method to retrieve the blog menu entity with deep population of all related fields (using a custom populate helper), then sanitizes and transforms the response before returning it to the client.

