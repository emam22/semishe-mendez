import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import ItemDetailContainer from '../itemDetail/ItemDetailContainer';
import ItemListContainer from '../ItemList/ItemListContainer';
import { CartWidget } from '../Navbar/CartWidget';
import { Navbar } from '../Navbar/Navbar';
import { Error } from '../Error/Error';
import Nosotros from '../Nosotros/Nosotros.js';
import { CartProvider } from '../Context/CartContext';
import { CartDetails } from '../Cart/CartDetails';
import { Footer } from '../Footer/Footer';

export const AppRouting = () => {
         
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar>
                <CartWidget/>
                </Navbar>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:nanoId' element={<ItemDetailContainer/>}/>
                    <Route path='/nosotros' element={<Nosotros/>}/>
                    <Route path='/cart' element={<CartDetails />}/>

                    <Route path='/item/undefined' element={<Error/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
                <Footer></Footer> 
            </BrowserRouter>
        </CartProvider>
    );
};
