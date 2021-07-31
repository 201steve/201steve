import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="user_info">
        ID: {this.props.info.id} <br />
        PASSWORD: {this.props.info.pwd} <br />
        NAME: {this.props.info.name} <br />
        <br />
      </div>
    );
  }
}

export default User;
