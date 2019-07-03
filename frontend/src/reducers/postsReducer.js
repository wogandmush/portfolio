import { Posts } from '../constants';

const initialState = {
  posts: [
    {
      id: 2,
      title: 'Post 2',
      body: [
        {
          order: 1,
          type: 'p',
          content: {
            text: 'This is an image: ',
          },
        },
        {
          order: 2,
          type: 'img',
          content: {
            imageUrl: 'http://oi65.tinypic.com/xpzxc0.jpg',
            imageAlt: 'RandomPic',
          },
        },
      ],
    },
    {
      id: 1,
      title: 'Post 1',
      body: [
        {
          order: 1,
          type: 'p',
          content: {
            text: 'This is post 1',
          },
        },
      ],
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Posts.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case Posts.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => (post.id === action.payload.id ? action.payload : post)),
      };
    case Posts.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    default:
      return state;
  }
};
