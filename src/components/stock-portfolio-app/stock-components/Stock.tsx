import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { StockContext } from '../../../contexts/StockContextWrapper'
import { StockI } from '../../../interfaces/stock.interface'

const Stock:React.FC = () => {
    const { getStocks } = useContext(StockContext)
    const { stockTicker } = useParams()
    //filter based on params

    console.log(getStocks)
    

  return (
    <div>
        {getStocks
        .filter((stock: StockI) => stock.stockTicker === stockTicker)
        .map((stock:StockI) => {
            return (
            <div key={stock.id}>
                {stock.stockName}
            </div>
            )
        })
        }
    </div>
  )
}

export default Stock