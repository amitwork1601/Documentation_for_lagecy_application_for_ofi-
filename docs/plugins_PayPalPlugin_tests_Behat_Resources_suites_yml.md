# suites.yml

**Path**: `plugins\PayPalPlugin\tests\Behat\Resources\suites.yml`

## Summary
This is a Behat test suite configuration file for the PayPal plugin in Sylius e-commerce platform. It defines the `ui_checkout` test suite and specifies all the Behat contexts (test helpers) needed to test PayPal integration during the checkout process, including contexts for handling entities like orders, payments, products, customers, shipping, and currencies. The configuration sets up the testing environment by registering hooks for database management (Doctrine ORM) and email testing, along with transformation contexts that convert human-readable test data into actual domain objects.

