const User = ({ name, contact }) => {
    return (
        <div className="user-info">
            <h1>Count : 0</h1>
            <h2>Name: {name}</h2>
            <h4>Contact: {contact}</h4>
        </div>
    )
}

export default User;