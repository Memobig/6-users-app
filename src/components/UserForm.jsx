import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ({userSelected, handlerCloseForm}) => {

    const { handlerAddUser, initialUserForm, errors} =  useContext(UserContext);

    const [userForm, setUserForm] = useState(initialUserForm);
    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: ''
        })
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        //console.log(target.value);
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

/*         if (!username || (!password && id === 0) || !email) {
            Swal.fire({
                title: "Error de validación!",
                text: "Debe completar los campos del formulario",
                icon: "error"
            });
            return;
        }
        if (!email.includes('@')) {
            Swal.fire({
                title: "Error de validación!",
                text: "El email debe ser valido, incluir un @!",
                icon: "error"
            });
            return;
        } */
        
        handlerAddUser(userForm);
        console.log(userForm);

    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />
                <p className="text-danger">{errors?.username}</p>

            {id > 0 || <input
                className="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} />}
                <p className="text-danger">{errors?.password}</p>

            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
                <p className="text-danger">{errors?.email}</p>
            <input
                type="hidden"
                name="id"
                value={id} />
            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>
            {!handlerCloseForm || <button className="btn btn-primary mx-2"
                type="button" onClick={handlerCloseForm}>
                Cerrar
            </button>}

        </form>
    );
}