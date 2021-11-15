import logo from './logo.svg';
import './App.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Home from './pages/HomePage/Home' 
import Services from './pages/Services/Services' 
import Product from './pages/Product/Product' 
import SignUp from './pages/SignUp/Signup' 
import {  Navbar  } from './components';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
     <Navbar/>
     <Routes>
       <Route path='/' exact element={<Home/>}/>
       <Route path='/services' exact element={<Services/>}/>
       <Route path='/product' exact element={<Product/>}/>
       <Route path='/signup' exact element={<SignUp/>}/>
     </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
