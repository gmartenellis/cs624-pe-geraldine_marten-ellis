import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cities from './Cities';
import City from './City';

const Stack = createNativeStackNavigator();

export default function CitiesStackScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities">
        {(stackProps) => <Cities {...stackProps} cities={props.cities} />}
      </Stack.Screen>
      <Stack.Screen name="City" component={City} />
    </Stack.Navigator>
  );
}
