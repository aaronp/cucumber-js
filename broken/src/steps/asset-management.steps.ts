// src/steps/create-asset.steps.ts
import { Given, When, Then, Before, After } from '@cucumber/cucumber';
// import { expect } from 'chai';
// const { Given, When, Then } = require('@cucumber/cucumber');
// const { expect } = require('chai');
// import { expect } from 'chai';

Given('I am on the asset creation page', async function () {
    await this.page.goto('http://your-app-url.com/asset-create');
});

When('I create an asset with the following data', async function (dataTable) {
    const assets = dataTable.hashes();

    for (const asset of assets) {
        await this.page.type('input[name="assetName"]', asset['Asset Name']);
        await this.page.type('input[name="category"]', asset['Category']);
        await this.page.type('input[name="value"]', asset['Value']);
        await this.page.type('textarea[name="description"]', asset['Description']);
    }
});

When('I submit the asset form', async function () {
    // await this.page.click('button[type="submit"]');
});

Then('I should see the new asset listed with the correct details', async function () {
    const assetName = await this.page.$eval('.asset-name', el => el.textContent);
    const assetCategory = await this.page.$eval('.asset-category', el => el.textContent);
    const assetValue = await this.page.$eval('.asset-value', el => el.textContent);
    const assetDescription = await this.page.$eval('.asset-description', el => el.textContent);

    // expect(assetName).to.equal('Laptop');
});