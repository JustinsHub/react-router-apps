import React, { useContext } from 'react'
import { StockContext } from '../../../contexts/StockContextWrapper'
import { StockI } from '../../../interfaces/stock.interface'
import Stocks from './Stocks'
import '../styles/StockMarket.css'


const StockMarket:React.FC = () => {
    const { getStocks } = useContext(StockContext)
    
  return (
    <section className="StockMarket__container">
        <h1>Stock Market</h1>
        <div>
            {getStocks.map((stock:StockI) => {
                return (
                    <Stocks key={stock.id} stock={stock}/>
                )
            })
            }
        </div>
    </section>
  )
}

export default StockMarket