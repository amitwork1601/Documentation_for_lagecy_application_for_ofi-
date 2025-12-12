# sandbox-vs-live.md

**Path**: `plugins\PayPalPlugin\docs\sandbox-vs-live.md`

## Summary
This documentation file explains how to configure the PayPal plugin to switch between sandbox (testing) and live (production) modes for payment transaction processing. By default, the plugin uses sandbox mode for safe testing, but can be switched to live mode by setting `sandbox: false` in the configuration, typically done in production-specific configuration files to ensure real transactions only occur in production environments.

