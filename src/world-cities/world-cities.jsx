import React from "react";
import { render } from "react-dom";
import Autosuggest from "react-autosuggest";
import "./world-cities.css";

const cities = require("./world-cities.json");

export default class InputCity extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: []
    };
  }
  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  getSuggestions(value) {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("^" + escapedValue, "i");

    return cities.filter(cities => regex.test(cities.name));
  }
  getSuggestionValue = suggestion => {
    this.props.callbackFunction(suggestion.name);
    return suggestion.name;
  };

  renderSuggestion(suggestion) {
    return <span>{suggestion.name}</span>;
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "city",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
