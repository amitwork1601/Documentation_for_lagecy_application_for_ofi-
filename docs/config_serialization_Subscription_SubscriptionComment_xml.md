# SubscriptionComment.xml

**Path**: `config\serialization\Subscription\SubscriptionComment.xml`

## Summary
This Symfony serializer configuration file defines serialization rules for the `SubscriptionComment` entity, controlling which attributes (id, author, message, createdAt, updatedAt) are included when serializing/deserializing subscription comments in different admin contexts. It establishes serialization groups that determine what data is exposed for read operations (full and light versions) versus create/update operations, with the message and timestamp fields being writable while id and author are read-only.

