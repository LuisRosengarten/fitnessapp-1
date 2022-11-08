import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import TabNav from './screens/TabNav';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false, }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Tab" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
