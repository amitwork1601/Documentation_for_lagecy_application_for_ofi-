# event_listener.yaml

**Path**: `config\services\api\event_listener.yaml`

## Summary
This configuration file sets up event listeners for API cart management in a Sylius e-commerce application. It specifically configures the `ApiCartBlamerListener` to assign anonymous shopping carts to authenticated users upon successful login, ensuring cart continuity across authentication states. The listener uses cart context, section resolution, command bus, and order locking services to safely transfer cart ownership when users log in through the API.

