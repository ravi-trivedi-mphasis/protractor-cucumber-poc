var {Given, When, Then} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var EC = protractor.ExpectedConditions;

chai.use(chaiAsPromised);
var expect = chai.expect;

Given(/^I go to "([^"]*)"$/, {timeout: 2 * 10000}, function(site) {
    return browser.get(site);
  });

When(/^I enter "([^"]*)" in the searchbox$/, {timeout: 2 * 10000}, function(text) {
	  browser.sleep(5000)
    var el = element(by.xpath("//input[@type='search']"));
	  el.sendKeys(text);
	  return browser.sleep(3000);
  });

Then(/^Verify "([^"]*)" is present$/, {timeout: 2 * 5000}, function(text) {
    var el = element(by.xpath("//input[@type='search']"));
	  return expect(el.getAttribute('value')).to.eventually.equal(text);
  });
