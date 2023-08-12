import * as React from "react";
import {NavLink, Outlet} from "react-router-dom";
import "./AdminPage.css";

const AdminPage: React.FC = () => {
    return (
        <>
            <div className="page-container">
                <h1>Admin Panel</h1>
                <ul className="admin-sections">
                    <li key="Users">
                        <NavLink to="/admin/users" className={({isActive}) => {
                            return isActive ? "admin-link-active" : "admin-link";
                        }}>
                            Users
                        </NavLink>
                    </li>
                    <li key="Products">
                        <NavLink to="/admin/products" className={({isActive}) => {
                            return isActive ? "admin-link-active" : "admin-link";
                        }}>Products
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </>
    )
}

export default AdminPage;
