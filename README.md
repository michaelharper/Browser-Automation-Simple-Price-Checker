# Browser Automation: Simple Price Checker with Node.js
Behold, a simple price-checker thrown together using Node.js and Selenium/WebDriver.

I've been interested in getting away from Selenium IDE for Firefox for some time and even though Selenium IDE can be extremely effective I needed to move into cross-browser testing. Browser testing aside, import.io has become mostly useless to me since implementing their 500 query/month limitation and I just don't feel like paying their prices for my frequency of use.

The below code will load MatterHackers' ColorFabb XT-CF20 Carbon Fiber Filament page and compare it to its standard price:

```var webdriver = require('selenium-webdriver'),
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

driver.quit();```

## Here are the invdividual steps:

- The script loads selenium-webdriver for interaction with Chrome.
- It then loads the builder() method boiler-plate.
- WebDriver then gets the MatterHackers page.
- It finds the price element by CSS id and extracts the text value.
- Logs the price to my console (i.e. for me, my shell)
- I convert the price string to an integer for the next step which is a conditional.
- Compares the price to a fixed price variable which I defined before-hand.
- If the price is less, console logs the message "Discounted price, you should buy!". This is probably where I will add an email notification of some sort.
- I threw in standard test pass/fail output in case I wanted to get advanced and compare the results of this script across several days, weeks or months.
- Finally, I exited Chrome.
