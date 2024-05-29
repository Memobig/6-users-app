import { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";

export const UsersList = () => {

    const { users } = useContext(UserContext);
    return (
        <table className="table table-stripped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>update2</th>
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
                       />
                    ))
                }
            </tbody>
        </table>
    );
}