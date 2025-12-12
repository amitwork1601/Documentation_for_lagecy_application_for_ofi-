# .yarnrc.yml

**Path**: `packages\youtube\.yarnrc.yml`

## Summary
This is a Yarn package manager configuration file that specifies the linking strategy for node dependencies. It sets `nodeLinker` to `node-modules`, instructing Yarn to use the traditional `node_modules` folder structure for dependency installation rather than Yarn's newer Plug'n'Play (PnP) approach. This configuration ensures compatibility with tools and workflows that expect the conventional Node.js module resolution system.

