import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../pages/Home";
import Cam from "../pages/Camera";
import Tabs from './Tabs';

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home} />
                <Screen name="Camera" component={Cam} />
                <Screen name="AgroPocket" component={Tabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;