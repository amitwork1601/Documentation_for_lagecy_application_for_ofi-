# tsconfig.lib.json

**Path**: `apps\storybook\tsconfig.lib.json`

## Summary
This TypeScript configuration file defines the build settings for a Storybook library within a monorepo structure. It extends the base tsconfig, specifies output directory and Vite types, includes source files while explicitly excluding test files, Storybook stories, and config files from compilation. The configuration references multiple dependent packages (accordionFold, heading, types, tracking) and modules (front-ecommerce, nuxt-ecommerce), establishing the project's dependencies for proper type checking and build orchestration.

