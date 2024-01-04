import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      avatar_url: "//",
      userInfo: {
        name: "Dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/" + "shubhangkhattar"
    );
    const json = await data.json();
    // console.log(json);

    this,
      this.setState({
        userInfo: json,
      });
  }

  componentDidUpdate() {
    // console.log("component did mount");
  }

  render() {
    // const { name, location } = this.props;
    const { count, count2 } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count = {count2}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
            this.setState({ count2: count2 + 1 });
          }}
        >
          Count Increase
        </button>
        <br />
        <img src={avatar_url}></img>
        <h2> Name: {name}</h2>
        <h3>This is Shubhang</h3>
        <h3>Location: {location}</h3>
        <h4>shubhangkhattar@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
