import { useReducer, useState } from "react";
import { usersReducers } from "../reducers/usersReducers";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducers, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const navigate = useNavigate();

    const getUsers = async () => {
        const result = await findAll();
        console.log(result);
        dispatch({
            type: 'loadingUsers',
            payload: result.data,
        });
    }

    const handlerAddUser = async (user) => {
        let response;
        if (user.id === 0) {
            response = await save(user);
        } else {
            response = await update(user);
        }

        dispatch({
            type: (user.id === 0)?'addUser':'updateUser',
            payload: response.data,
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
          setVisibleForm(false);
          setUserSelected(initialUserForm);
          navigate('/users');
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
                remove(id);
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
        setVisibleForm(true);
        setUserSelected({...user})
    }
     const handlerOpenForm = () => {
        setVisibleForm(true);
     }
     const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm)
     }

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    }

}