export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

let initialState = {
  todos: [],
  isLoading: false,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        todos: [],
        isLoading: true,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
        isLoading: false,
      };
    // case FETCH_TODOS_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};
export const addTodosAPI = payload => ({type: FETCH_TODOS_SUCCESS, payload});
export const makeTodosRequest = payload => ({
  type: FETCH_TODOS_REQUEST,
  payload,
});
