import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";


function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Products/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
   </Routes>

   </>
  );
}

export default App;
