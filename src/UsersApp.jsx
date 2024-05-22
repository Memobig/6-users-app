import { useReducer, useState } from "react";
import { LoginPages } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UserPages";
import { loginReducer } from "./auth/reducers/loginReducer";
import Swal from "sweetalert2";

const initialLogin = {
    isAuth: false,
    user: undefined,
}

export const UsersApp = () => {

    const [login, dispatch] = useReducer(loginReducer,initialLogin);
    const handlerLogin = ({username, password}) => {
        if(username ==='admin' && password === '12345'){
            const user = {username: 'admin'};
            dispatch({
                type: 'login',
                payload: user,
            })
        } else {
            Swal.fire("Error login",'Username o password invalidos', 'error');
        }
    }

    return (
        <>
        {login.isAuth ? <UsersPage/> : <LoginPages handlerLogin={handlerLogin}/>}
        </>
    );
}