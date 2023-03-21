import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoList from './components/TodoList';
import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF4500', '#DB7093', '#FF1493']}
        style={styles.linearGradient}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('TodoList')}>
          <Text style={styles.btnText}>Show me all users tasks</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TodoList" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'red',
  },
  btn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 15,
  },
});

export default App;
