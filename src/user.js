import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="user_info">
        userinfo:{this.props.userinfo}
        <br />
      </div>
    );
  }
}

export default User;
