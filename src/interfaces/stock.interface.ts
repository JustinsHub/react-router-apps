export interface StockI {
    stockName: string
    stockTicker: string
    price: number
    id: number
}

export interface StockContextI {
    getStocks: any
}