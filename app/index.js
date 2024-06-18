import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './loginScreen';
import NewAccontScreen from './newAccount';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='NewAccount' component={NewAccontScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
