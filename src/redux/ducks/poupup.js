const INITIAL_STATE = {
  success: {
    title: 'title',
    description: 'description',
    visible: false,
  },
};

export default function poupup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'VISIBLE_SUCCESS':
      return {
        ...state,
        success: action,
      };
    case 'NOT_VISIBLE_SUCCESS':
      return {
        ...state,
        success: {
          title: 'title',
          description: 'description',
          visible: false,
        },
      };
    default:
      return state;
  }
}
