import React from "react";
import { render } from "react-dom";
import "./city.css";

const key = "";

export default class City extends React.Component {
  load(city) {
    fetch("https://api.apixu.com/v1/current.json?key=" + key + "&q=" + city, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        let temp_c = data["current"].temp_c;
        let temp_f = data["current"].temp_f;
        let humidity = data["current"].humidity;
        let text = data["current"]["condition"]["text"];
        let icon = data["current"]["condition"]["icon"];
        console.log(icon);
        this.render(temp_c, temp_f, humidity, text, icon);
      });
  }
  render(temp_c, temp_f, humidity, text, icon) {
    let weatherInfo = document.querySelector("#weatherInfo");
    weatherInfo.innerHTML = `
                            <div class='container'>
                              <div class="description">
                                  <img src="http:${icon}">
                                  <h4>${text}</h4>
                                  <p> Celsius: <span class="temp">${temp_c}</span></p>
                                  <p> Farenheit: <span class="temp">${temp_f}</span></p>
                                  <p> Humidity: <span class="temp">${humidity}</span></p>
                                </div>
                            </div>
                            `;
  }
}
