import * as React from "react";
import {BrowserRouter as Router, Navigate, Routes, Route} from "react-router-dom";
import ProductsPage from "./ProductsPage.tsx";
import Header from "./Header.tsx";
import ProductPage from "./ProductPage.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
import LoginPage from "./LoginPage.tsx";
import AdminProducts from "./admin/AdminProducts.tsx";
import AdminUsers from "./admin/AdminUsers.tsx";
import AdminUser from "./admin/AdminUser.tsx";
import {Suspense} from "react";

const AdminPage = React.lazy(() => import("./admin/AdminPage.tsx"));

const AppRoutes: React.FC = () => {

    const [loggedIn] = React.useState(true);

    return (
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/products" replace/>}/>
                    <Route path="/login" Component={LoginPage}/>
                    <Route path="/products" Component={ProductsPage}/>
                    <Route path="/products/:id" Component={ProductPage}/>
                    <Route path="/admin" element={loggedIn ?
                        (
                            <Suspense
                                fallback={<div className="page-container">Loading....</div>}>
                                <AdminPage/>
                            </Suspense>
                        ) : <Navigate to="/login"/>}>
                        <Route path="users" element={<AdminUsers/>}>
                            <Route path=":id" element={<AdminUser/>}/>
                        </Route>
                        <Route path="products" element={<AdminProducts/>}/>
                    </Route>
                    <Route path="*" Component={NotFoundPage}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default AppRoutes;
