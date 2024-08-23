Feature: Asset Management

  Scenario: Create a new asset
    When I create an asset with the following data
      | Asset Name  | Category  | Value | Description         |
      | Laptop      | Hardware  | 1500  | Dell XPS 13 Laptop  |
    Then I should see the new asset listed with the correct details
