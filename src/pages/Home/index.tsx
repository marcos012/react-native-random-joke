import React, { useState } from 'react';
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
            <Text style={styles.type}>{joke.type}</Text>
            <Text style={styles.joke}>{joke.setup}</Text>
            <Text style={styles.joke}>{joke.punchline}</Text>
            <View style={styles.center}>
            <RectButton style={styles.button} onPress={generateJoke} >
                <Text style={styles.buttonText}>Generate joke</Text>
            </RectButton>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    type: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        margin: 30
    },
    joke: {
        marginBottom: 14,
        textAlign: 'center',
    },
    center: {
        alignItems: 'center'
    },
    button: {
        width: '48%',
        backgroundColor: '#f95738',
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