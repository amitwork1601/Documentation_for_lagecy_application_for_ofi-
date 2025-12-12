# 2-markdown-it.ts

**Path**: `apps\front-ecommerce\plugins\2-markdown-it.ts`

## Summary
This Nuxt plugin configures a Markdown-it renderer for rendering markdown content in an e-commerce application. It enables HTML parsing, automatic link detection, and attribute syntax support, while customizing table rendering to wrap tables in a `.table-wrapper` div for styling purposes. The plugin also includes functionality to adjust heading levels dynamically, allowing markdown headings to be offset from a specified starting level.

## Function Details

### `getHeadingLevel`

- **Parameters**: `tagName: string`

