import React from 'react';
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import Main from "../pages/Main/Main";


const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route index element={<Main />}/>
    </Route>
));

const AppRouter = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default AppRouter;