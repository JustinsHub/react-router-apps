import React from 'react'

const StockPortfolio:React.FC = () => {

    //stock market
        // - GET method for stocks
            // - render stocks on page based on Stocks component...?
                // - when user clicks on rendered stocks, redirects them to that specific stock
        
        // - POST method for buying stocks
            // - have an input on how many stock a user wants to buy. Users can manually input, +, -

    //stock portfolio
        // GET method for getting users stocks
            // - render stocks based on Users OWNED stocks...
            // - have a redirect page to the specific stock...
             
        // - POST method for buying stocks
                // - have an input on how many stock a user wants to buy. Users can manually input, +, -

    //OPTIONAL feature
        // - Create an input to search specific stock
        // - When user is typing/searching it requests stock closest to that letter
        // - Add debouncing to search input and throttling on submitting


  return (
    <div>StockPortfolio</div>
  )
}

export default StockPortfolio