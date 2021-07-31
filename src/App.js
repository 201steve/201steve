import React, { Component } from "react";
import User from "./user";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfomation: [],
      id: 1,
      userName: "test",
      value: "",
    };
  }
  getValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  userInfo = () => {
    const { userInfomation, id, userName, value } = this.state;
    const obj = {
      id: id,
      userName: userName,
      value: value,
    };
    const newUserInfo = userInfomation.concat(obj);
    this.setState({
      id: id + 1,
      userName: userName + 1,
      userInfomation: newUserInfo,
      value: "",
    });
  };

  pressEnter = (e) => {
    if (e.key === "Enter") {
      this.userInfo();
    }
  };

  render() {
    const { userInfomation } = this.state;
    console.log(userInfomation);

    const newUserInfo = userInfomation.map((user) => (
      <div key={user.id}>
        <div>
          <b>{user.userName}</b>
          {user.value}
        </div>
      </div>
    ));
    return (
      <div>
        <input onChange={this.getValue} onKeyPress={this.pressEnter} />
        <button onClick={this.userInfo}>게시</button>
        <User
          userName={this.state.userName}
          reply={this.state.value}
          id={this.state.id}
          userinfo={newUserInfo}
        />
      </div>
    );
  }
}

export default App;
