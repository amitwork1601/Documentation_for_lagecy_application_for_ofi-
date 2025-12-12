# debug.yaml

**Path**: `config\packages\debug.yaml`

## Summary
This Symfony configuration file enables advanced debugging capabilities in the development environment by routing `VarDumper` output to a centralized debug server. It configures the dump destination to send variable dumps over TCP to a remote server (defined by the `VAR_DUMPER_SERVER` environment variable), allowing developers to inspect application state and debug information through a separate server interface rather than inline in the browser.

