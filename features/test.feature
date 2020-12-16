#features/test.feature

Feature: Running Cucumber with Protractor

    Scenario: Protractor and Cucumber Test
        Given I go to "https://angular.io/"
        When I enter "test" in the searchbox
        Then Verify "test" is present