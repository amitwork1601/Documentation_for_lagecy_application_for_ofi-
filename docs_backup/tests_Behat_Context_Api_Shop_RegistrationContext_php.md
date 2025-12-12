# RegistrationContext.php

**Path**: `tests\Behat\Context\Api\Shop\RegistrationContext.php`

## Summary
This is a Behat test context class for testing customer registration functionality in the Sylius e-commerce platform's shop API. It provides step definitions to simulate user registration scenarios, including specifying customer details like first name, last name, and email through the API client. The context enables behavioral testing of the shop's registration process by allowing testers to write human-readable Gherkin scenarios that interact with the registration endpoints.

## Classes
- `RegistrationContext`

## Function Details

### `iWantToRegisterNewAccount`

- **Description**: @When I want to register a new account
@When I want to again register a new account
/

### `iSpecifyTheFirstNameAs`

- **Parameters**: `string $firstName = ''`
- **Description**: @When I specify the first name as :firstName
@When I do not specify the first name
/

### `iSpecifyTheLastNameAs`

- **Parameters**: `string $lastName = ''`
- **Description**: @When I specify the last name as :lastName
@When I do not specify the last name
/

### `iSpecifyTheEmailAs`

- **Parameters**: `string $email = ''`
- **Description**: @When I specify the email as :email
@When I do not specify the email
/

### `iSpecifyThePasswordAs`

- **Parameters**: `string $password = ''`
- **Description**: @When I specify the password as :password
@When I do not specify the password
/

### `iSpecifyThePhoneNumberAs`

- **Parameters**: `string $phoneNumber`
- **Description**: @When I specify the phone number as :phoneNumber
/

### `iSubscribeToTheNewsletter`

- **Description**: @When I subscribe to the newsletter
/

### `iSpecifyBirthdayAs`

- **Parameters**: `$birthday`
- **Description**: @When I specify birthday as :arg1
/

### `iVerifyMyAccountUsingLink`

- **Parameters**: `CustomerInterface $customer`
- **Description**: @When I verify my account using link sent to :customer
/

### `iConfirmThisPassword`

- **Description**: @When I confirm this password
/

### `iRegisterWithEmailAndPassword`

- **Parameters**: `string $email, string $password, string $localeCode = 'en_US'`
- **Description**: @When I register with email :email and password :password
@When I register with email :email and password :password in the :localeCode locale
/

### `iRegisterThisAccount`

- **Description**: @When I register this account
@When I try to register this account
/

### `iLogInAsWithPassword`

- **Parameters**: `string $email, string $password`
- **Description**: @When I log in as :email with :password password
/

### `iLogOut`

- **Description**: @When I log out
/

### `iShouldBeNotifiedThatNewAccountHasBeenSuccessfullyCreated`

- **Description**: @Then I should be notified that new account has been successfully created
/

### `iShouldBeNotifiedThatTheFirstNameIsRequired`

- **Description**: @Then I should be notified that the first name is required
/

### `iShouldBeNotifiedThatFieldHaveToBeProvided`

- **Parameters**: `string ...$fields`
- **Description**: @Then /^I should be notified that the "([^"]+)" and "([^"]+)" have to be provided$/
/

### `iShouldBeNotifiedThatTheLastNameIsRequired`

- **Description**: @Then I should be notified that the last name is required
/

### `iShouldBeNotifiedThatThePasswordIsRequired`

- **Description**: @Then I should be notified that the password is required
/

### `iShouldBeNotifiedThatTheEmailIsRequired`

- **Description**: @Then I should be notified that the email is required
/

### `iShouldBeNotifiedThatTheEmailIsAlreadyUsed`

- **Description**: @Then I should be notified that the email is already used
/

### `iShouldNotBeLoggedIn`

- **Description**: @Then I should not be logged in
@Then I should be logged in
/

### `iShouldBeSubscribedToTheNewsletter`

- **Description**: @Then I should be subscribed to the newsletter
/

### `assertFieldValidationMessage`

- **Parameters**: `string $path, string $message`

### `fillContent`

- **Parameters**: `?string $email = 'johndoe@ultrapremiumdirect.com', ?string $password = '12345678'`

### `getResponseContent`


### `convertElementsToCamelCase`

- **Parameters**: `array $fields`

