export const CardActionsType = {
  setCardName: 'BurgerMenu',
};

// export const SetCardAction = (name: string) => ({
//   type: CardActionsType.setCardName,
//   payload: name,
// });

export const SetCardAction = (burgerState: boolean) => ({
  type: CardActionsType.setCardName,
  payload: burgerState,
});
