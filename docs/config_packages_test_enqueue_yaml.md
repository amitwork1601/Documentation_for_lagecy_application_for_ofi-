# enqueue.yaml

**Path**: `config\packages\test\enqueue.yaml`

## Summary
This configuration file sets up the Enqueue message queue system for the test environment. It configures a null transport (which discards messages instead of actually queuing them) to avoid dependencies on external message brokers during testing, while enabling the traceable producer feature for debugging and monitoring message dispatch in tests.

