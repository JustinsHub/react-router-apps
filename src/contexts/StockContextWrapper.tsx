import { createContext, useEffect, useState } from "react"
import StocksAPI from "../components/stock-portfolio-app/utils/api/stockApi"
import { GlobalContextI } from "../interfaces/global.interface"
import { StockI, StockContextI } from "../interfaces/stock.interface"


const StockDefaultValues: StockContextI = {
    getStocks: [],
    buyingPower: 5000,
    handlePurchaseStock: Function, 
    handleSellStock: Function
}

const StockContext = createContext(StockDefaultValues)

const StockContextWrapper = ({children}: GlobalContextI) => {

    //create count from here and pass it down and test if its global count and stays without refreshing
    //have cash remaining as well default to something like 3000?
    const [buyingPower, setBuyingPower] = useState(5000)

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

    const handlePurchaseStock = async(stocks: StockI) => {
        try {
            // const stockPurchase = await StocksAPI.purchaseStock(stocks)
            // return stockPurchase
        } catch (error) {
            return error
        }
    }
    
    const handleSellStock = async() => {
        
    }

  return (
      <StockContext.Provider value={{ getStocks, buyingPower, handlePurchaseStock, handleSellStock }}>
          {children}
      </StockContext.Provider>
  )
}

export {
    StockContext,
    StockContextWrapper
}
