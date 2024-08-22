import {When, Then } from "@cucumber/cucumber"
import scraperPage from "../pages/scraperpage";

let _scraperPage = new scraperPage();

When('I select destination city as {string}', async function (city) {
    await _scraperPage.EnterCityName(city);
  });

When('I select future check-in date as {string} and future check-out date as {string}', async function (checkindate,checkoutdate) {
    await _scraperPage.ClickCheckIn();
    await _scraperPage.ClickDate(checkindate);
    await _scraperPage.ClickDate(checkoutdate);

  });

When('I select the number of guest', async function () {
    await _scraperPage.EnterChildrenNumber("1");
    await _scraperPage.SelectChildAge("1");
  });

When('I click on Search button', async function () {
    await _scraperPage.ClickSearch();
    await _scraperPage.sleep(5000);
  });

When('I apply filter for 5 star rating on hotels', async function () {
    await _scraperPage.ClickDropDownFilter();
    await _scraperPage.ClickLabel5Star();
    await _scraperPage.ClickApplyFilter();
    await _scraperPage.sleep(5000);
  });

Then('I get the list of all the name of hotels and the website that offers lowest price', async function () {
    let hotels: string [] = await _scraperPage.GetTextInListHotels();
    let prices: string [] = await _scraperPage.GetTextInListPrices();
    let sites: string [] = await _scraperPage.GetTextInListSites();
    for (let i = 0; i < hotels.length; i++) {
        console.log("Hotel Name: "+hotels[i]+ " available on "+ sites[i] +" and its price " + prices[i]+"\n" );      
    }
  });