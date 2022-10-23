import React from 'react'
import { Route, Routes } from 'react-router'
import CounterApp from '../components/counter-app/CounterApp'
import HomePage from '../layout/HomePage'

const MainRoutes:React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/counter' element={<CounterApp/>}/>
    </Routes>
  )
}

export default MainRoutes