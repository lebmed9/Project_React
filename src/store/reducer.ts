import { CardActionsType } from './actions';
import { ReducerType, ActionType } from './types';

const initialState: ReducerType = {
  burgerState: false,
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case CardActionsType.setCardName:
      return {
        ...state,
        burgerState: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
