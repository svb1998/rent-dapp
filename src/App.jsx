import './App.scss';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Productos from './pages/Productos/Productos';
import DetallesProducto from './pages/DetallesProducto/DetallesProducto';

function App() {
  return (
    <div className="App">
      <Router>

        <nav className='nav-container'>
          <Link className='link' to='/'><h1 >RentMe</h1></Link>
          <div className='nav-links'>
            <Link className='link' to='/products'>Productos</Link>
            <Link className='link' to='/product-details'>Detalles Prod (Prov)</Link>
            <Link className='link' to='/about'>Sobre nosotros</Link>
            <Link className='link' to='/contact'>Contacto</Link>
          </div>
          <button className='normal-button'>Connect Wallet</button>
        </nav>





        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Productos />} />
          <Route path="/product-details" element={<DetallesProducto />} />
        </Routes >

        <footer className="footer-container">
          <h3>Footer</h3>
        </footer>
      </Router>
    </div >
  );
}

export default App;
