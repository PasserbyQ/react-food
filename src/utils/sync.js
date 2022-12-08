import storage from "@/utils/storage";
import store from "@/store/store";
import { setUserInfo } from "@/store/store/actions";
import { getAllFood, getAllFoodDetail } from "@/store/store/actions";


const syncUser = () => {
    const user = storage.get('USER_INFO')
    if (user) {
        store.dispatch(setUserInfo(user));
    }
}

const syncAllFood = () => {
    store.dispatch(getAllFood());
    store.dispatch(getAllFoodDetail());
}

syncUser()
syncAllFood()