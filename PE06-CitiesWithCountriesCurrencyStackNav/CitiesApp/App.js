import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CitiesStackScreen from './src/Cities/CitiesStackScreen';
import AddCity from './src/AddCity/AddCity';
import AddCountry from './src/AddCountry/AddCountry';
import CountryStackScreen from './src/Countries/CountriesStackScreen';
import { colors } from './src/theme';

const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    cities: [],
    countries: [],
  };

  generateId = () => `${Date.now()}_${Math.floor(Math.random() * 10000)}`;

  addCity = (city) => {
    const cityWithId = { ...city, id: this.generateId(), locations: [] };
    this.setState((prev) => ({ cities: [...prev.cities, cityWithId] }));
  };

  addCountry = (country) => {
    const countryWithId = { ...country, id: this.generateId() };
    this.setState((prev) => ({ countries: [...prev.countries, countryWithId] }));
  };

  addCurrency = (countryIndex, newCurrency) => {
    const countries = [...this.state.countries];
    if (!countries[countryIndex]) return;
    countries[countryIndex] = { ...countries[countryIndex], currency: newCurrency };
    this.setState({ countries });
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="CitiesNav"
            options={{ tabBarLabel: 'Cities' }}
          >
            {(props) => (
              <CitiesStackScreen
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
              />
            )}
          </Tab.Screen>

          <Tab.Screen
            name="AddCity"
            options={{ tabBarLabel: 'Add City' }}
          >
            {(props) => (
              <AddCity {...props} addCity={this.addCity} />
            )}
          </Tab.Screen>

          <Tab.Screen
            name="AddCountry"
            options={{ tabBarLabel: 'Add Country' }}
          >
            {(props) => (
              <AddCountry
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
                addCurrency={this.addCurrency}
              />
            )}
          </Tab.Screen>

          <Tab.Screen
            name="CountriesNav"
            options={{ tabBarLabel: 'Countries' }}
          >
            {(props) => (
              <CountryStackScreen
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
                addCurrency={this.addCurrency}
              />
            )}
          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
