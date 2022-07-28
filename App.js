import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import AlbumsList from './src/Screens/AlbumsList';
import Home from './src/Screens/Home';
import store from './src/redux/store';


const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name="Albums App" component={Home} />
      <Stack.Screen  name="Albums List" component={AlbumsList} />


      
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

