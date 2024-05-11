import { useEffect, useState } from "react";

const initialUserForm = {
    username: '',
    password: '',
    email: '',
}

export const UserForm = ({ handlerAddUser, userSelected }) => {

    const [userForm, setUserForm] = useState(initialUserForm);
    const { username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected
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

        if (!username || !password || !email) {
            alert('Debe completar los campos del formulario');
            return;
        }

        handlerAddUser(userForm);
        console.log(userForm);

        // guardar el userform en el listado de usuarios
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
            <input
                className="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} />
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <button
                className="btn btn-primary"
                type="submit">Crear</button>
        </form>
    );
}