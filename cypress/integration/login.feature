Feature: Signin to system
  In order to use the system
  As a registered user
  I want to be able to sign in to application
  
  @focus
  Scenario Outline: Successfully sign in
    Given username is "<username>" and password is "<password>"
    When I submit to system
    Then I get "<urlcontain>"

    Examples:
    | username | password | urlcontain |
    | admin@site.com | passwords | login |
    | admin@site.com | password | home |