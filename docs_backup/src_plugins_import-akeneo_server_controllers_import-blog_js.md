# import-blog.js

**Path**: `src\plugins\import-akeneo\server\controllers\import-blog.js`

## Summary
This controller manages blog article imports from Akeneo (a PIM system) into Strapi. It provides three endpoints: a health check endpoint (`index`), a bulk import endpoint (`articles`) that imports all articles, and a single article import endpoint (`article`) that imports a specific article by UID using the underlying blog service.

