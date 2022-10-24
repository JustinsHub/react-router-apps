import { createContext, useEffect, useState } from "react"
import StocksAPI from "../components/stock-portfolio-app/utils/api/stockApi"
import { GlobalContextI } from "../interfaces/global.interface"
import { StockI, StockContextI } from "../interfaces/stock.interface"


const StockDefaultValues: StockContextI = {
    getStocks: []
}

const StockContext = createContext(StockDefaultValues)

const StockContextWrapper = ({children}: GlobalContextI) => {
    const [getStocks, setGetStocks] = useState([])

    useEffect(() => {
        const getStocksData = async() => {
            try {
                const { data }: StockI[] | any = await StocksAPI.getAllStock()
                setGetStocks(data)
            } catch (error) {
                return error
            }
        }
        getStocksData()
    }, [])

  return (
      <StockContext.Provider value={{ getStocks }}>
          {children}
      </StockContext.Provider>
  )
}

export {
    StockContext,
    StockContextWrapper
}
