export const Types = {
  GET_INFO_HOME: 'GET_INFO_HOME',
  SET_INFO_HOME: 'SET_INFO_HOME',
};

export const Selectors = {};

export const INITIAL_STATE = {
  status: [],
  spaces: [],
  welcome: {},
  tools: [],
};

export function Home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_INFO_HOME: {
      return state;
    }

    case Types.SET_INFO_HOME: {
      return {
        ...state,
        status: action.payload.status,
        spaces: action.payload.spaces,
        tools: action.payload.tools,
        welcome: action.payload.welcome,
      };
    }

    default:
      return state;
  }
}

export const Creators = {
  getInfoHome: () => ({
    type: Types.GET_INFO_HOME,
    payload: {},
  }),
};

export default Home;
