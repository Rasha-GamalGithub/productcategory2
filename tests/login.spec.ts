import {test,expect,Page} from '@playwright/test';
 import {loginPage} from './login.page';
//let page : Page;


 test ('login',async ({page}) => {
    const login = new loginPage (page);  

    await login.navigateToURL('http://backoffice-systemtest.andalusiagroup.net:8090/');
    await login.perfomrLogin('rashagamal1','7654321');
    await page.waitForURL(/.*dashboard/);
    await expect(page).toHaveURL(/.*dashboard/);
    await page.context().storageState({path:'./token.json'});  //store local storage in file
 });