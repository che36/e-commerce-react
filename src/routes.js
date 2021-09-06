import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import Contatos from './pages/contato';

const MainRoutes = () => {
    return (
        <Routes>
            <Route>
                path="/"
                element={<HomePage />}
            </Route>
            <Route>
                path="contato"
                element={<Contatos />}
            </Route>
        </Routes>
    )
}
export default MainRoutes;