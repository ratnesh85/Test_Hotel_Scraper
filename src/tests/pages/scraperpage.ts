import basePage from "../../../utils/basePage";

export default class scraperPage extends basePage{

    private textbox_cityName = "data-testid=search-form-destination";
    private textbox_checkIn = "data-testid=search-form-calendar-checkin-value";
    private selectDate = "data-testid=valid-calendar-day-value";
    private textbox_noOfChildren = "data-testid=children-amount";
    private button_apply = "data-testid=guest-selector-apply";
    private dropdown_childAge = "data-testid=child-age-select";
    private button_search = "data-testid=search-button-with-loader";
    private dropdown_filters = "//button[@name='more_filters']";
    private label_5star = "//span[contains(text(),'5-star hotels')]";
    private button_applyFilter = "data-testid=filters-popover-apply-button";
    private list_hotel = "//button[@data-testid='item-name']";
    private list_prices = "//div[@data-testid='clickout-area']//span[@data-testid='recommended-price']";
    private list_sites = "//div[@data-testid='clickout-area']//strong[@data-testid='recommended-price-partner']";


    async EnterCityName(city:string){
        await this.enterValue(this.textbox_cityName,city);
        await this.pressKey("Tab");
    }

    async EnterChildrenNumber(num){
        await this.enterValue(this.textbox_noOfChildren,num);
        await this.pressKey("Tab");
    }

    async ClickCheckIn(){
        await this.click(this.textbox_checkIn);
    }

    async ClickApply(){
        await this.click(this.button_apply);
    }

    async ClickSearch(){
        await this.click(this.button_search);
    }

    async ClickApplyFilter(){
        await this.click(this.button_applyFilter);
    }

    async ClickLabel5Star(){
        await this.click(this.label_5star);
    }

    async ClickDropDownFilter(){
        await this.click(this.dropdown_filters);
    }

    async GetTextInListPrices(){
        return await this.getTextsInList(this.list_prices);
    }

    async GetTextInListHotels(){
        return await this.getTextsInList(this.list_hotel);
    }

    async GetTextInListSites(){
        return await this.getTextsInList(this.list_sites);
    }

    async SelectChildAge(age){
        await this.slectValueFromDropDown(this.dropdown_childAge,age);
    }

    async ClickDate(date){
        await this.click(this.selectDate.replace("value",date));
    }

}