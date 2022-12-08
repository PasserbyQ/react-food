import * as types from "../action-types";
const initFood = {
  all: [],
  hots: [],
  new: [],
  details: []
};
export default function food(state = initFood, action) {
  switch (action.type) {
    case types.FOOD_SET_ALL:
      return {
        ...state,
        all: action.value
      };
    case types.FOOD_SET_HOTS:
      return {
        ...state,
        hots: action.value
      };
    case types.FOOD_SET_NEW:
      return {
        ...state,
        new: action.value
      };
    case types.FOOD_SET_ALL_DETAIL:
      return {
        ...state,
        details: action.value
      };
    default:
      return state;
  }
}
