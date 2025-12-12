# Coupon.xml

**Path**: `config\serialization\TalonOne\Coupon.xml`

## Summary
This Symfony serializer configuration file defines serialization mappings for the TalonOne Coupon domain model. It specifies that all coupon attributes (id, value, usage limits, dates, counters, etc.) should be included in the "admin:talon_one:coupon:read" serialization group, which controls how coupon data is exposed when reading/displaying coupon information in the admin interface. This configuration enables structured API responses for TalonOne's promotional coupon system by determining which coupon fields are visible to administrators.

