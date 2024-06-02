import './App.css'
import Home from '../src/Pages/Home'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './Pages/Cart'

 


function App() {
 

  return (
    <>

        <BrowserRouter>
          <Routes>
              <Route path='/' element={
                <div>
                  <Home/>
                </div>
              }/>
              <Route path='/cart' element={
                <div>
                  <Navbar />
                  <Cart/>
                </div>
              } />
          </Routes>
        </BrowserRouter>
    

    </>
  )
}

export default App
