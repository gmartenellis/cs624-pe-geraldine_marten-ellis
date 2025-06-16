import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddEditScreen = ({ navigation, addHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleSave = () => {
    if (!habitName.trim()) {
      alert('Please enter a habit name.');
      return;
    }
    addHabit({ name: habitName.trim(), completed: false });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Add New Habit</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter habit name"
        value={habitName}
        onChangeText={setHabitName}
      />
      <Button title="Save Habit" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  label: { fontSize: 22, marginBottom: 10, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default AddEditScreen;
