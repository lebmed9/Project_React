export const CardActionsType = {
  setCardName: 'BurgerMenu',
};

export const SetCardAction = (burgerState: boolean) => ({
  type: CardActionsType.setCardName,
  payload: burgerState,
});
