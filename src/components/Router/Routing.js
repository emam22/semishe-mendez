import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import ItemDetailContainer from '../itemDetail/ItemDetailContainer';
import ItemListContainer from '../ItemList/ItemListContainer';
import { Cart } from '../Navbar/CartWidget';
import { Navbar } from '../Navbar/Navbar';
import { Error } from '../Error/Error';
import Nosotros from '../Nosotros/Nosotros.js';

export const AppRouting = () => {
         
    return (
        <BrowserRouter>
            <Navbar>
            <Cart/>
            </Navbar>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:id' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/*' element={<Error/>}/>
            </Routes>        
        </BrowserRouter>
    );
};
