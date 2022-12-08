import foods from '@/json/foods'
import foodDetails from '@/json/foodDetails'
import * as types from "../action-types";

export const getAllFoodDetail = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        resolve(foodDetails)
        dispatch(setAllFoodDetail(foodDetails))
    });
};

export const getAllFood = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        resolve(foods)
        dispatch(setAllFood(foods))
    });
};

export const getHots = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        const count = 4
        const list = JSON.parse(JSON.stringify(foods))
        list.sort((a, b) => {
            const ac = a.collect
            const bc = b.collect
            return bc - ac
        })
        const hots = list.slice(0, count)
        resolve(hots)
        dispatch(setHots(hots))
    });
};

export const getNew = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        const count = 10
        const list = JSON.parse(JSON.stringify(foods))
        const newList = list.slice(0, count)
        resolve(newList)
        dispatch(setNew(newList))
    });
};

export const setAllFood = (value) => {
    return {
        type: types.FOOD_SET_ALL,
        value,
    };
};

export const setHots = (value) => {
    return {
        type: types.FOOD_SET_HOTS,
        value,
    };
};

export const setNew = (value) => {
    return {
        type: types.FOOD_SET_NEW,
        value,
    };
};

export const setAllFoodDetail = (value) => {
    return {
        type: types.FOOD_SET_ALL_DETAIL,
        value,
    };
};