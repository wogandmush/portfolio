export const defaultElement = {
  order: 0,
  type: 'p',
  content: {
    text: '',
    imageUrl: '',
    imageAlt: '',
  },
};

export const postInitialState = {
  id: 3,
  title: 'Title',
  body: [defaultElement],
};

export const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return {
        ...state,
        title: action.payload,
      };
    case 'UPDATE_ELEMENT':
      return {
        ...state,
        body: state.body.map((elem) => {
          if (elem.order === action.index) {
            return {
              ...elem,
              content: {
                ...elem.content,
                ...action.payload.content,
              },
            };
          }
          return elem;
        }),
      };
    case 'UPDATE_ELEMENT_TYPE':
      return {
        ...state,
        body: state.body.map((elem) => {
          if (elem.order === action.index) {
            return {
              ...elem,
              type: action.payload,
            };
          }
          return elem;
        }),
      };
    case 'ADD_ELEMENT':
      return {
        ...state,
        body: [...state.body, action.payload],
      };
    case 'DELETE_ELEMENT':
      return {
        ...state,
        body: state.body.filter(elem => elem.order !== action.payload),
      };
    case 'RESET':
      return {
        ...postInitialState,
        id: state.id + 1,
      };
    default:
      return state;
  }
};

