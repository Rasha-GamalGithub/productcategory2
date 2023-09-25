/////////////////////////////import ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { test, expect, Page } from '@playwright/test';
import {newProductCategoryPage} from './product-categorypage';
import { productCategoryListPage } from './product-category-list-page';
import { loginPage } from './login.page';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var productCatUrl= 'http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/inventory-management/setups/product-setup/product-category/';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////create product category page//////////////////////////////////////////////////////////////////////


test.describe('create product-category',()=>{

///////////////////////////////create 1st product category test////////////////////////////////////
test('createproductCategortTest1', async ({ page }) => {
const productCatPage = new newProductCategoryPage ({page});

/////navigate to  product category screen////
await productCatPage.navigateToURL(productCatUrl);

////////create new product category////////////////
await productCatPage.createNewProductCatbuttonFn();
await productCatPage.productCatFillForm('rashaproductcategoryplaywright1','rashaproductcatplaywrightش','rgplaywright','descdfsdfsfdss');
await productCatPage.selectProductCatClassification('Medical Services');


////////////////////////////save product category/////
await productCatPage.saveProductCat();

  
//////////////////////////assert new product category successful creation//////////////////
await productCatPage.assertTextVisible('rashaproductcategoryplaywright1')  
  //await page.pause()
});
////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////create second product cat//////////////////////////////////

test('createproductCategortTest2', async ({ page }) => {
  const productCatPage2 = new newProductCategoryPage ({page});
  
  /////navigate to  product category screen////
  await productCatPage2.navigateToURL(productCatUrl);
  
  ////////create new product category////////////////
  await productCatPage2.createNewProductCatbuttonFn();

  await productCatPage2.productCatFillForm('rashaproductcategoryplaywright2','rashaproductcatplaywright2ش','rgplaywright2','descdfsdfsfds33s');
  await productCatPage2.selectProductCatClassification('Medication');
  
  
  ////////////////////////////save product category/////
  await productCatPage2.saveProductCat();
  
    
  //////////////////////////assert new product category successful creation//////////////////
  await productCatPage2.assertTextVisible('rashaproductcategoryplaywright2')  
    //await page.pause()
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////cancel creation 3rd product cat//////////////////////////////////

test('cancelCreateProductCategortTest3', async ({ page }) => {
  const productCatPage3 = new newProductCategoryPage ({page});
  
  /////navigate to  product category screen////
  await productCatPage3.navigateToURL(productCatUrl);
  
  ////////create new product category////////////////
  await productCatPage3.createNewProductCatbuttonFn();
  await productCatPage3.productCatFillForm('rashaproductcategoryplaywright3','rashaproductcatplaywright3ش','rgplaywright3','descdfsdfsfds3355s');
  await productCatPage3.selectProductCatClassification('Medication');
  
  
  ////////////////////////////save product category/////
  await productCatPage3.cancelProductCat();
  
    
  //////////////////////////assert new product category successful creation//////////////////
  await productCatPage3.assertTextHidden('rashaproductcategoryplaywright3')  
    //await page.pause()
  });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////edit product category page//////////////////////////////////////////////////////////////////////
test.describe('edit product-category', ()=>{

  //////////////////////////////cancel editing product category////
  test('edit product-category', async ({ page }) => {
    const editproductCatPage1 = new productCategoryListPage ({page});
    const editproductCatPage2 = new newProductCategoryPage ({page});
 
  ////navigate to product category page//////////
  await editproductCatPage2.navigateToURL(productCatUrl)

  //edit product category
   await editproductCatPage1.searchProductCat('rashaproductcategoryplaywright1');
   await editproductCatPage1.editProductCatbutton();
   await editproductCatPage2.productCatFillForm('rashaproductcategoryplaywright10','rashaproductcatplaywright10ش','rgplaywright10','testdesc')
   await editproductCatPage2.cancelProductCat();

////////////////////////////////assert nothing changed//////////////////////////
   await editproductCatPage2.assertTextHidden('rashaproductcategoryplaywright10');
   await editproductCatPage2.assertTextHidden('rashaproductcatplaywright10ش');
   await editproductCatPage2.assertTextHidden('rgplaywright10');
   await editproductCatPage2.assertTextHidden('testdesc');

  });

 //////////////////////////////cancel editing product category////
 test('confirm edit product-category', async ({ page }) => {
  const editproductCatPage3 = new productCategoryListPage ({page});
  const editproductCatPage4 = new newProductCategoryPage ({page});

////navigate to product category page//////////
await editproductCatPage4.navigateToURL(productCatUrl)

//edit product category
 await editproductCatPage3.searchProductCat('rashaproductcategoryplaywright2');
 await editproductCatPage3.editProductCatbutton();
 await editproductCatPage4.productCatFillForm('rashaproductcategoryplaywright10','rashaproductcatplaywright10ش','rgplaywright10','testdesc')
 await editproductCatPage4.saveProductCat();

////////////////////////////////assert nothing changed//////////////////////////
 await editproductCatPage4.assertTextVisible('rashaproductcategoryplaywright10');
 await editproductCatPage4.assertTextVisible('rashaproductcatplaywright10ش');
 await editproductCatPage4.assertTextVisible('rgplaywright10');
 await editproductCatPage4.assertTextVisible('testdesc');

 });



});





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////delete product category page//////////////////////////////////////////////////////////////////////


test.describe('delete product-category', ()=>{
  

//////////////////////////////////cancel delete product category///////////////////////
  test('cancel delete product-category', async ({ page }) => {
    const cancelproductCatPage1 = new productCategoryListPage ({page});
    const cancelproductCatPage4 = new newProductCategoryPage ({page});

    ////navigate to product category page//////////
  await cancelproductCatPage4.navigateToURL(productCatUrl)

  await cancelproductCatPage1.searchProductCat('rashaproductcategoryplaywright1');


  ////cancel delete product category///////
  await cancelproductCatPage1.deleteProductCatbutton(false);

  ////assert cancel product category///////
await cancelproductCatPage4.assertTextVisible('rashaproductcategoryplaywright1');
    });


    ////////////////////////////////////////confirm delete product category////

    test('confirm delete product-category', async ({ page }) => {
      const cancelproductCatPage2 = new productCategoryListPage ({page});
      const cancelproductCatPage5 = new newProductCategoryPage ({page});
  
      ////navigate to product category page//////////
    await cancelproductCatPage5.navigateToURL(productCatUrl)

    await cancelproductCatPage2.searchProductCat('rashaproductcategoryplaywright1');

  
    ////cancel delete product category///////
    await cancelproductCatPage2.deleteProductCatbutton(true);
  
    ////assert cancel product category///////
  await cancelproductCatPage5.assertTextHidden('rashaproductcategoryplaywright1');
      });




}); 
