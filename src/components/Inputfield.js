import React from "react";

class Inputfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.emptyInputValueState = this.emptyInputValueState.bind(this);
  }

  // update the vlue of the input field with the text
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // empty inputfied value after added to the list
  emptyInputValueState() {
    this.setState({ value: "" });
  }

  render() {
    return (
      <form className="inputContainer">
        <input
          type="text"
          value={this.state.value}
          placeholder="Voeg een item toe"
          onChange={this.handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              this.props.handleClickAddNewItem(event, this.state.value);
              this.emptyInputValueState();
            }
          }}
        />
        <button
          onClick={(event) => {
            this.props.handleClickAddNewItem(event, this.state.value);
            this.emptyInputValueState();
          }}
        >
          Voeg toe
        </button>
      </form>
    );
  }
}
export default Inputfield;
