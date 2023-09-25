import { test, expect,Page, Locator } from '@playwright/test';

export class loginPage {

readonly page:Page;
readonly userNameField:Locator;
readonly passwordField:Locator;
readonly loginButton:Locator;

constructor(page:Page) {
  this.page=page;
  this.userNameField=page.locator('#userName');
  this.passwordField=page.locator('[id="password"]');
  this.loginButton=page.locator('[class="btn btn-block submit-btn"]');
  };

async navigateToURL(url:string){

  // navigate to url
  await this.page.goto(url);
//'http://backoffice-systemtest.andalusiagroup.net:8090/'
};
  
  //await page.locator('body').click();
  
  async perfomrLogin(userName:string, Password:string) {
  // add user name and pass word in login page
  
  await this.userNameField.click();
  //this.userNameField.clear();
  //await page.locator('[id="userName"]').fill('rashagamalamazon');
  await this.userNameField.fill(userName);
  await this.passwordField.click();
   //this.passwordField.clear();
   await this.passwordField.fill(Password);
   await  this.loginButton.click();
};
};