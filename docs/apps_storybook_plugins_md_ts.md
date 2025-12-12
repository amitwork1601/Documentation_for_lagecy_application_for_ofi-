# md.ts

**Path**: `apps\storybook\plugins\md.ts`

## Summary
This code configures a Markdown-It parser plugin for a Vue Storybook application with two key enhancements: it adds support for custom attributes using curly brace syntax (`markdown-it-attrs`) and implements a custom plugin that dynamically adjusts heading levels (h1, h2, etc.) by applying a configurable offset. The heading level adjustment feature allows markdown content to be rendered with hierarchically appropriate heading tags based on a `firstLevel` option or runtime environment variables, which is useful for embedding markdown snippets into existing document structures while maintaining proper heading hierarchy.

## Function Details

### `createMarkdownIt`


### `getHeadingLevel`

- **Parameters**: `tagName: string`

