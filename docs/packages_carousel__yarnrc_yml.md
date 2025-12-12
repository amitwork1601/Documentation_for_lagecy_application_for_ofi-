# .yarnrc.yml

**Path**: `packages\carousel\.yarnrc.yml`

## Summary
This is a Yarn package manager configuration file that specifies the node linker strategy for the carousel package. It sets `nodeLinker` to `node-modules`, which tells Yarn to use the traditional node_modules folder structure for dependency management instead of alternative strategies like Plug'n'Play (PnP). This configuration ensures compatibility with tools and workflows that expect the conventional node_modules layout.

