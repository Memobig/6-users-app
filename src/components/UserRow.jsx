export const UserRow = ({handlerUserSelectForm,handlerRemoveUser,id, username, email, password}) => {

    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={()=>handlerUserSelectForm({
                        id,
                        username,
                        email,
                        password
                    })}>
                    update
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={()=>handlerRemoveUser(id)}>
                    remove
                </button>
            </td>
        </tr>
    );
}