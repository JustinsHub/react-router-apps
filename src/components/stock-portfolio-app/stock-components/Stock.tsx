import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { StockContext } from '../../../contexts/StockContextWrapper'
import { StockI } from '../../../interfaces/stock.interface'

const Stock:React.FC = () => {
    const { getStocks } = useContext(StockContext)
    const { stockTicker } = useParams()
    const navigate = useNavigate()

  return (
    <div className="Stock__container">
        {getStocks
        .filter((stock: StockI) => stock.stockTicker === stockTicker)
        .map((stock:StockI) => {
            return (
            <div key={stock.id}>
                <h1>
                  {stock.stockName}
                </h1>
                <div>
                  <h3>Information</h3>
                  {stock.details}
                </div>
                <h3>
                  Ticker symbol: {stock.stockTicker}
                </h3>
                <div>
                  Current price: <span className="Stock__price">${stock.price}</span>
                </div>
            </div>
            )
        })
        } 
        <button className="StockMarket__global-btn" onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Stock