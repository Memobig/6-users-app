import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UserPages";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";

export const UserRoutes = ({ login, handlerLogout }) => {
    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectForm,
        handlerOpenForm,
        handlerCloseForm,
    } = useUsers();

    return (
        <>
            <Navbar handlerLogout={handlerLogout}
                login={login} />
            <Routes>
                <Route path="users" element={<UsersPage
                    users={users}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    visibleForm={visibleForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectForm={handlerUserSelectForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                />} />
                <Route path="/" element={<Navigate to="/users" />} />
                
                <Route path="users/register" element={<RegisterPage
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm} />} />

                <Route path="users/edit/:id" element={<RegisterPage
                    users={users}
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm} />} />
            </Routes>
        </>
    );
}