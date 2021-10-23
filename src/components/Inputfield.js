import React from "react";

class Inputfield extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.emptyInputValueState = this.emptyInputValueState.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  emptyInputValueState() {
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="input-container">
        <input
          type="text"
          value={this.state.value}
          placeholder="New Item"
          onChange={this.handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              this.props.handleClickAddNewItem(this.state.value);
              this.emptyInputValueState();
            }
          }}
        />
        <button
          onClick={() => {
            this.props.handleClickAddNewItem(this.state.value);
            this.emptyInputValueState();
          }}
        >
          Add item
        </button>
      </div>
    );
  }
}
export default Inputfield;
