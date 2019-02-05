import React, { Component } from "react";
import { Link } from "react-router-dom";

class CocktailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    const matched = this.props.matches;

    return (
      <React.Fragment>
        {this.props.matches.length > 0 && (
          <div className="p-1 m-1 card bg-light">
            <div className="card title">
              {this.props.matches.map(item => (
                <div className="text-dark m-2">{item.title}</div>
              ))}
            </div>

            <input
              className=" btn btn-primary btn-sm"
              type="button"
              value="show matches details..."
              onClick={this.toggleShow}
            />

            {this.state.isShow && <h1>'hallo test'</h1>}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default CocktailList;
