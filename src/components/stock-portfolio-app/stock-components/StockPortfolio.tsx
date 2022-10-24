import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { StockContext } from '../../../contexts/StockContextWrapper'
import { StockI } from '../../../interfaces/stock.interface'
import Stocks from './Stocks'

const StockPortfolio:React.FC = () => {
    //stock market
        // - GET method for stocks
            // - render stocks on page based on Stocks component...? (done)
                // - when user clicks on rendered stocks, redirects them to that specific stock
        
        // - POST method for buying stocks
            // - have an input on how many stock a user wants to buy. Users can manually input, +, -

    //stock portfolio
        // GET method for getting users stocks
            // - render stocks based on Users OWNED stocks... 
            // - have a redirect page to the specific stock...
             
        // - POST method for buying stocks
                // - have an input on how many stock a user wants to buy. Users can manually input, +, -

    //OPTIONAL feature
        // - Create an input to search specific stock
        // - When user is typing/searching it requests stock closest to that letter
        // - Add debouncing to search input and throttling on submitting
        
            //render owned stocks by if you have more than 0 logic of purchased stock... put in an array?
            //conditional logic on if you have a stock over 0 then render that stock... with + - input on purchasing
        
            //ownedStocks object key[value] - purchase share
            //if sold then I get money back + to buyingPower

    const { getStocks, buyingPower, handlePurchaseStock, handleSellStock } = useContext(StockContext)
    const navigate = useNavigate()

    const [stocksOwned, setStocksOwned] = useState([])
    const [stockInput, setStockInput] = useState(0)
    
    useEffect(() => {
        setStocksOwned(getStocks)
    }, [getStocks])


    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStockInput(+e.target.value)
    }

    const handlePurchase = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    
  return (
    <section className="StockMarket__global-container">
        <h1>Your Portfolio</h1>
        <div>
            Buying Power: ${buyingPower}
        </div>

        <h4 style={{textDecoration: 'underline'}}>
            Stocks Owned
        </h4>

        <div>
        {stocksOwned
        .filter((stock:StockI) => stock.owned)
        .map((stock:StockI) => {
            return (
                <div key={stock.id}>
                    <Stocks stock={stock}/>
                </div>
            )
        })
        }
        </div>
        <div style={{marginTop:"1rem"}}>
            <button className="StockMarket__global-btn" onClick={() => navigate(-1)}>Back</button>
        </div>
    </section>
  )
}

export default StockPortfolio