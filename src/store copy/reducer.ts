import { CardActionsType } from './actions';
import { ReducerType, ActionType } from './types';

const initialState: ReducerType = {
  name: '',
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case CardActionsType.setCardName:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
