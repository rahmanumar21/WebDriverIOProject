// Suitcase
describe('Ebay Search Page', () => {

          //1st step
          it('should open the url and verify the title', () => {

                    // open the url and verify the title
                    /// open the url
                    browser.url("https://www.ebay.com/");

                    /// verify the title
                    expect(browser).toHaveTitle("Electronics, Cars, Fashion, Collectibles & More | eBay");
                    
          });
});