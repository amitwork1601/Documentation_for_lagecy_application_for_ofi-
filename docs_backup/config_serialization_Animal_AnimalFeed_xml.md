# AnimalFeed.xml

**Path**: `config\serialization\Animal\AnimalFeed.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the `AnimalFeed` entity, controlling which attributes are exposed in different API contexts. It manages field-level access permissions across multiple scenarios: admin operations (read/create/update animal feed data), shop-facing endpoints (animal codes and feed information), and web service customer access. The configuration ensures that sensitive fields like timestamps are only visible in admin contexts, while core fields like name, priority, and icon are selectively exposed to shop and customer-facing APIs based on business requirements.

