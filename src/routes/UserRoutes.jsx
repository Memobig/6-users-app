import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UserPages";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";
import { UserProvider } from "../context/UserProvider";

export const UserRoutes = ({ login, handlerLogout }) => {


    return (
        <>
            <UserProvider>
                <Navbar handlerLogout={handlerLogout}
                    login={login} />
                <Routes>
                    <Route path="users" element={<UsersPage/>} />
                    <Route path="/" element={<Navigate to="/users" />} />

                    <Route path="users/register" element={<RegisterPage/>} />

                    <Route path="users/edit/:id" element={<RegisterPage/>} />
                </Routes>
            </UserProvider>
        </>
    );
}