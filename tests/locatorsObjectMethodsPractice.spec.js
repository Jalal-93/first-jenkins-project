import { test } from '@playwright/test';
import { console } from 'inspector';

test.describe('Test Group', () => {

    test.beforeEach(async ({ page }) => { 
        await page.goto("https://practice.cydeo.com/");
       // await page.goto("http://www.google.com");
   });

  test('Check() checks the radio buttons and checkboxes if they havnt been checked yet', async ({ page }) => {
    
    let checkboxesLink = page.locator("text='Checkboxes'");
    await checkboxesLink.click();

    let checkBox1 = page.locator("#box1");

    await checkBox1.check();

  });

  test('unchecked() unchecks the radio buttons and checkboxes if they havnt been unchecked yet', async ({ page }) => {
    let checkboxesLink = page.locator("text='Checkboxes'");
    await checkboxesLink.click();

    let checkBox2 = page.locator("#box2");

    await checkBox2.uncheck();

    // 

  });

  test('selectOption() used for dropdowns', async ({ page }) => {
    
    page.locator("text='Dropdown'").click();

    let simpleDropDown =page.locator("//select[@id='dropdown']");

   // await page.waitForTimeout(3000);

    // select by value
   // await simpleDropDown.selectOption("1");

   // select by visible text
   // await simpleDropDown.selectOption( { label: "Option 1" } );

    // select by index
    await simpleDropDown.selectOption( { index: 1 } );

  //  await page.waitForTimeout(3000);

  let yearDropDown= page.locator("//select[@id='year']");

await page.waitForTimeout(3000);
// select by index 
await yearDropDown.selectOption( { label: "1993" } );
// select by value 
//yearDropDown.selectOption( { value: "2022" } );
// slect by visible text
//yearDropDown.selectOption( { label: "2022" } );


let monthDropDown = page.locator("//select[@id='month']");
await page.waitForTimeout(3000);
// select by index
//monthDropDown.selectOption( { index: 1 } );
// select by value
await monthDropDown.selectOption( { label: "May" } );

// select by visible text
  //monthDropDown.selectOption( { label: "February" } );


let dayDropDown = page.locator("//select[@id='day']");

// select by index
//dayDropDown.selectOption( { index: 1 } );
// select by value
//dayDropDown.selectOption( { value: "15" } );
// select by visible text
await dayDropDown.selectOption( { label: "20" } );

let headerElement1 = page.locator("//h6[text()='State selection']");
    let actualText1 = await headerElement1.innerText();
    console.log(actualText1);
    // let satateDropDown
     let stateDropDown = page.locator("//select[@id='state']");
     await stateDropDown.selectOption( { label: "California" } );
    
     //Which programming languages do you know?
     // let SelectLanguages
     let languages = page.locator("//select[@name='Languages']");
     await languages.selectOption( { label: "JavaScript" } );
  
   // Select a website
        let DropDownLink= page.locator("//a[@id='dropdownMenuLink']");
        await DropDownLink.click();
    await page.locator("//a[text()='Google']").click();
    await page.locator("//textarea[@class='gLFyf']").fill('Quran Karim');
    // click on google box
    let googleBOxtra = await page.locator("//textarea[@class='gLFyf']");
    await googleBOxtra.press('Enter');
      // search for Quran Karim IN Google

 
        // search for Quran Karim IN Google
     
     
    //let SearchBox= page.locator("//textarea[@class='gLFyf']") ;                                                                          
    //await SearchBox.fill('Quran Karim').click();
    


  });


  test('innerText() retrives the visible text', async ({ page }) => {

     let headerElement = page.locator("//span[@class='h1y']");

     let actualText = await headerElement.innerText();

     console.log(actualText);
    
  });

  
   test('inputValue(): only works with <input>, <textarea>, <select>', async ({ page }) => {

        let inputsLink = page.getByText("Inputs");

      //  await inputsLink.scrollIntoViewIfNeeded();
      //  await page.waitForTimeout(3000);

        await inputsLink.click();

        let inputBox = page.locator("//input[@type='number']");

        await page.waitForTimeout(3000);


        await inputBox.fill("123");

        await page.waitForTimeout(3000);

        let inputValue = await inputBox.inputValue();

        console.log(inputValue);

  });

  });