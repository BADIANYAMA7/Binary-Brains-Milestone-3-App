import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FirstScreen from './screens/Welcome';
import Secondscreen from './screens/Registration';
import Thanks from './screens/Thanks';
import Courses from './screens/Courses';
import Apply from './screens/Apply';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#09e2d7ff',

            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            tabBarLabelStyle: { fontSize: 14, paddingBottom: 5 },
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Welcome"
            component={FirstScreen}
            options={{
              tabBarButton: () => null,
              tabBarItemStyle: { display: 'none' },
            }}
          />
          <Tab.Screen
            name="Registration"
            component={Secondscreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-add" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Thanks"
            component={Thanks}
            options={{
              tabBarButton: () => null,
              tabBarItemStyle: { display: 'none' },
            }}
          />
          <Tab.Screen
            name="Course"
            component={Courses}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="book" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Apply"
            component={Apply}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="create" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
