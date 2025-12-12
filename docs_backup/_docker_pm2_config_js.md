# pm2.config.js

**Path**: `.docker\pm2.config.js`

## Summary
This is a PM2 process manager configuration file for running a Strapi application in a Docker container. It defines a single application process named "strapi" that executes the `yarn start` command to launch the Strapi CMS server. PM2 will use this configuration to manage the Strapi process lifecycle, including automatic restarts and process monitoring in the containerized environment.

