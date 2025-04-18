import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './Create'
import View from './View'
import SingUp from './SingUp'
import Login from './Login'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/' element={<SingUp/>}></Route>
    <Route path='/add' element={<Create/>}></Route>
    <Route path='/view' element={<View/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App