# security.yaml

**Path**: `config\packages\security.yaml`

## Summary
This Symfony security configuration file defines authentication and authorization settings for a Sylius e-commerce application's API (v2). It establishes multiple firewalls for admin and shop users with JWT-based stateless authentication, configures user providers for different user types, and implements password hashing using Argon2i with migration support from legacy MD5 encoding. The configuration supports both GraphQL and REST API endpoints with separate authentication routes for admin (`/api/v2/admin`) and shop (`/api/v2/shop`) contexts.

