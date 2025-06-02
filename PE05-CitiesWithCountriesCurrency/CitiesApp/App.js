import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import { colors } from './src/theme';
import AddCountry from './src/AddCountry/AddCountry';
import Countries from './src/Countries/Countries';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ cities, addCity, addLocation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Cities"
        children={(props) => (
          <Cities {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      />
      <Stack.Screen
        name="City"
        children={(props) => (
          <City {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    cities: [],
    countries: [],
  };

  // Simple unique ID generator based on timestamp + random number
  generateId = () => `${Date.now()}_${Math.floor(Math.random() * 10000)}`;

  addCity = (city) => {
    const cityWithId = { ...city, id: this.generateId(), locations: [] };
    this.setState((prevState) => ({
      cities: [...prevState.cities, cityWithId],
    }));
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex((item) => item.id === city.id);
    if (index === -1) return;

    const updatedCity = {
      ...this.state.cities[index],
      locations: [...this.state.cities[index].locations, location],
    };

    const cities = [
      ...this.state.cities.slice(0, index),
      updatedCity,
      ...this.state.cities.slice(index + 1),
    ];

    this.setState({ cities });
  };

  addCountry = (country) => {
    const countryWithId = { ...country, id: this.generateId() };
    this.setState((prevState) => ({
      countries: [...prevState.countries, countryWithId],
    }));
  };

  addCurrency = (countryIndex, newCurrency) => {
    const countries = [...this.state.countries];
    if (!countries[countryIndex]) return;

    const updatedCountry = { ...countries[countryIndex], currency: newCurrency };
    countries[countryIndex] = updatedCountry;

    this.setState({ countries });
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="CitiesNav"
            options={{ tabBarLabel: 'Cities' }}
            children={(props) => (
              <CitiesStackScreen
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="AddCity"
            options={{ tabBarLabel: 'Add City' }}
            children={(props) => (
              <AddCity
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="AddCountry"
            options={{ tabBarLabel: 'Add Country' }}
            children={(props) => (
              <AddCountry
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
                addCurrency={this.addCurrency}
              />
            )}
          />
          <Tab.Screen
            name="Countries"
            options={{ tabBarLabel: 'Countries' }}
            children={(props) => (
              <Countries
                {...props}
                countries={this.state.countries}
                addCountry={this.addCountry}
                addCurrency={this.addCurrency}
              />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
