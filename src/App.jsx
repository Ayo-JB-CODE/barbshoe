import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Shop' element={<Shop />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default App;
