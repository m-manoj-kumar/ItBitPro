Feature: Eurostar Ticket Booking

    Scenario: Book a return train ticket from London St Pancras to Paris Gare Du Nord
        Given I am on the Eurostar website
        And Click Accept All
        And I click on Trains
        And I click on Return
        Then I enter "London St Pancras Int'l" in the from field
        And I enter "Paris Gare du Nord" in the to field
        Then I select from date as "2023-08-25"
        And I select to date as "2023-08-26"
        And I select 2 adults as passengers
        And I click on Search
        Then I select the outbound price
        And I select the return price
        And I click continue
        When I click continue without any extras
        Then I check out as a guest
        And I capture the checkout screen