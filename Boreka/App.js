import {} from 'expo-status-bar';
import { StyleSheet } from 'react-native';
//import  navigation libraries
import taskScreen from './screens/taskScreen'
import homeScreen from './screens/homeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
//initialize the  navigator 

//Then  wrap the app with the navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="Task" component={taskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
const styles = StyleSheet.create({
  
});