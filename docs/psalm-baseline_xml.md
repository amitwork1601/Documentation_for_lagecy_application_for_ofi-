# psalm-baseline.xml

**Path**: `psalm-baseline.xml`

## Summary
This is a Psalm static analysis baseline file that documents existing type-checking issues in a PHP codebase to prevent them from blocking CI/CD pipelines. It whitelists 11 specific type violations across 7 files, primarily related to payment processing (CheckoutCom gateway), CQRS query handlers for subscription management, and Messenger event listeners, allowing the team to incrementally fix these issues without failing builds.

