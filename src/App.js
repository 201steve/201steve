import React from "react";
import User from "./user";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: "kimkim1", pwd: "123456", name: "Kim" },
        { id: "leelee2", pwd: "234567", name: "Lee" },
        { id: "baebae3", pwd: "345678", name: "Bae" },
        { id: "parkpark4", pwd: "456789", name: "Park" },
      ],
    };
  }

  render() {
    const newUsers = this.state.users.map((user, index) => {
      return <User key={index} info={user} />;
    });
    return (
      <div className="App">
        <input />
        {newUsers}
        <button>게시</button>
      </div>
    );
  }
}

export default App;
