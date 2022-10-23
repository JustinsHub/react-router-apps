import axios from "axios"

class StocksAPI {
    static async getAllStock(){
        try {
            const data = await axios.get(`${process.env.REACT_APP_STOCK_BASE_URL}/stocks`)
            return data
        } catch (error) {
            return error
        }
    }
}

export default StocksAPI