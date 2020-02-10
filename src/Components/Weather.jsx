import React, { Component } from "react";
import Axios from "axios";
import "./Weather.css";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      latitude: undefined,
      longitude: undefined,
      summary: undefined,
      temperature: undefined,
      windSpeed: undefined,
      visibility: undefined,
      humidity: undefined,
      fetching: false,
      backShow: 0,
      searching: false,
      title: "The Weather Dog",
      language: "?lang=en",
      color: undefined,
      summaryTitle: "Summary",
      temperatureTitle: "Temperature",
      windspeedTitle: "Wind Speed",
      humidityTitle: "Humidity",
      fetchButtonText: "Fetch Weather",
      changeLanguageText: "Change Language",
      changeThemeText: "Change Theme",
      appTitle: "The Weather Dog"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.backShow = this.backShow.bind(this);
    this.changeLang = this.changeLang.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }
  async componentDidMount() {
    const name = await Axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.name}.json?access_token=pk.eyJ1IjoibWFrc2hlZXJhbiIsImEiOiJjanhqam42Y3cwMmNpM3hxZTBveG13MHVuIn0.sQ9RIZIO_FiWdFiAaEPBZg&limit=1`
    );
    console.log(name);
    const details = await Axios.get(
      `https://api.darksky.net/forecast/2743f5a33be391a8d763ea99f3a92fe8/${name.data.features[0].center[0]},${name.data.features[0].center[1]}${this.state.language}`
    );
    console.log(details.data.hourly.summary);
    this.setState({
      latitude: name.data.features[0].center[0],
      longitude: name.data.features[0].center[1],
      summary: details.data.hourly.summary,
      temperature: details.data.currently.temperature,
      windSpeed: details.data.currently.windSpeed,
      visibility: details.data.currently.visibility,
      humidity: details.data.currently.humidity
      //   language : '?lang:en'
    });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
      searching: true
    });
  }
  async handleClick(e) {
    e.preventDefault();
    // console.log(this.state.name);
    const name = await Axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.name}.json?access_token=pk.eyJ1IjoibWFrc2hlZXJhbiIsImEiOiJjanhqam42Y3cwMmNpM3hxZTBveG13MHVuIn0.sQ9RIZIO_FiWdFiAaEPBZg&limit=1`
    );
    // console.log(name);
    const details = await Axios.get(
      `https://api.darksky.net/forecast/2743f5a33be391a8d763ea99f3a92fe8/${name.data.features[0].center[1]},${name.data.features[0].center[0]}${this.state.language}`
    );
    // console.log(details.data.currently.temperature);
    const backShowNum = Math.floor(Math.random() * 3);
    console.log(backShowNum);
    this.setState({
      latitude: name.data.features[0].center[0],
      longitude: name.data.features[0].center[1],
      summary: details.data.hourly.summary,
      temperature: details.data.currently.temperature,
      windSpeed: details.data.currently.windSpeed,
      visibility: details.data.currently.visibility,
      humidity: details.data.currently.humidity,
      backShow: backShowNum,
      searching: false
      //   language : '?lang=en'
    });
  }
  backShow() {
    if (this.state.backShow === 1) {
      return (
        <div id="background-wrap">
          <div class="x1">
            <div class="cloud"></div>
          </div>

          <div class="x2">
            <div class="cloud"></div>
          </div>

          <div class="x3">
            <div class="cloud"></div>
          </div>

          <div class="x4">
            <div class="cloud"></div>
          </div>

          <div class="x5">
            <div class="cloud"></div>
          </div>
        </div>
      );
    } else if (this.state.backShow === 0) {
      return (
        <div class="weather-container">
          <div class="weather-box">
            <div ID="cloudcontainer">
              <div ID="cloudmain">
                <div ID="cloud2"></div>
                <div ID="cloud3"></div>
              </div>
            </div>
            <div ID="sun"></div>
            <div ID="weatherdescboxes"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="container">
          <div id="cloud">
            <span class="shadow"></span>
            <div class="rain">
              <div class="drop d1"></div>
              <div class="drop d2"></div>
              <div class="drop d3"></div>
              <div class="drop d4"></div>
              <div class="drop d5"></div>
              <div class="drop d6"></div>
              <div class="drop d7"></div>
              <div class="drop d8"></div>
              <div class="drop d9"></div>
              <div class="drop d10"></div>
              <div class="drop d11"></div>
              <div class="drop d12"></div>
              <div class="drop d13"></div>
              <div class="drop d14"></div>
              <div class="drop d15"></div>
            </div>
          </div>
          <div id="cloud">
            <span class="shadow"></span>
            <div class="rain">
              <div class="drop d1"></div>
              <div class="drop d2"></div>
              <div class="drop d3"></div>
              <div class="drop d4"></div>
              <div class="drop d5"></div>
              <div class="drop d6"></div>
              <div class="drop d7"></div>
              <div class="drop d8"></div>
              <div class="drop d9"></div>
              <div class="drop d10"></div>
              <div class="drop d11"></div>
              <div class="drop d12"></div>
              <div class="drop d13"></div>
              <div class="drop d14"></div>
              <div class="drop d15"></div>
            </div>
          </div>
        </div>
      );
    }
  }
  async changeLang(e) {
    e.preventDefault();
    if (this.state.language == "?lang=en") {
      this.setState({
        language: "?lang=de",
        summaryTitle: "Zusammenfassung",
        temperatureTitle: "Temperatur",
        windspeedTitle: "Windgeschwindigkeit",
        humidityTitle: "Feuchtigkeit",
        fetchButtonText: "Wetter holen",
        changeLanguageText: "Sprache ändern",
        changeThemeText: "Thema ändern",
        appTitle: "Der Wetterhund"
      });
      // this.handleClick();
    } else {
      this.setState({
        language: "?lang=en",
        summaryTitle: "Summary",
        temperatureTitle: "Temperature",
        windspeedTitle: "Wind Speed",
        humidityTitle: "Humidity",
        fetchButtonText: "Fetch Weather",
        changeLanguageText: "Change Language",
        changeThemeText: "Change Theme",
        appTitle: "The Weather Dog"
      });
    }
    // this.handleClick();
  }
  changeTheme() {
    if (this.state.color === undefined) {
      this.setState({
        color:
          "linear-gradient(to right top, #6b74d1, #8b8cda, #a8a5e3, #c3bfeb, #dddaf4, #d1cfe0, #c5c4cc, #b9b9b9, #878787, #585858, #2e2e2e, #000000)"
      });
    } else {
      this.setState({
        color: undefined
      });
    }
  }
  render() {
    var color = this.state.color;
    return (
      <div style={{ backgroundImage: color }} className="Weather">
        {this.backShow()}
        <div className="Weather-Input">
          <div className="Weather-Change">
            <button onClick={this.changeLang}>
              {this.state.changeLanguageText}
            </button>
            <button onClick={this.changeTheme}>
              {this.state.changeThemeText}
            </button>
          </div>
          <h1>{this.state.appTitle}</h1>
          <i
            class="em em-dog"
            aria-role="presentation"
            aria-label="DOG FACE"
          ></i>
          <form onSubmit={this.handleClick}>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="Dubai"
            />
            <br />
            <button>{this.state.fetchButtonText}</button>
          </form>
        </div>
        {this.state.searching ? (
          <div class="🐕">
            <div class="torso">
              <div class="fur">
                <div class="spot"></div>
              </div>
              <div class="neck">
                <div class="fur"></div>
                <div class="head">
                  <div class="fur">
                    <div class="snout"></div>
                  </div>
                  <div class="ears">
                    <div class="ear">
                      <div class="fur"></div>
                    </div>
                    <div class="ear">
                      <div class="fur"></div>
                    </div>
                  </div>
                  <div class="eye"></div>
                </div>
                <div class="collar"></div>
              </div>
              <div class="legs">
                <div class="leg">
                  <div class="fur"></div>
                  <div class="leg-inner">
                    <div class="fur"></div>
                  </div>
                </div>
                <div class="leg">
                  <div class="fur"></div>
                  <div class="leg-inner">
                    <div class="fur"></div>
                  </div>
                </div>
                <div class="leg">
                  <div class="fur"></div>
                  <div class="leg-inner">
                    <div class="fur"></div>
                  </div>
                </div>
                <div class="leg">
                  <div class="fur"></div>
                  <div class="leg-inner">
                    <div class="fur"></div>
                  </div>
                </div>
              </div>
              <div class="tail">
                <div class="tail">
                  <div class="tail">
                    <div class="tail -end">
                      <div class="tail">
                        <div class="tail">
                          <div class="tail">
                            <div class="tail"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="Weather-Details">
            <div>
              <div className="Weather-Title">
                <h2>{this.state.summaryTitle}</h2>
                <p>{this.state.summary}</p>
              </div>
              <div className="Weather-Title">
                <h2>{this.state.temperatureTitle}</h2>
                <p>{this.state.temperature} &deg;F</p>
              </div>
            </div>
            <div>
              <div className="Weather-Title">
                <h2>{this.state.windspeedTitle}</h2>
                <p>{this.state.windSpeed} mph</p>
              </div>
              <div className="Weather-Title">
                <h2>{this.state.humidityTitle}</h2>
                <p>{this.state.humidity}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
