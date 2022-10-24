import React, { useContext } from 'react'
import { StockContext } from '../../../contexts/StockContextWrapper'
import { StockI } from '../../../interfaces/stock.interface'
import Stocks from './Stocks'
import '../styles/StockMarket.css'
import { Link } from 'react-router-dom'


const StockMarket:React.FC = () => {
    const { getStocks } = useContext(StockContext)
    
  return (
    <section className="StockMarket__container">
        <h1 style={{textAlign: 'center'}}>Stock Market</h1>
        <div>
            {getStocks.map((stock:StockI) => {
                return (
                    <Stocks key={stock.id} stock={stock}/>
                )
            })
            }
        </div>
        <div style={{textAlign:'center', marginTop: '1rem'}}>
            <Link to="/stock-portfolio" className="StockMarket__global-btn">Portfolio</Link>
        </div>
    </section>
  )
}

export default StockMarket