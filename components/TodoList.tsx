import * as React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {useEffect, useState} from 'react';
import TodoCard from './TodoCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodosThunk} from '../asyncActions/fetchTodosThunk';

type ItemData = {
  id: string;
  title: string;
};

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todosReducer.todos);

  const loading = useSelector(state => state.todosReducer.isLoading);

  const [selectedId, setSelectedId] = useState<string>();

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, []);

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#5e0acc';
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
      <View>{loading && <ActivityIndicator />}</View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'black',
  },
  button: {
    marginTop: 20,
    marginRight: 44,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  buttonText: {
    color: '#black ',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TodoList;
