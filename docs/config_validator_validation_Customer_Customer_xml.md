# Customer.xml

**Path**: `config\validator\validation\Customer\Customer.xml`

## Summary
This XML configuration file defines validation rules for the Customer entity in a Sylius-based e-commerce application. It enforces constraints on customer data including unique email per channel, required first name field with length limits (1-255 characters), whitespace validation, and character restrictions allowing only letters (including accented characters), numbers, hyphens, and underscores. The validation rules are organized into validation groups (`app_customer` and `app_customer_registration`) to allow different validation contexts during customer registration and profile updates.

