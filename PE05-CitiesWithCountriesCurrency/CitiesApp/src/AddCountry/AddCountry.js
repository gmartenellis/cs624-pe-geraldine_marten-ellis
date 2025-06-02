import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme';

class AddCountry extends React.Component {
    state = {
        name: '',
        currency: '',
    };

    onChangeText = (key, value) => this.setState({ [key]: value });

    submit = () => {
        const { name, currency } = this.state;
        if (!name || !currency) {
            alert('Please fill out both fields');
            return;
        }

        this.props.addCountry({ name, currency });
        this.setState({ name: '', currency: '' });
        this.props.navigation.navigate('Countries');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Add Country</Text>
                <TextInput
                    placeholder="Country Name"
                    onChangeText={(val) => this.onChangeText('name', val)}
                    value={this.state.name}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Currency"
                    onChangeText={(val) => this.onChangeText('currency', val)}
                    value={this.state.currency}
                    style={styles.input}
                />
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add Country</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center',
    },
    heading: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        margin: 10,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        height: 50,
    },
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default AddCountry;
