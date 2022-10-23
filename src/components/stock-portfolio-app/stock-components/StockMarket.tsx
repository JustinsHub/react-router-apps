import React, { useContext } from 'react'
import { StockContext } from '../../../contexts/StockContextWrapper'
import { Stock } from '../../../interfaces/stock.interface'
import Stocks from './Stocks'


const StockMarket:React.FC = () => {
    const { getStocks } = useContext(StockContext)
    
  return (
    <section>
        <div>
            {getStocks.map((stock:Stock) => {
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