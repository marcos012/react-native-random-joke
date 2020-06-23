import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

interface Joke {
    id: number,
    type: string,
    setup: string,
    punchline: string
}

const Home = () => {
    const [joke, setJoke] = useState<Joke>({} as Joke);
    
    function generateJoke() {
        api.get(`random_joke`).then(res => {
            setJoke(res.data);
        });
    }

    return (
        <View>
            <Text>{joke.type}</Text>
            <Text>{joke.setup}</Text>
            <Text>{joke.punchline}</Text>
            <RectButton style={styles.button} onPress={generateJoke} >
                <Text style={styles.buttonText}>Generate joke</Text>
            </RectButton>
        </View>)
}

const styles = StyleSheet.create({

    button: {
        width: '48%',
        backgroundColor: '#34CB79',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        marginLeft: 8,
        color: '#FFF',
        fontSize: 16,
    },


});
export default Home;