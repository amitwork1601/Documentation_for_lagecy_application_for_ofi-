# algolia.json

**Path**: `src\api\blog-article\content-types\blog-article\algolia.json`

## Summary
This configuration file defines Algolia search indexing settings for blog articles in a Strapi CMS application. It specifies that blog articles should be indexed under "strapi_blog_articles" while explicitly excluding certain fields (like LLM data, images, content, categories, and recommendations) from the search index, likely to reduce index size and focus on searchable metadata. The omitted fields are typically large, non-searchable, or relational data that would not benefit search functionality.

