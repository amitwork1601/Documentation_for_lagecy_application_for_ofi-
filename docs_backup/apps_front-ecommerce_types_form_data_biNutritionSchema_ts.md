# biNutritionSchema.ts

**Path**: `apps\front-ecommerce\types\form\data\biNutritionSchema.ts`

## Summary
This TypeScript file defines Zod validation schemas for a multi-step pet nutrition form (biNutrition) in an e-commerce application. The schemas validate three sequential steps: pet information collection (type, breed, weight, age, physical condition), wet food product selection with quantities, and feeding ration calculations (frequency and portion sizes). The file includes both minimal and full validation schemas with custom refinement logic to ensure required pet details are provided before proceeding through the nutrition recommendation workflow.

