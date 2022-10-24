import React from 'react'
import { Route, Routes } from 'react-router'
import CounterApp from '../components/counter-app/CounterApp'
import Stock from '../components/stock-portfolio-app/stock-components/Stock'
import StockMarket from '../components/stock-portfolio-app/stock-components/StockMarket'
import StockPortfolio from '../components/stock-portfolio-app/stock-components/StockPortfolio'
import { StockContextWrapper } from '../contexts/StockContextWrapper'
import HomePage from '../layout/HomePage'

const MainRoutes:React.FC = () => {

  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/counter' element={<CounterApp/>}/>
        <Route 
        path='/stock-market' 
        element={
            <StockContextWrapper>
              <StockMarket/>
            </StockContextWrapper>
        }/>

        <Route 
        path='/stock-market/:stockTicker' 
        element={
            <StockContextWrapper>
              <Stock/>
            </StockContextWrapper>
        }/>

        <Route 
        path='/stock-portfolio' 
        element={
            <StockContextWrapper>
              <StockPortfolio/>
            </StockContextWrapper>
        }/>

    </Routes>
  )
}

export default MainRoutes