import axios from "axios"

class Stocks {
    static async getAllStock(){
        try {
            const data = await axios.get(process.env.REACT_APP_STOCK_BASE_URL as string)
            return data
        } catch (error) {
            return error
        }
    }
}

export default Stocks