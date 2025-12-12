# http_discovery.yaml

**Path**: `config\packages\http_discovery.yaml`

## Summary
This Symfony configuration file sets up PSR-17 HTTP factory interfaces for creating HTTP messages (requests, responses, streams, URIs, etc.). It aliases all six standard PSR-17 factory interfaces to a single `Psr17Factory` service from the HTTP Discovery library, which provides a unified implementation for generating HTTP message objects in a framework-agnostic way.

