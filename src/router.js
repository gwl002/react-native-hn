import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import WebviewScreen from "./screens/WebviewScreen";
import UserScreen from "./screens/UserScreen";
import CommentScreen from "./screens/CommentScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      	headerMode="none"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Webview" component={WebviewScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Comment" component={CommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;