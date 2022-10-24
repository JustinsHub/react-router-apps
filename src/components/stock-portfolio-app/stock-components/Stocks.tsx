import React from 'react'
import { useNavigate, useParams } from 'react-router'

interface StockProps {
  stock: {
    stockName: string
    stockTicker: string
    price: number
    id: number 
  }
}

const Stocks:React.FC<StockProps> = ({stock}) => {
  const navigate = useNavigate()

  //be able to click on a stock and redirect to that specific stock and you can purchase from there
  //when redireted to a specific stock, use useParams for stock name for url

  const handleRedirectStock = (stockName:string) => {
    navigate(`/stock-market/${stockName}`)
  }

  return (
    <div className="Stocks__container" onClick={() => handleRedirectStock(stock.stockTicker)}>
        <div className="Stocks__ticker">
            {stock.stockTicker}
        </div>
        <div className="Stocks__price">
            ${stock.price}
        </div>
    </div>
  )
}

export default Stocks