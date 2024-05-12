import { useReducer, useState } from "react";
import { usersReducers } from "../reducers/usersReducers";
import Swal from "sweetalert2";

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

        Swal.fire(
            (user.id === 0)? 
            "Usuario Creado" :
             "Usuario Actualizado",
            (user.id === 0)? 
            "El usuario ha sido creado con exito!":
            "El usuario ha sido actualizado con exito!",
            "success"
          );
    }

    const handlerRemoveUser = (id) => {

        Swal.fire({
            title: "¿Estas seguro?",
            text: "No podras revertir esta acción",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar!"
          }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: 'removeUser',
                    payload: id,
                });

              Swal.fire({
                title: "Usuario Eliminado!",
                text: "El usuario ha sido eliminado con exito!",
                icon: "success"
              });
            }
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