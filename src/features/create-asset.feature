Feature: Asset Management

  Scenario: Create a new asset
    Given I am on the asset creation page
    When I fill in the asset details with the following data
      | Asset Name  | Category  | Value | Description         |
      | Laptop      | Hardware  | 1500  | Dell XPS 13 Laptop  |
    And I submit the asset form
    Then I should see the new asset listed with the correct details
