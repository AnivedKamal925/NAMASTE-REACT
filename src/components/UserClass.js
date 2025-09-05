import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "default",
                location: "defaul",
                avatar_url: "https://dummy-photo.com",
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/AnivedKamal925");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,


        })
    }

    render() {

        const { name, location, avatar_url } = this.state.userInfo;

        return (
            < div className="user-info" >
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h4>Contact: {location}</h4>
            </div >
        )
    }
}

export default UserClass;