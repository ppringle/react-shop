import React from "react";
import {NavLink, Outlet} from "react-router-dom";

export interface IUser {
    id: number;
    name: string;
    isAdmin: boolean;
}

export const adminUsers: IUser[] = [
    {
        id: 1,
        name: "Fred",
        isAdmin: true
    },
    {
        id: 2,
        name: "Bob",
        isAdmin: false
    },
    {
        id: 3,
        name: "Jane",
        isAdmin: true
    }
]

const AdminUsers: React.FC = () => {
    return (
        <>
            <div className="page-container">
                <ul className="admin-sections">
                    {
                        adminUsers.map(adminUser => {
                            return (
                                <li key={adminUser.id}>
                                    <NavLink to={`/admin/users/${adminUser.id}`} className={({isActive}) => {
                                        return isActive ? "admin-link-active" : "admin-link";
                                    }}>
                                        {adminUser.name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Outlet/>
        </>
    )
}

export default AdminUsers;