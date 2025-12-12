# nx.json

**Path**: `nx.json`

## Summary
This is an Nx monorepo configuration file that defines build orchestration, caching strategies, and workspace-wide settings for a JavaScript/TypeScript project. It configures multiple plugins (TypeScript, ESLint, Storybook, Vite, and Nuxt) with their respective build targets, establishes named input patterns to distinguish between development and production files (excluding test files, stories, and config from production builds), and enables dependency-based build caching while explicitly disabling Nx Cloud connectivity. The configuration ensures efficient incremental builds by caching build outputs and properly managing project dependencies through the `dependsOn` directive.

