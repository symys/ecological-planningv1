import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainTitles from './components/MainTitles'
import LandingPage from "./components/LandingPage";
import SubTitlePage from "./components/SubTitlePage";

function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="mainTitles" element={<MainTitles />} />
        <Route exact path="subTitlePage" element={<SubTitlePage />} />
        {/*  <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/allproducts" element={<AllProducts/>}/>
      <Route exact path='/login' element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/thankyou' element={<ThankYouPage/>} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/order' element={<OrderPage/>} />
      <Route path='/favorites' element={<Favorites/>} /> */}
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
