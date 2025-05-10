
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import { LoginSignup } from './Pages/LoginSignup';
import { ShopCategory } from './Pages/ShopCategory';
import Product from './Pages/Product';
import  Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Footer from '../src/Components/Footer/footer'
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from './Components/Assests/banner_kids.png'
import ShopContextProvider from './Context/ShopContext';

function App() {
  return (
    <div >
       <ShopContextProvider>  
      <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/Womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory  banner={kid_banner}category="kid"/>}/>
      
          <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
       
     </Routes>
    <Footer/>
      
      </BrowserRouter>
             
</ShopContextProvider> 
     
    </div>
  );
}

export default App;
