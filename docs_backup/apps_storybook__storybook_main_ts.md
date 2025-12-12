# main.ts

**Path**: `apps\storybook\.storybook\main.ts`

## Summary
This is a Storybook configuration file for a Vue 3 application that sets up component documentation and testing. It configures story file locations across multiple packages (including e-commerce modules), integrates essential Storybook addons, and customizes the Vite build process with plugins for auto-importing Vue composables, components, and handling TypeScript paths. The configuration supports a monorepo structure with specific focus on e-commerce frontend components, enabling developers to develop and document UI components in isolation.

## Function Details

### `getAbsolutePath`

- **Parameters**: `value: string`

