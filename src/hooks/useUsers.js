import { useReducer, useState } from "react";
import { usersReducers } from "../reducers/usersReducers";

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: 123456,
        email: 'pepe@gmail.com',
    },
];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducers, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);

    const handlerAddUser = (user) => {

        let type;

        if(user.id === 0){
            type = 'addUser';
        } else {
            type = 'updateUser'
        }
        dispatch({
            type: type,
            payload: user,
        });
    }

    const handlerRemoveUser = (id) => {
        dispatch({
            type: 'removeUser',
            payload: id,
        });
    }

    const handlerUserSelectForm = (user) => {
        //console.log(user);
        setUserSelected({...user})
    }

    return {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectForm,
    }

}