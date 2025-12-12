# blog-categorie.js

**Path**: `src\api\blog-categorie\controllers\blog-categorie.js`

## Summary
This is a Strapi CMS controller for managing blog category records with custom query logic. It overrides the default `findOne` and `find` methods to implement deep population of related data, including recommended articles with their teaser images and categories. The `findOne` method specifically handles lookups by either numeric ID or text slug, making blog categories accessible via user-friendly URLs.

## Function Details

### `populate`

- **Parameters**: `queryApi`

