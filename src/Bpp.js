import React, { Component } from "react";

export class Bpp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      inputvalue: "",
    };
  }

  inputHandler = (e) => {
    this.setState({
      inputvalue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let commentInfo = {
      id: 1,
      commentText: this.state.inputvalue,
    };
    this.setState((prevState) => {
      return { ...prevState, comments: [...prevState.comments, commentInfo] };
      // 현재 스테이트에 코멘트 : 새로운 밸류 (코멘트 배열 내에 코멘트 정보를 컨캣)를 어사인
    });
  };

  render() {
    const { handleSubmit } = this;
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <input onChange={this.inputHandler} />
            <button>게시</button>
          </div>
        </form>
        <div>
          {this.state.comments.map((elem) => {
            return <span key={elem.id + 1}>{elem.commentText}</span>;
          })}
        </div>
      </>
    );
  }
}

export default Bpp;
