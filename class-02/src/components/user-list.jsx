function UserList() {
    const users = ["Agustín", "Lorena", "Carlitos", "Marcela", "Adrián"];
    return (
        <ul class="user-list">
            {users.map(user => (
                <li key={user}>{user}</li>
            ))}
        </ul>
    )
}

export default UserList