# tsconfig.storybook.json

**Path**: `apps\storybook\tsconfig.storybook.json`

## Summary
This is a TypeScript configuration file specifically for Storybook within a monorepo application. It extends the base `tsconfig.json` and customizes the compilation settings to include only Storybook-related files (story files, MDX documentation, and Storybook configuration) while explicitly excluding test files. The configuration enables decorator metadata emission, which is commonly needed for Storybook addons and Angular-style dependency injection in component stories.

