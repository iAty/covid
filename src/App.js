import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import {
  Navbar,
  Cards,
  CardsHU,
  Charts,
  CountryPicker,
  CountryPickerHU,
} from './components';
import { fetchDate, fetchLocalCountry } from './api';
import Home from './components/Home';
import Footer from './components/Footer';
import Info from './page/Info';
import SkipLink from '@govuk-react/skip-link';

class App extends Component {
  state = { data: {}, localData: {}, country: 'Hungary' };

  async componentDidMount() {
    try {
      const data = await fetchDate();
      const localData = await fetchLocalCountry();
      this.setState({ data, localData });
    } catch (err) {
      console.log(err);
    }
  }
  handleCountryChange = async countryName => {
    const localData = await fetchLocalCountry(countryName);
    const { country } = localData;
    this.setState({ localData, country });
  };
  render() {
    const { data, localData, country } = this.state;
    return (
      <Router>
        <div>
          <SkipLink href="#main-content">Ugrás a tartalomra</SkipLink>
          <Switch>
            <Route path="/info" component={Info} />
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Navbar font='font-en' link='/en' nav='English' />
                  <Home />
                  <CardsHU data={data} />
                  <div className='container'>
                    <CountryPickerHU
                      country={country}
                      localData={localData}
                      handleCountryChange={this.handleCountryChange}
                    />
                    <Charts font='font-bd' msg='Az elmúlt 30 nap adatai' />
                  </div>
                  <Footer font='font-bd' msg='Fejlesztő' name='Bodnár Attila' />
                </Fragment>
              )}
            />
            <Route
              exact
              path='/en'
              render={props => (
                <Fragment>
                  <Navbar font='font-bd' link='/' nav='Magyar' />
                  <Home />
                  <Cards data={data} />
                  <div className='container'>
                    <CountryPicker
                      country={country}
                      localData={localData}
                      handleCountryChange={this.handleCountryChange}
                    />
                    <Charts font='font-en' msg={`Az elmúlt 30 nap adatai`} />
                  </div>
                  <Footer font='font-en' msg='Fejlesztő' by='by' name='Bodnár Attila' />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
