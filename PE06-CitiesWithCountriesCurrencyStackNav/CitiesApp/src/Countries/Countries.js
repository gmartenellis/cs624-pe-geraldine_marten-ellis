import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';

const Countries = ({ countries, navigation }) => {
  if (!countries || countries.length === 0) {
    return <Text>No countries added!</Text>;
  }

  return (
    <ScrollView>
      {countries.map((country, index) => (
        <TouchableOpacity
          key={country.id}
          onPress={() => navigation.navigate('Country', { country })}
        >
          <View style={styles.countryContainer}>
            <Text style={styles.name}>{country.name}</Text>
            <Text style={styles.currency}>
              Currency: {country.currency || 'No currency listed'}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  name: {
    fontSize: 20,
  },
  currency: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default Countries;
