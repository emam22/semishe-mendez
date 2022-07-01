import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import ItemDetailContainer from '../itemDetail/ItemDetailContainer';
import ItemListContainer from '../ItemList/ItemListContainer';
import { Cart } from '../Navbar/CartWidget';
import { Navbar } from '../Navbar/Navbar';
import { Error } from '../Error/Error';
import Nosotros from '../Nosotros/Nosotros.js';
import { CartProvider } from '../Context/CartContext';
import { CartItem } from '../Context/CartItem';

export const AppRouting = () => {
         
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar>
                <Cart/>
                </Navbar>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/nosotros' element={<Nosotros/>}/>
                    <Route path='/*' element={<Error/>}/>
                    <Route path='/item/undefined' element={<Error/>}/>
                    <Route path='/cart' element={<CartItem/>}/>
                </Routes>        
            </BrowserRouter>
        </CartProvider>
    );
};
