// IMPORTS
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Profile from "./Profile";
import Groups from "./Groups";
import Ionicons from '@expo/vector-icons/Ionicons'

//VIARIABLEES
const Tab = createBottomTabNavigator()

//COMPONENT
export default function TabNav() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    color = '#566246'

                    if (route.name === 'Start') {
                        iconName = focused
                        ? 'home'
                        : 'home-outline';
                    } else if (route.name === 'Profil') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    } else if (route.name == 'Gruppen') {
                        iconName = focused ? 'people-circle' : 'people-circle-outline'
                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarStyle: {
                    shadowColor: '#000',
                    shadowOpacity: 0.15,
                    shadowRadius: 4,
                    shadowOffset: {width: 0, height: 0},
                    borderColor: '#FFF',
                    borderRadius: 5
                },
                tabBarLabelStyle: {
                    color: '#566246'
                }
            })}
        >
            <Tab.Screen name="Start" component={HomeScreen} />
            <Tab.Screen name="Gruppen" component={Groups} />
            <Tab.Screen name="Profil" component={Profile} />
        </Tab.Navigator>
    )
}