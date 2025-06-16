import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation, habits, markHabitComplete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Habits</Text>

      <FlatList
        data={habits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.habitItem}>
            <Text style={{ flex: 1 }}>{item.name}</Text>
            {!item.completed && (
              <Button
                title="Done"
                onPress={() => markHabitComplete(index)}
                color="#4caf50"
              />
            )}
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No habits yet!</Text>}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddEdit')}
      >
        <Text style={styles.addButtonText}>+ Add Habit</Text>
      </TouchableOpacity>

      <Button
        title="View Completed Habits"
        onPress={() => navigation.navigate('Progress')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  habitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  addButton: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  empty: {
    textAlign: 'center',
    marginTop: 50,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default HomeScreen;
