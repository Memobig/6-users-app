import { UserRow } from "./UserRow";

export const UsersList = ({ users = [] , handlerRemoveUser,handlerUserSelectForm}) => {

    return (
        <table className="table table-stripped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({id, username, email}) => (
                       <UserRow 
                       id={id} 
                       username={username} 
                       email={email} 
                       key={id}
                       handlerRemoveUser={handlerRemoveUser}
                       handlerUserSelectForm={handlerUserSelectForm}/>
                    ))
                }
            </tbody>
        </table>
    );
}