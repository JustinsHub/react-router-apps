import React from 'react'

interface StockProps {
  stock: {
    stockName: string
    stockTicker: string
    price: number
    id: number 
  }
}

const Stocks:React.FC<StockProps> = ({stock}) => {

  //be able to click on a stock and redirect to that specific stock and you can purchase from there
  return (
    <div>
        <div>
            Stock Name: {stock.stockName}
        </div>
        <div>
            Stock Ticker: {stock.stockTicker}
        </div>
        <div>
            Stock Price: {stock.price}
        </div>
    </div>
  )
}

export default Stocks