Feature: Publish login

  As a user on the Publish login page
  I want to login to the application
  Because I want to use it

  Background:

    Given I am on the login page

  Scenario: Logging in
    When I enter "admin" into the username box
      And I enter "dt" into the password box
      And I click the login button
    Then I should be taken to the base route

# Scenario Outline: Logging in with passing login credentials as a data table
#   When I enter <username> into the username box
#     And I enter <password> into the password box
#     And I click the login button
#   Then I should be taken to the base route

#   Examples:
#     | username password |
#     | "admin" "dt"      |