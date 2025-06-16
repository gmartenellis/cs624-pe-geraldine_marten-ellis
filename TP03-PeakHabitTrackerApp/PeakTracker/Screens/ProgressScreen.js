import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProgressScreen = ({ habits }) => {
  const completedHabits = habits.filter(habit => habit.completed);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Completed Habits</Text>

      <FlatList
        data={completedHabits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.habit}>{item.name}</Text>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No completed habits yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  habit: {
    fontSize: 18,
    marginVertical: 6,
    color: '#333',
    padding: 10,
    backgroundColor: '#e0ffe0',
    borderRadius: 6,
  },
  empty: {
    textAlign: 'center',
    marginTop: 50,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default ProgressScreen;
