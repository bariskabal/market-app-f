import { createStore } from 'vuex'
import product from './product'
import category from './category'

export default createStore({

  modules: {
    product,
    category
  },
  getters:{//verileri diğer komponentslerden çekmek için kullandığımız yeer
    apiUrl(state){
        return state.apiUrl;
    }
  },
  state: {//değişken
    apiUrl:'http://localhost:8000'
  }
})
