import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import FavoriteScreen from "./components/FavoriteScreen";
import ShareScreen from "./components/ShareScreen";

const Tab = createBottomTabNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1}}> 
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={
                        ({route}) => (
                            {
                                tabBarIcon: ({focused, color, size}) => {
                                     let iconName;

                                     if(route.name === 'Home'){
                                        iconName = focused ? 'home' : 'home-outline'
                                     }
                                     else if(route.name === 'Setting'){
                                        iconName = focused ? 'settings' : 'settings-outline'
                                     }
                                     else if(route.name === 'Favorite'){
                                        iconName = focused ? 'heart-sharp' : 'heart-outline'
                                     }
                                     else if(route.name === 'Share'){
                                        iconName = focused ? 'share-social' : 'share-social-outline'
                                     }
                                     
                                     return <Icon name={iconName} size={size} color={color}/>
                                },
                                tabBarActiveTintColor: '#ea81ca',
                                tabBarInactiveTintColor: '#000',
                            }
                        )
                    }
                >
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Setting" component={SettingsScreen}/>
                    <Tab.Screen name="Favorite" component={FavoriteScreen}/>
                    <Tab.Screen name="Share" component={ShareScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}