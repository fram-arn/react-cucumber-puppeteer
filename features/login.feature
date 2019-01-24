Feature: Signin to system
  In order to use the system
  As a registered user
  I want to be able to sign in to application
  
  Scenario: Successfully sign in
    Given I am a registered user
    When I signin to the application
    Then I should get a home page