import React, { Component } from "react";

class Item extends Component {
  state = {
    listitems: ['List Item 1','List Item 2', 'List Item 3']
  };

  render() {
    let liArr = new Array();
    for (var i = 0; i < this.state.listitems.length; i++)
      liArr.push(<li className="list-group-item list-group-item-primary">{this.state.listitems[i]}</li>);
    return (
      <React.Fragment>
      <ul className="list-group">
        {liArr}
        </ul>

      </React.Fragment>
    );
  }
}

export default Item;
