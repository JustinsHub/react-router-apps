export interface StockI {
    id: number
    stockName: string
    stockTicker: string
    price: number
    details: string
    owned: number
}

export interface StockContextI {
    getStocks: any
    buyingPower: number
    handlePurchaseStock: any
    handleSellStock: any
}