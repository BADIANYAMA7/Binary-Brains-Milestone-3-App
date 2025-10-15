import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from './screens/Welcome';
import Secondscreen from './screens/Registration';
import Thanks from './screens/Thanks';
import Courses from './screens/Courses';
import Apply from './screens/Apply';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#09e2d7ff' }, tabBarActiveTintColor: 'white', tabBarInactiveTintColor: 'black' }}>
        <Tab.Screen name="Welcome" component={FirstScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="Registration" component={Secondscreen} />
        <Tab.Screen name="Thanks" component={Thanks} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="Course" component={Courses} />
        <Tab.Screen name="Apply" component={Apply} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
