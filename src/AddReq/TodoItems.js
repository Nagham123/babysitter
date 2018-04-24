import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {

  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }


  createTasks(item) {
    var key = item.key
    var text = item.text
    var del = () => this.props.delete(key);
    return <li key={key}>{text}<button onClick={del}>x</button></li>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
   
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
          <li>Need a baby sitter for a 4 years old baby<button>x</button></li>
          <li>Need a baby sitter for a 4 years old baby<button>x</button></li>
          <li>Need a baby sitter for a 4 years old baby<button>x</button></li>
          <li>Need a baby sitter for a 4 years old baby<button>x</button></li>
          <li>Need a baby sitter for a 4 years old baby<button>x</button></li>
          <li>Need a baby sitter for a 4 years old baby<button>x</button></li>
        </FlipMove>
      </ul>
    );
  }
};

export default TodoItems;