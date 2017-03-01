// @flow
import { APP_INSTALLED } from '<%= name %>/App/Actions/App';

type State = {
  installed: bool,
};

type Action = {
  type: string,
};

const initialState = {
  installed: false,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case APP_INSTALLED:
      return {
        ...state,
        installed: true,
      };

    default:
      return state;
  }
};

export default reducer;