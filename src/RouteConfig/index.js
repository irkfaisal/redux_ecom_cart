import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import HeaderComponents from '../Components/Header';
import HomePageContainer from '../Container/Home';
import ContactPageContainer from '../Container/Contact';
import AboutPageContainer from '../Container/About';
import CartPageContainer from '../Container/Cart';
import ProductsPageContainer from '../Container/Products';
import SingleProductContainer from '../Container/SingleProduct';
import SearchContainerPage from '../Container/Search';
import LoginContainer from '../Container/Login';
import FooterComponent from '../Component/Footer';
import UserContainer from '../Container/User';
const RouteConfigComponents = ()=>{
    return (
        <>
            <BrowserRouter>
                <HeaderComponents />
                <Routes>
                    <Route path="/" element={<HomePageContainer />} />
                    <Route path="/about" element={<AboutPageContainer />} />
                    <Route path="/contact" element={<ContactPageContainer />} />
                    <Route path="/cart" element={<CartPageContainer />} />
                    <Route path="/product/:id" element={<SingleProductContainer />} />
                    <Route path="/products/:catId" element={<ProductsPageContainer />} />
                    <Route path="/search/:searchKey" element={<SearchContainerPage />} />
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path='/user' element={<UserContainer />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}


export default RouteConfigComponents;