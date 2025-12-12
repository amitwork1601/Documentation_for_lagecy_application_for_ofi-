# blog.js

**Path**: `src\plugins\import-akeneo\server\services\blog.js`

## Summary
This module handles the import and update of blog articles from an external recommendation service (Pixie) in a Strapi-based Akeneo integration plugin. It fetches blog articles from the database, calls an external API endpoint to get article and product recommendations, and updates each article's recommended articles and products based on the API response. The service is designed to either process all blog articles or filter by a specific article slug (uid) when provided.

## Function Details

### `importBlogArticles`

- **Parameters**: `strapi, uid = null`

