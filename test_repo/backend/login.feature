Feature: User Authentication
  As a user
  I want to be able to login
  So that I can access my account

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid credentials
    Then I should be redirected to dashboard

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter invalid credentials
    Then I should see an error message
