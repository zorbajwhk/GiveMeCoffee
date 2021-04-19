import React from 'react';
import './App.css';
import logo from './logo.png';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(location, sortBy) {
    Yelp.search(location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">

        <div className="header">
          <a href="./">
            <img src={logo} alt="GiveMeCoffee Logo"/>
            </a>
        </div>
        
        <div className="body">
          <SearchBar searchYelp={this.searchYelp} businesses={this.state.businesses} />
          <BusinessList businesses={this.state.businesses} />
        </div>
      
        <div className="footer">
          <small><a target="_black" href="https://github.com/zorbajwhk/GiveMeCoffee">GiveME<span role="img" aria-label="コーヒー">☕️</span></a> v1.5.2 | Made with <span role="img" aria-label="ハート">❤️</span></small>
          <small>Copyright © <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/zorbajobswong/">Zorba Jobs Wong</a>, All Rights Reserved.</small>
        </div>

      </div>
    );
  }
}

export default App;