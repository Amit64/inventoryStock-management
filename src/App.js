import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import AddItem from "./components/AddItem/AddItem";
import Home from "./components/Home/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login/Login";
import SignUp from "./components/Login/SignUp/SignUp";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import PageNotFound from "./components/shared/PageNotFound/PageNotFound";
import UpdateStock from "./components/UpdateStock/UpdateStock";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<RequireAuth>
          <Inventory/>
        </RequireAuth>}></Route>
        <Route path="/manageinventory" element={<RequireAuth>
          <ManageInventory/>
        </RequireAuth>}></Route>
        <Route path="/additem" element={<RequireAuth>
          <AddItem/>
        </RequireAuth>}></Route>
        <Route path="/product/:productId" element={<RequireAuth>
          <UpdateStock/>
        </RequireAuth>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
