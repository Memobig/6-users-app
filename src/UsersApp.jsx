import { useReducer, useState } from "react";
import { LoginPages } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UserPages"
import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";

export const UsersApp = () => {

    const {login, handlerLogin, handlerLogout} = useAuth();    

    return (
        <>
            {login.isAuth ?
                (
                    <>
                        <Navbar handlerLogout={handlerLogout} 
                        login={login}/>
                        <UsersPage />
                    </>
                )

                : <LoginPages handlerLogin={handlerLogin} />}
        </>
    );
}