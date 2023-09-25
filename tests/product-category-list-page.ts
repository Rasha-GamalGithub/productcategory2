import { test, expect, Page, Locator} from '@playwright/test';

export class productCategoryListPage{
 
////////////////////////////////////////////////////Declaration////////////////////////////////////////////////////////////    
readonly page:Page;
readonly editProductCategory :Locator;
readonly deleteProductCategory :Locator;
readonly confirmDeleteProductCategory :Locator;
readonly cancelDeleteProductCategory : Locator;
readonly searchProductCategory:Locator;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////constructor for product category locators//////////////////////////////////
constructor ({page}){
    this.page=page;
    //this.editProductCategory=page.getByRole('row').getByRole('button').first(); 
    this.editProductCategory=page.locator('[class="k-button k-button-icontext k-grid-edit d-inline-block"]')
    //this.deleteProductCategory = page.getByRole('row').getByRole('button').nth(1);
    this.deleteProductCategory=page.getByRole('button', { name: 'Delete' });
    //[#productGrid > div.k-grid-content.k-auto-scrollable > table > tbody > tr:nth-child(1) a.k-grid-showConfirmPopup k-button k-button-icontext k-grid-delete d-inline-block]');
    //document.querySelector("#productGrid > div.k-grid-content.k-auto-scrollable > table > tbody > tr:nth-child(1)")
    this.confirmDeleteProductCategory= page.locator ('[class="btn btn-danger btn-sm"]');
    //page.getByRole('button', { name: 'Yes' });

    this.cancelDeleteProductCategory=page.locator('[class="btn btn-outline-secondary btn-sm"]');
   // page.getByRole('button', { name: 'No' });
    this.searchProductCategory=page.locator('input[title="Category En Name"]');
           
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////edit product category function/////////////////////////////////////////////////////////

async editProductCatbutton(){

    // edit first row 
    await this.editProductCategory.click();
 
  
  };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////delete product category/////////////////////////
async deleteProductCatbutton(confirm:boolean){
    await this.deleteProductCategory.first().click();
await this.page.waitForTimeout(1*1000);
    if ( confirm === true)
                {
                    await this.confirmDeleteProductCategory.click();
                }
        else    {
        
                    await this.cancelDeleteProductCategory.click();
                }

 };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////search field/////////////

async searchProductCat(name:string){

    await this.searchProductCategory.click();
    await this.searchProductCategory.fill(name);
    await this.searchProductCategory.press('Enter');

};

};