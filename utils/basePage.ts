export default class basePage {

    async navigateToURL(url: string) {
        await global.page.goto(url);
    }

    async getURL(){
        let currentPageURL=await global.page.url();
        return currentPageURL;
    }

    async click(locator: string) {
        await global.page.click(locator);
    }

    async goBack(){
        await global.page.goBack();
    }

    async reloadPage(){
        await global.page.reload();
    }

    async clearTextField(locator: string): Promise<void> {
        await global.page.click(locator);
        await global.page.keyboard.press("Control+A");
        await global.page.keyboard.press("Backspace");

    }

    async pressKey(keyName): Promise<void> {
        await global.page.keyboard.press(keyName);

    }

  
    async enterValue(locator: string, value: string) {
        await global.page.fill(locator, value);
    }


    async waitForURL(url: string) {
       await global.page.waitForURL(url);
    }

    async visible(locator: string): Promise<boolean> {
        return await global.page.isVisible(locator);
      
    }

    async type(locator:string, val:string){
        await global.page.type(locator, val);
    }


    // wait related codes

    async waitForLoad(){
        await global.page.waitForLoadState();
    }
    
    async sleep(timeOut: number) {
        await global.page.waitForTimeout(timeOut);
    }

    public async waitForSelector(locator: string, timeOut: number): Promise<void> {
        await global.page.waitForSelector(locator, { timeout: timeOut });
    }


    public async waitUntilVisible(locator:string, timeOut:number){
        await global.page.waitForSelector(locator, { timeout: timeOut, state:'visible' });
    }

    public async waitUntilHIdden(locator:string, timeOut:number){
        await global.page.waitForSelector(locator, { timeout: timeOut, state:'hidden' });
    }


    public async getInnerText(locator:string):Promise<string>{
        return await global.page.textContent(locator);
    }

    public async getTextsInList(locator: string): Promise<string[]> {
        try {
            const content: string[] = [];

            const elements = await global.page.$$(locator);

            for (let index = 0; index < elements.length; index++) {
                const text = await global.page.evaluate(el => el.innerText, elements[index]);
                content.push(text);
            }
            return content;

        } catch (error) {
            console.log(error);
            return [];
        }
    }

    public async slectValueFromDropDown(dropoDownOption: string, valueToBeSlected: string) {
        await global.page.selectOption(dropoDownOption, { label: valueToBeSlected });

    }
   
}