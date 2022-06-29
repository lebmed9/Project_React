export const CardActionsType = {
  setCardName: 'SET_CARD_NAME',
};

export const SetCardAction = (name: string) => ({
  type: CardActionsType.setCardName,
  payload: name,
});
