/////////////////////////////import ////////////////////////////
import { test, expect } from '@playwright/test';
import {fullscreen} from './maximize.js'
//////////////////////////////////////////////////////login page//////////////////////////////


test('create product category', async ({ page }) => {
    // navigate to url
  await page.locator('body').click();
  //await page.goto('http://dev-testing.andalusiagroup.net:5002/');
  await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/');
  
  //window.fullscreen()
    //await page.press ('Windows key + Up arrow')


  // add user name and pass word in login page
  await page.locator('[id="userName"]').click();
  //await page.locator('[id="userName"]').fill('rashagamalamazon');
  await page.locator('[id="userName"]').fill('rashagamal1');
  await page.locator('[id="password"]').click();
  await page.locator('[id="password"]').fill('7654321');
  await page.locator('[class="btn btn-block submit-btn"]').click();
  //////////////////////////////////////// assert login successfully////////////////////////

  await expect(page).toHaveURL(/.*dashboard/)
  ///////////////////////////////////////////////////////////////////////////////////

  //await page.goto('http://dev-testing.andalusiagroup.net:5002/dashboard');
/*
  await page.getByRole('link').nth(1).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  */
//})
  ///////////////////////////////////////////////////////////go to product category screen/////////////////////////////
  //test('create product category', async ({ page }) => {
 await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/inventory-management/setups/product-setup/product-category/')

  //await page.locator('[src="/img/dots.39f06e4b.svg"]').click();
  //await page.locator('[src="/nav/BO-3-BO-Supply-Chain.svg"]').click();
  
  //await page.getByRole('link', { name: 'Supply Chain' }).click();
 // await page.getByRole('link', { name: 'Product Categories' }).click();

//////////////////////////////////////////////////////////////// add new product category////////////////////////////////////
 
  await page.locator('[class="k-button k-button-icontext k-grid-add d-inline-block"]').click();
  

  //add product category english name
  await page.locator('[class="form-control only-left-text"]').click();
    await page.locator('[class="form-control only-left-text"]').fill('rashaproductcategoryplaywright1');
  await page.locator('[class="form-control only-left-text"]').press('Control+c');

  await page.locator('[class="form-control only-right-text"]').click();
  await page.locator('[class="form-control only-right-text"]').fill('rashaproductcatplaywrightش');



  //await page.locator('[class="border-danger form-control only-right-text"]').press('Control+v');


  await page.getByRole('button', { name: 'select' }).click();
  await page.getByRole('option', { name: 'Medication' }).click();
  await page.getByPlaceholder('Add New Category Perfix').click();
  await page.getByPlaceholder('Add New Category Perfix').fill('rgplaywright');
  await page.locator('[class="form-control only-right-text"]').click();
  await page.locator('[class="form-control only-right-text"]').fill('rashaproductcatplaywrightش');

  await page.locator('[class="k-button mx-2"]').click();

  //////////////////////////assert new product category successful creation//////////////////
  await expect (page.getByText('rashaproductcategoryplaywright1')).toBeVisible();

  //await page.pause()


///////////////////////////////////create 2nd product category but this time press cancel//////////
await page.locator('[class="k-button k-button-icontext k-grid-add d-inline-block"]').click();
  

//add product category english name
await page.locator('[class="form-control only-left-text"]').click();
  await page.locator('[class="form-control only-left-text"]').fill('rashaproductcategoryplaywright2');
await page.locator('[class="form-control only-left-text"]').press('Control+c');

await page.locator('[class="form-control only-right-text"]').click();
await page.locator('[class="form-control only-right-text"]').fill('rashaproductcatplaywright2ش');



//await page.locator('[class="border-danger form-control only-right-text"]').press('Control+v');


await page.getByRole('button', { name: 'select' }).click();
await page.getByRole('option', { name: 'Medication' }).click();
await page.getByPlaceholder('Add New Category Perfix').click();
await page.getByPlaceholder('Add New Category Perfix').fill('rgplaywright2');
await page.locator('[class="form-control only-right-text"]').click();
await page.locator('[class="form-control only-right-text"]').fill('rashaproductcatplaywrightش');

await page.locator('[class="k-button mx-2 router-link-active"]').click();

//////////////////////////assert new product category cancel creation not exist//////////////////
await expect (page.getByText('rashaproductcategoryplaywright1')).toBeHidden();



  //await page.getByRole('row', { name: '26080 rashaproductcategoryplaywright1 rashaproductcatplaywrightش Medication rgplaywright Active Edit Delete' }).getByRole('button').first().click();
  

  /////////////////////////////////////////////////////edit product category///////////////////////////////////
  

    await page.getByRole('row').getByRole('button').first().click();
   

    await page.getByPlaceholder('Add New Category Perfix').click();
    await page.getByPlaceholder('Add New Category Perfix').fill('rgplaywrightt');
    await page.locator('[class="k-button mx-2"]').click();

    ////////////////assert that the edit is done successfully/////////
    await expect (page.getByText('rgplaywrightt')).toBeVisible();


///////////////////////////////////////////delete category//////////////
//////////////////////////cancel delete/////////
//await page.locator('#productGrid_active_cell').getByRole('button', { name: 'Delete' }).first().click();
await page.getByRole('row').getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'No' }).click();

////////////////assert that the cancel is done successfully/////////
await expect (page.getByText('rgplaywrightt')).toBeVisible();

//////////////////////////confirm  delete/////////
await page.getByRole('row').getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await expect (page.getByText('rgplaywrightt')).toBeHidden();



/*
  await page.locator('#productGrid_active_cell').getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByText('Deleted Successfully').click();
  await page.getByLabel('Category En Name').click();
  await page.getByLabel('Category En Name').fill('rashaproductcategryplay');
  await page.getByLabel('Category En Name').press('Enter');
  await page.getByText('No data to display').click();*/
}); 