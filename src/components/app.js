import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div>
          <SearchBar />
          <WeatherList />
      </div>
    );
  }
}
