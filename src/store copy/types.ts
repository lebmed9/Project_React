import { CardActionsType } from './actions';

export type ReducerType = {
  name: string;
};

export type SetCardAction = {
  type: string;
  payload: string;
};
export type ActionType = SetCardAction;
