import React from "react";
import { EventEmitter } from "events";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: this.props.todoItem,
      onClick: false
    };
  }

  handleOnChange = event => {
    this.setState({
      todoItem: { id: this.state.todoItem.id, title: event.target.value }
    });
  };

  render() {
    if (this.state.onClick) {
      return (
        <div>
          ID:{this.state.todoItem.id}
          <br />
          <input
            value={this.state.todoItem.title}
            onChange={event => {
              this.handleOnChange(event);
            }}
          />
          <div
            onClick={() => {
              this.setState(state => ({
                todoItem: {
                  id: state.todoItem.id,
                  title: state.todoItem.title
                },
                onClick: false
              }));
              this.props.handleOnClick(this.state.todoItem);
              this.setState({ onClick: false });
            }}
          >
            保存する
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div onClick={() => this.setState({ onClick: true })}>
            ID:{this.state.todoItem.id}
            <br />
            Title:{this.state.todoItem.title}
          </div>
          <br />
        </React.Fragment>
      );
    }
  }
}

export default TodoItem;
