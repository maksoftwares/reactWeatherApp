import './App.css';
import Weather from './Components/Weather';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Weather />
    </div>
    )
  }
}
