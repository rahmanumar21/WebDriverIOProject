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

          //2nd step
          it('should search a product and verify the the product search', () => {

                    // declare
                    const formSearchInput = $("#gh-ac");

                    // add value
                    formSearchInput.addValue("Laptop");

                    // verify form
                    expect(formSearchInput).toHaveText("Laptop");
                    
          });
});