import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { StockContext } from '../../../contexts/StockContextWrapper'
import StocksAPI from '../utils/api/stockApi'

interface StockProps {
  stock: {
    id: number 
    stockName: string
    stockTicker: string
    price: number
    owned: number
  }
}

const Stocks:React.FC<StockProps> = ({stock}) => {
  const {handlePurchaseStock, handleSellStock} = useContext(StockContext)
  const navigate = useNavigate()

  const [stockInput, setStockInput] = useState(0)
  const [buyStock, setBuyStock] = useState(false)
  const [sellStock, setSellStock] = useState(false)

  const handleOpenPurchase = () => setBuyStock(true)
  const handlePurchaseCancel = () => setBuyStock(false)
  const handleOpenSell = () => setSellStock(true)
  const handleSellCancel = () => setSellStock(false)

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setStockInput(+e.target.value)
  }

  
  const handleStockPurchase = async(e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    try {
        await StocksAPI.purchaseStock(stockInput)
    } catch (error) {
        return error
    }
  }
  
  const handleRedirectStock = (stockName:string) => {
    navigate(`/stock-market/${stockName}`)
  }

  const renderBuySellBtn = () => {
    if(buyStock){
      return (
      <div>
        <form onSubmit={handleStockPurchase}>
          <span className="Stocks__input-desc">Shares to buy?</span>
          <input
          name="purchaseStocks"
          type="number"
          value={stockInput}
          onChange={handleChange}
          />
          <div>
            <button className="StockMarket__global-btn">BUY</button>
            <button className="StockMarket__global-btn" onClick={handlePurchaseCancel}>CANCEL</button>
          </div>
        </form>
      </div>
      )
    } else if(sellStock) {
      return (
        <div>
          <span className="Stocks__input-desc">Shares to sell?</span>
          <input
          name="sellStocks"
          type="number"
          value={stockInput}
          onChange={handleChange}
          />
          <div>
            <button className="StockMarket__global-btn" onClick={handleOpenSell}>SELL</button>
            <button className="StockMarket__global-btn" onClick={handleSellCancel}>CANCEL</button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <button className="StockMarket__global-btn" onClick={handleOpenPurchase}>BUY</button>
          <button className="StockMarket__global-btn" onClick={handleOpenSell}>SELL</button>
        </div>
      )
    }
  }

  return (
    <div className="Stocks__container">
        <div className="Stocks__ticker" onClick={() => handleRedirectStock(stock.stockTicker)}>
            {stock.stockTicker}
        </div>
        <div className="Stocks__shares">
           {stock.owned} shares
        </div>
        <div className="Stocks__price">
            ${stock.price}
        </div>

        <div>
          {renderBuySellBtn()}
        </div>
    </div>
  )
}

export default Stocks