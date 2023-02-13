import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Collection from './components/pages/Collection';
import Products from './components/pages/Products';
import ProductDetail from './components/pages/ProductDetail';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Tables from './components/pages/Tables';
import Seating from './components/pages/Seating';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={ <Home/> } />
        <Route path='/collection' element={ <Collection/> } />
        <Route path='/products' element={ <Products/> } />
        <Route path='/products/:productId' element={<ProductDetail /> } />
        <Route path='/contact-us' element={ <ContactUs/> } />
        <Route path='/tables' element={ <Tables/> } />
        <Route path='/Seating' element={ <Seating/> } />
      </Routes>
    </Router>
  );
}

export default App;
