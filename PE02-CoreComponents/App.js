import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet, Platform } from 'react-native';

const App = () => {
    const [course, setCourse] = useState('');

    return (
        <ScrollView style={styles.container}>
            <Image source={require('./assets/images/icon.png')} style={styles.image} />

            <Text style={styles.label}>Which course did you like?</Text>
            <TextInput
                style={styles.input}
                placeholder='ex. CS624'
                value={course}
                onChangeText={text => setCourse(text)}
            />

                <View style={styles.section}>
                <Text style={styles.sectionHeader}>Core Requirements (24 credits)</Text>
                <Text>CS 504 Software Engineering</Text>
                <Text>CS 506 Programming for Computing</Text>
                <Text>CS 519 Cloud Computing Overview</Text>
                <Text>CS 533 Computer Architecture</Text>
                <Text>CS 547 Secure Systems and Programs</Text>
                <Text>CS 622 Discrete Math and Algorithms for Computing</Text>
                <Text>DS 510 Artificial Intelligence for Data Science</Text>
                <Text>DS 620 Machine Learning & Deep Learning</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Depth of Study (6 Credits)</Text>
                <Text>CS 624 Full-Stack Web Development - Mobile App</Text>
                <Text>CS 628 Full-Stack Web Development - Web App</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Capstone (3 Credits)</Text>
                <Text>CS 698 MSCS Capstone</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 20,
       backgroundColor: '#fff',
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
    section: {
        marginBottom: 30,
        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 8,
    },
    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default App;