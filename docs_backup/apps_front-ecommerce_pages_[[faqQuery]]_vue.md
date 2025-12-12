# [[faqQuery]].vue

**Path**: `apps\front-ecommerce\pages\[[faqQuery]].vue`

## Summary
This is a dynamic FAQ page component for an e-commerce front-end that handles both FAQ index and subject-specific views based on the optional `faqQuery` route parameter. It fetches CMS-driven FAQ content using context creators, renders the page content through a composite rendering system, and tracks page views when mounted. The page uses a catch-all route pattern (`[[faqQuery]]`) to serve either the main FAQ listing or filtered FAQ content for specific subjects.

