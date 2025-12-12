# .yarnrc.yml

**Path**: `packages\smartLink\.yarnrc.yml`

## Summary
This Yarn configuration file specifies the node linker strategy for the smartLink package's dependency management. It sets `nodeLinker` to `node-modules`, which instructs Yarn to use the traditional node_modules directory structure for installing dependencies rather than alternative strategies like Plug'n'Play (PnP). This configuration ensures compatibility with tools and workflows that expect the classic node_modules folder layout.

