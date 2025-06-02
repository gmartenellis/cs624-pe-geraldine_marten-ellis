import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

const Countries = ({ countries = [] }) => {
  if (!Array.isArray(countries)) {
    console.warn("Countries is not an array", countries);
    return <CenterMessage message="Countries data is invalid." />;
  }

  if (countries.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CenterMessage message="No countries added!" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {countries.map((country, index) => {
        const name = typeof country.name === 'string' ? country.name : 'Unknown Country';
        const currency = typeof country.currency === 'string' ? country.currency : 'Unknown Currency';

        return (
          <View
            key={country.id || country.name || index}
            style={[
              styles.countryContainer,
              index === countries.length - 1 && { borderBottomWidth: 0 },
            ]}
          >
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.currency}>{currency}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles= StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  name: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)',
  },
});

export default Countries;
