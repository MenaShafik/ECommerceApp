import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import NavbarLogin from "./Components/Utility/NavbarLogin";
import Footer from "./Components/Utility/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import Register from "./Pages/Auth/Register";
import AllCategory from "./Pages/Category/AllCategory";
import AllBrandsPage from "./Pages/Brands/AllBrandsPage";
import ShopProductPage from "./Pages/Products/ShopProductPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import ChoosePayment from "./Components/CheckOut/ChoosePayment";
import AdminProductPage from "./Pages/Admin/AdminProductPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Pages/Admin/AdminAddProductsPage";
import UserAllProductPage from "./Pages/Users/UserAllProductPage";
import UserFavoriteProductPage from "./Pages/Users/UserFavoriteProductPage";
import UserAllAdressPage from "./Pages/Users/UserAllAdressPage";
import UserProfilePage from "./Pages/Users/UserProfilePage";
import AdminEditProductPage from "./Pages/Admin/AdminEditProductPage";
import ForgetPasswordPage from "./Pages/Auth/ForgetPasswordPage";

function App() {
  return (
    <>
      <div>
        <NavbarLogin />
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/AllCategory" element={<AllCategory />} />
            <Route path="/allbrands" element={<AllBrandsPage />} />
            <Route path="/products" element={<ShopProductPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order/paymethoud" element={<ChoosePayment />} />
            <Route path="/admin/allproducts" element={<AdminProductPage />} />
            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
            <Route
              path="/admin/orders/:id"
              element={<AdminOrderDetailsPage />}
            />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route
              path="/admin/addcategory"
              element={<AdminAddCategoryPage />}
            />
             <Route
              path="/admin/addsubcategory"
              element={<AdminAddSubCategoryPage />}
            />        
                     <Route
              path="/admin/addproduct"
              element={<AdminAddProductsPage />}
            />   
    
    <Route
              path="user/allorders"
              element={<UserAllProductPage />}
            />   
         <Route
              path="/user/favoriteproducts"
              element={<UserFavoriteProductPage />}
            />  
                     <Route
              path="/user/addresses"
              element={<UserAllAdressPage />}
            />   
                                 <Route path="/user/profile"
              element={<UserProfilePage />}
            />      
            <Route path="/admin/editProduct/:id"
              element={<AdminEditProductPage/>}
            />  
                        <Route path="/user/forgetPassword"
              element={<ForgetPasswordPage/>}
            /> 
             
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
