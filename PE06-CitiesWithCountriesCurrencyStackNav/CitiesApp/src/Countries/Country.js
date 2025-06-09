import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const Country = ({ route }) => {
  const { country } = route.params || {};

  if (!country) {
    return (
      <View style={styles.container}>
        <Text>No country data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{country.name}</Text>
      <Text style={styles.currency}>
        Currency: {country.currency || 'No currency listed'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
  },
  currency: {
    fontSize: 20,
    color: 'white',
  },
});

export default Country;
