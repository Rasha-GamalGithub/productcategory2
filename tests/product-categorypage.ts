import { test, expect, Page, Locator} from '@playwright/test';

export class newProductCategoryPage{
 
////////////////////////////////////////////////////Declaration////////////////////////////////////////////////////////////    
readonly page:Page;
readonly createNewProductCatButton :Locator;
readonly productCatEnglishName :Locator;
readonly productCatArabicName :Locator;
readonly productCatPrefix : Locator;
readonly classificationSelect: Locator;
readonly optionClassificationSelect: Locator;
readonly description: Locator;
readonly saveButton: Locator;
readonly cancelButton: Locator;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////constructor for product category locators//////////////////////////////////
constructor ({page}){
    this.page=page;
    this.createNewProductCatButton=page.locator('[class="k-button k-button-icontext k-grid-add d-inline-block"]');
    this.productCatEnglishName = page.locator('[class="form-control only-left-text"]');
    this.productCatArabicName= page.locator('[class="form-control only-right-text"]');
    this.classificationSelect=page.getByRole('button', { name: 'select' });
    this.optionClassificationSelect=page.locator('[class="k-input form-control"]');
    this.productCatPrefix=page.getByPlaceholder('Add New Category Perfix');
    this.description=page.locator('#description  textarea.form-control' );
    //document.querySelector("#description  textarea/class="form-control")
    this.saveButton =  page.locator('[class="k-button mx-2"]');
    this.cancelButton= page.locator('[class="k-button mx-2 router-link-active"]');
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////navigate to URL function/////////////////////////////////////////////////////////

async navigateToURL(url:string){

    // navigate to url
    await this.page.goto(url);
  
  };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////click create new product category button ////////////////////////////////////////////
async createNewProductCatbuttonFn(){
  //////////////////press add new buttoon/////////
  await this.createNewProductCatButton.click();
}

////////////////////////////////////////////////////fill create new product category form////////////////////////////////////////////

async productCatFillForm(englishName:string, arabicName:string,prefix:string,desc:string){

      ////////////////////fill english name/////////////////////
    await this.productCatEnglishName.click();
    await this.productCatEnglishName.fill(englishName);

///////////////////////fill arabic name/////////////////////
    await this.productCatArabicName.click();
    await this.page.waitForTimeout(1*1000);
    await this.productCatArabicName.fill(arabicName);

////////////////////fill prefix////////////////////////////
  await this.productCatPrefix.click();
  await this.page.waitForTimeout(1*1000);
  await this.productCatPrefix.fill(prefix);


  ///////////////////fill description////////////////////
  await this.description.click();
  await this.page.waitForTimeout(1*1000);
  await this.description.fill(desc);
   
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////classification select////////////////////////////////////////////////////////////////
async selectProductCatClassification (selectclassification:string){
    await this.classificationSelect.click();
    await this.optionClassificationSelect.fill(selectclassification);
    await this.page.waitForTimeout(1*1000);

   await this.page.getByRole('option', { name: selectclassification}).click();

};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////save product category page///////////////////////////////////////////////////////
async saveProductCat (){
    
await this.saveButton.click();

};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////cancel product category page//////////////////////////////////////////////////
async cancelProductCat(){

    await this.cancelButton.click();
    
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////assert text to be visible///////////////////////////////////////////////

async assertTextVisible(text:string){
  await this.page.waitForTimeout(1*1000);
  const grd:Locator=this.page.getByRole('gridcell', { name: text, exact: true }).first();
    //await expect (this.page.getByText(text,{exact:true})).toBeVisible();
        //await expect (this.page.getByText(text).filter({hasText:text})).toHaveText(text);
        await expect (grd).toBeVisible();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////assert text to be hidden/////////////////////////////////////////////////////////////

async assertTextHidden(text:string){
await expect(this.page.getByText(text,{exact:true})).toBeHidden();

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}