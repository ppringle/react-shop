import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {adminUsers, IUser} from "./AdminUsers.tsx";

const AdminUser: React.FC = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            const userId: number = parseInt(params.id);
            const foundUser = adminUsers.filter(user => {
                return userId === user.id
            })[0];
            setUser(foundUser);
        }
    });

    return (
        user && <div className="page-container">
            <div>
                <b>Id:</b>&nbsp;{user.id}
            </div>
            <div>
                <b>Is Admin:</b>&nbsp;{`${user.isAdmin}`}
            </div>
        </div>
    )


}

export default AdminUser;