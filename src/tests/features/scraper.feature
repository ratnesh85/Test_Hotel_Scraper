Feature: Hotel scraper

Scenario: Scrap website to get information that offers the lowest listing price for a 5-night stay
    When I select destination city as "Goa"
    And I select future check-in date as "2024-09-08" and future check-out date as "2024-09-12"
    And I select the number of guest
    And I click on Search button
    And I apply filter for 5 star rating on hotels
    Then I get the list of all the name of hotels and the website that offers lowest price
