import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

type ItemData = {
  id: string;
  title: string;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
};

const TodoCard = ({item, onPress, backgroundColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default TodoCard;
