import React from "react";
import { render } from "react-dom";
import "./search.css";
import City from "../city/city.jsx";
import InputCity from "../world-cities/world-cities.jsx";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cityName: null };
    this.selectCity = this.selectCity.bind(this);
  }
  selectCity = city => {
    this.setState({
      cityName: city
    });
    let selected = new City();
    selected.load(city);
    // console.log(city);
  };
  render() {
    return (
      <div>
        <InputCity callbackFunction={this.selectCity} />
      </div>
    );
  }
}
