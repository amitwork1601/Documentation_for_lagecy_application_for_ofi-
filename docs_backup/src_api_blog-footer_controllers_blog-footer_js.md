# blog-footer.js

**Path**: `src\api\blog-footer\controllers\blog-footer.js`

## Summary
This Strapi controller manages the blog footer content API, specifically handling retrieval of a single-type collection that includes deeply populated relationships for Instagram posts (with images) and top articles (with associated blog articles and categories). The custom `find` method overrides the default behavior to ensure all nested data is properly fetched, sanitized, and transformed before being returned to the client for rendering the blog's footer section.

