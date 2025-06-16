import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import AddEditScreen from './Screens/AddEdit';
import ProgressScreen from './Screens/ProgressScreen';

const Stack = createStackNavigator();

export default function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  const markHabitComplete = (habitIndex) => {
    const updated = [...habits];
    updated[habitIndex].completed = true;
    setHabits(updated);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} habits={habits} markHabitComplete={markHabitComplete} />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddEdit">
          {(props) => (
            <AddEditScreen {...props} addHabit={addHabit} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Progress">
          {(props) => (
            <ProgressScreen {...props} habits={habits} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
