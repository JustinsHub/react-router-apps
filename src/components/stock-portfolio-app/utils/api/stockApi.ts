import axios from "axios"
import { StockI } from "../../../../interfaces/stock.interface"

class StocksAPI {
    static async getAllStock(){
        try {
            const data = await axios.get(`${process.env.REACT_APP_STOCK_BASE_URL}/stocks`)
            return data
        } catch (error) {
            return error
        }
    }

    static async purchaseStock(stocks: StockI) {
        try {
            const data = await axios.post(`${process.env.REACT_APP_STOCK_BASE_URL}/stocks`, stocks)
            return data
        } catch (error) {
            return error
        }
    }
}

export default StocksAPI