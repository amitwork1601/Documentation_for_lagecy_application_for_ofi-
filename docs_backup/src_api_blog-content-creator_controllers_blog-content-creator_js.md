# blog-content-creator.js

**Path**: `src\api\blog-content-creator\controllers\blog-content-creator.js`

## Summary
This controller manages blog content creators (authors/writers) in a Strapi CMS, providing custom endpoints to retrieve creator profiles with deeply populated related data. The `find` method fetches all creators with their full relationship data, while `findOne` retrieves a specific creator by slug and includes their 4 most recent associated blog articles (where they were the author, updater, or reviewer), enabling display of creator profiles with their published work.

