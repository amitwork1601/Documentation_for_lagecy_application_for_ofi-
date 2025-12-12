# .stylelintrc.json

**Path**: `apps\front-ecommerce\.stylelintrc.json`

## Summary
This is a Stylelint configuration file for the front-ecommerce application that defines CSS/SCSS linting rules and extends multiple style configuration presets (HTML, SCSS, Recess ordering, and Prettier compatibility). The configuration specifically customizes the SCSS at-rule validation to ignore Tailwind CSS directives (`@tailwind`, `@value`, `@layer`), allowing the project to use Tailwind's utility-first CSS framework without triggering linting errors.

