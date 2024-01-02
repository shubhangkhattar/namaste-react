import React from "react";
import { ReactDOM } from "react-dom/client";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  componentWillUnmount() {
    console.log("Component WIll unmount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Shubahng (function)"} location={"Montreal (function)"} /> */}
        <UserClass name={"Shubahng (class)"} location={"Montreal (class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       {/* <User name={"Shubahng (function)"} location={"Montreal (function)"} /> */}
//       <UserClass name={"Shubahng (class)"} location={"Montreal (class)"} />
//     </div>
//   );
// };

export default About;
