import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import TodoList from './components/TodoList';
import styled, {ThemeProvider} from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {switchTheme} from './redux/actions/theme';
import {darkTheme, lightTheme} from './Theme';

interface ValueType {
  header: string;
  text: string;
  id: string;
}

interface EditValuesType {
  editHeader: string;
  editText: string;
  editId: string;
}

export default function HomeScreen() {
  const theme = useSelector(state => state.themeReducer.theme);
  const dispatch = useDispatch();

  const [courseGoals, setCourseGoals] = useState([]);

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  function showModal() {
    setIsVisibleModal(true);
  }

  function hideModal() {
    setIsVisibleModal(false);
  }

  function addTask(values: ValueType) {
    setCourseGoals(currentStateOfGoals => {
      currentStateOfGoals.push({
        text: values.text,
        id: values.id,
        header: values.header,
      } as never);
      return [...currentStateOfGoals];
    });
    setIsVisibleModal(false);
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: values.text,
        header: values.header,
        userId: values.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }

  function deleteTask(id: string) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => (goal as ValueType).id !== id);
    });

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });
  }

  function editTask(values: EditValuesType) {
    let i = courseGoals.findIndex(
      goal => (goal as ValueType).id === values.editId,
    );
    const cloneCourseGoals = courseGoals.slice();
    cloneCourseGoals[i].id = values.editId;
    cloneCourseGoals[i].header = values.editHeader;
    cloneCourseGoals[i].text = values.editText;
    setCourseGoals(cloneCourseGoals);
  }

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Button title="Add new task" color="#a065ec" onPress={showModal} />
        <GoalInput
          onAddGoal={addTask}
          visible={isVisibleModal}
          hideModal={hideModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={(itemData.item as ValueType).text}
                  id={(itemData.item as ValueType).id}
                  header={(itemData.item as ValueType).header}
                  onDeleteItem={deleteTask}
                  onEditItem={editTask}
                />
              );
            }}
            keyExtractor={item => {
              return `${(item as ValueType).id} ${(item as ValueType).header}`;
            }}
            alwaysBounceVertical={false}
          />
          {/* <View style={styles.apiContainer}>
          <TodoList />
        </View> */}
        </View>

        {theme.mode === 'light' ? (
          <Button
            title="Change dark theme"
            color={props => props.theme.PRIMARY_BUTTON_TEXT_COLOR}
            onPress={() => dispatch(switchTheme(darkTheme))}
          />
        ) : (
          <Button
            title="Change light theme"
            color={props => props.theme.PRIMARY_BUTTON_TEXT_COLOR}
            onPress={() => dispatch(switchTheme(lightTheme))}
          />
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.View`
 flex: 1;
 flex-direction: column;
 padding: 16px;
 background - color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const styles = StyleSheet.create({
  goalsContainer: {
    flexDirection: 'row',
    flex: 5,
  },
  // apiContainer: {
  //   flex: 4,
  // },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 25,
    height: 25,
    margin: 10,
    borderRadius: 6,
  },
  button: {},
});
