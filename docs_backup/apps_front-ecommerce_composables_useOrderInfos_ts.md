# useOrderInfos.ts

**Path**: `apps\front-ecommerce\composables\useOrderInfos.ts`

## Summary
This composable manages the state for editing order information in an e-commerce application. It tracks which order info section is currently opened for editing by syncing with the URL query parameter (`edit`), and maintains a lock state to prevent concurrent modifications. The composable provides reactive references that components can use to control order information edit dialogs or panels.

## Function Details

### `useOrderInfos`


