Feature: Technical Assignment

  Scenario: add Asset and check asset is saved
    Given I visit technical assignment website
    When I click on the add asset tab
    And I enter asset number in the text box with specific format
    When I click on send button
    Then I see pop up stating its successfully saved
    And I click close button in the pop up

  Scenario: search asset in existing Asset
    When I click on the existing asset tab
    Then I click on the search box and enter previously saved asset name
    And I check that the asset searched is available

  Scenario: add invalid asset
    When I click on the add asset tab
    And I enter Invalid asset number in the text box
    When I click on send button
    Then I see html error stating invalid format

  Scenario: add existing asset
    When I click on the add asset tab
    And I enter exiting asset number in the text box with specific format
    When I click on send button
    Then I see pop up popup show up stating existing asset
    And I click close button in the pop up

  Scenario: sort asset
    When I click on the add asset tab
    Then I enter asset number starting with Z in the text box with specific format
    When I click on send button
    And I click close button in the pop up
    When I click on the existing asset tab
    Then I click on the Name of the table header in the page
    And  I check in the table asset appear at top


  Scenario Outline: show no of entries
    When I click on the existing asset tab
    When I select no of "<entries>" in the show entries
    Then I check whether count of  "<entries>" are visible in the table
    Examples:
      | entries |
      | 20      |
      | 10      |
      | 50      |
