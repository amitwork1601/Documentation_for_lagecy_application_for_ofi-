# state_machine.yaml

**Path**: `config\packages\state_machine.yaml`

## Summary
This configuration file defines a state machine for managing order payment states in a Sylius e-commerce application. It specifies the valid payment states (awaiting_delivery, upcoming_payment, partially_paid, etc.), the allowed transitions between states (e.g., request_payment_on_delivery, partially_pay, pay, cancel), and callbacks that execute custom business logic during transitions (such as guards to block certain payments and after-transition handlers to apply order-paid or completed-and-paid logic).

