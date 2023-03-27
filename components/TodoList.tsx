import * as React from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TodoCard from './TodoCard';
import {fetchTodos} from './api';

type ItemData = {
  id: string;
  title: string;
};

const TodoList = () => {
  let [response, setResponse] = useState<ItemData[]>([]);

  const [selectedId, setSelectedId] = useState<string>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then((result: ItemData[]) => {
        setResponse(result);
      })
      .catch(() => Alert.alert('Error', 'Failed to load todos'));
  }, []);

  // useEffect(() => {
  //   fetchTodos()
  //     .then((result: ItemData[]) => {
  //       setResponse(result);
  //     })
  //     .catch(() => Alert.alert('Error', 'Failed to load todos'));
  // }, []);

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    return (
      <TodoCard
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
      />
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF4500', '#DB7093', '#FF1493']}
        style={styles.linearGradient}>
        <FlatList
          data={response}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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

export default TodoList;