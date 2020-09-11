import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropostaCreditoCusteio from '../pages/PropostaCreditoInvestimento';
import PropostaCreditoInvestimento from '../pages/PropostaCreditoCusteio';

const { Navigator, Screen } = createBottomTabNavigator()

function Tabs() {
    return (
        <Navigator
            tabBarOptions={{
                style:{
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20
                },
                labelStyle: {
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ddd',
                inactiveTintColor: '#ddd',
                activeTintColor: 'green',
            }}
        >
            <Screen
                name="PropostasCusteio"
                component={PropostaCreditoCusteio}
                options={{
                    tabBarLabel: 'Custeio',
                }}
            />
            <Screen
                name="PropostasInvestimento"
                component={PropostaCreditoInvestimento}
                options={{
                    tabBarLabel: 'Investimento',
                }}
            />
        </Navigator>
    );
}

export default Tabs;