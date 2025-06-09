import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Countries from './Countries';
import Country from './Country';
import { colors } from '../theme';

const Stack = createNativeStackNavigator();

const CountriesStackScreen = ({ countries, addCountry, addCurrency, navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Countries"
        options={{ title: 'Countries List' }}
      >
        {(props) => (
          <Countries
            {...props}
            countries={countries}
            addCountry={addCountry}
            addCurrency={addCurrency}
            navigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Country"
        component={Country}
        options={({ route }) => ({
          title: route.params?.country?.name || 'Country Details',
        })}
      />
    </Stack.Navigator>
  );
};

export default CountriesStackScreen;
