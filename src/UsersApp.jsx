import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducers } from "./reducers/usersReducers";

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: 123456,
        email: 'pepe@gmail.com',
    },
];

const initialUserForm = {
    username: '',
    password: '',
    email: '',
}

export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducers, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);

    const handlerAddUser = (user) => {
        dispatch({
            type: 'addUser',
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

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">

                <div className="col">
                    <UserForm
                        handlerAddUser={handlerAddUser}
                        initialUserForm={initialUserForm}
                        userSelected={userSelected}
                    />
                </div>
                <div className="col">
                    {users.length === 0
                        ? <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                        :
                        <UsersList
                            users={users}
                            handlerRemoveUser={handlerRemoveUser} 
                            handlerUserSelectForm={handlerUserSelectForm}/>

                    }
                </div>
            </div>
        </div>
    );
}