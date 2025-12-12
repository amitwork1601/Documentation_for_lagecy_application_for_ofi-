# Animal.xml

**Path**: `config\validator\validation\Animal\Animal.xml`

## Summary
This is a Symfony validation configuration file that defines data validation rules for the `Animal` entity. It enforces that an animal's weight must be greater than or equal to 1, the name cannot be blank or contain only whitespace, and the name must only contain alphanumeric characters, spaces, underscores, hyphens, and accented letters (à-ý, À-Ý). These constraints are grouped under "sylius" validation and use custom error message keys for internationalization.

