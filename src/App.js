import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from"./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/context/CartContext';
import Checkout from './components/checkout/Checkout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <div className="container-fluid containerCard">
          <div className='row'>
            <Routes>

              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />


            </Routes>

          </div>
        </div>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;