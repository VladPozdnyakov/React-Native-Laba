import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

interface IIdata {
  text: string;
  id: string;
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  function showModal() {
    setIsVisibleModal(true);
  }

  function hideModal() {
    setIsVisibleModal(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals(currentStateOfGoals => {
      currentStateOfGoals.push({
        text: enteredGoalText,
        id: Math.random().toString(),
      } as never);
      return [...currentStateOfGoals];
    });
    setIsVisibleModal(false);
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => (goal as IIdata).id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add new task" color="#a065ec" onPress={showModal} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isVisibleModal}
        hideModal={hideModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={(itemData.item as IIdata).text}
                id={(itemData.item as IIdata).id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={item => {
            return (item as IIdata).id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});
