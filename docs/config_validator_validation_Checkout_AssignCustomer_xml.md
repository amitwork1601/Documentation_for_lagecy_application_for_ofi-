# AssignCustomer.xml

**Path**: `config\validator\validation\Checkout\AssignCustomer.xml`

## Summary
This is a Symfony validation configuration file that applies custom validation rules to the `AssignCustomer` checkout command. It registers a custom validator constraint (`App\Validator\Command\Checkout\AssignCustomer`) to ensure that customer assignment operations during the checkout process meet specific business requirements, with validation executed within the "sylius" validation group context.

