import { useState } from 'react'
import ProductList from './pages/ProductList'
import Header from './components/Header'
import Footer from './components/Footer'
import Singleview from './pages/Singleview'
import { Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/view/:id' element={<Singleview/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
