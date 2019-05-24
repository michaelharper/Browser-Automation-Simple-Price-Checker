var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('https://www.matterhackers.com/store/3d-printer-filament/colorfabb-xt-cf20-1.75mm');
driver.findElement(By.id('price')).getText().then(function(text) {
  console.log('Current price is \'' + text + '\'');
  var currentPrice = parseInt(text);
  if (currentPrice < 65.95) {
    console.log('Discounted price, you should buy!');
  }
  if (currentPrice !== '') {
    console.log('Test passed');
  } else {
    console.log('Test failed');
  }
});

driver.quit();
