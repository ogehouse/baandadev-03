import moment from 'moment';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types';

// if you want to show initial data :)
const INITIAL_DATA = [
  {
    id: 0,
    Title: 'Inviting you in my inner circle',
    message:
      'Hey Babs, I would love to have you in my inner circle of life. I would like you to be one of my mirrors of life.',
    from: 'Amudujin',
    startDate: moment(),
    invite: true
  },
  {
    id: 2,
    Title: 'How are things in life',
    message:
      'Hey Babs, Did not hear from you for a while. I am getting a kick out of this Baanda thingy. Thanks for roping me in.',
    from: 'Mercus Orilius',
    startDate: moment(),
    invite: false
  },
  {
    id: 3,
    Title: 'Values of human bonding and time',
    message:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. Now ... I wrote that then but I will not now. What do you think?',
    from: 'Jane Austen',
    startDate: moment(),
    invite: false
  }
];
//const INITIAL_DATA = [];

const messageReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_TODO:
      // console.log(
      //   'in reducer :' +
      //     action.text.messageText +
      //     '|| priority:' +
      //     action.text.priority
      // );
      if (action.text.messageText.trim()) {
        return [
          ...state,
          {
            id: action.id,
            messageText: action.text.messageText,
            priority: action.text.priority,
            tasknotes: action.text.tasknotes,
            startDate: action.text.startDate,
            completed: false
          }
        ];
      } else {
        return state; // return the same state if messageText is null or blank
      }
    //break;
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case REMOVE_TODO:
      const numIndex = parseInt(action.id, 10);
      return state.filter(todo => todo.id !== numIndex);
    default:
      return state;
  }
};

export default messageReducer;
