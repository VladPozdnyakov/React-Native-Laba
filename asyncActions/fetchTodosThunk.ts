import {fetchTodos} from '../services/api';
import {addTodosAPI} from '../redux/reducers/todosReducer';
import {makeTodosRequest} from '../redux/reducers/todosReducer';

type ItemData = {
  id: string;
  title: string;
};

export const fetchTodosThunk = () => {
  return async dispatch => {
    try {
      dispatch(makeTodosRequest());
      setTimeout(() => {
        fetchTodos().then((result: ItemData[]) =>
          dispatch(addTodosAPI(result)),
        );
      }, 1500);
    } catch {}
  };
};
