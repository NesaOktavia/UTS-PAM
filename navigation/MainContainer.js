import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import HistoryScreen from './screens/HistoryScreen';

//Screen names
const homeName = "Beranda";
const detailsName = "Pesanan Saya";
const settingsName = "Pembatalan";
const historyName = "Riwayat Pesanan";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'book' : 'book-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'md-logo-usd' : 'md-logo-usd';
            } else if (rn === historyName) {
              iconName = focused ? 'md-receipt-outline' : 'md-receipt-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name={detailsName} component={DetailsScreen} options={{headerShown: false}}/>
        <Tab.Screen name={settingsName} component={SettingsScreen} options={{headerShown: false}}/>
        <Tab.Screen name={historyName} component={HistoryScreen} options={{headerShown: false}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;