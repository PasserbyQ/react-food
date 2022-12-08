import store from "@/store/store";

export function seardhFood(search) {
  return new Promise((resolve, reject) => {
    const all = store.getState().food.all;
    const list = all.filter(food => {
      const check = food.category.includes(search) || food.title.includes(search)
      return check
    })
    resolve(list)
  });
}

export function getFoodDetail(id) {
  return new Promise((resolve, reject) => {
    const list = store.getState().food.details;
    const info = list.find(item => {
      return item.id == id
    })
    if (info) {
      resolve(info)
    } else {
      reject()
    }
  });
}