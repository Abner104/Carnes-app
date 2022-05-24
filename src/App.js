import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Info from './components/Info';
import Product from './components/Product';
import Contacto from './components/Contacto';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';




function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Inicio/>} />
          <Route path='info' element={<Info/>} />
          <Route path='product' element={<Product/>} />
          <Route to="id:" element={<ProductDetail/>} />
          <Route path='contacto' element={<Contacto/>} />
          <Route path='*' element={ <Navigate replace to="/" />  } />

        </Route>
      </Routes>

   

    </div >




  );
}
export default App;

