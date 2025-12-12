# AddTrackingShippingNumber.xml

**Path**: `config\serialization\Commands\Order\AddTrackingShippingNumber.xml`

## Summary
This serialization configuration file defines how the `AddTrackingShippingNumber` command should be serialized/deserialized in the API context. It specifically maps the `trackingNumber` attribute to the `admin:order:add_tracking_number` serialization group, which controls when this field is included in API responses or expected in requests. This configuration supports the business functionality of allowing administrators to add shipping tracking numbers to orders through the API.

