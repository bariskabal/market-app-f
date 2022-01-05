import axios from 'axios'

const categories={
  actions: {
    getCategories(store){
      axios.get('http://localhost:8000/api/categories/getall')
      .then(res=>{
        store.commit('categories',res)
        console.log(res.data[0])
      })
      .catch(()=>{
        console.log(res.status)
      }).finally(()=>{
      })
    },
    getPopularCategories(store){
      axios.get('http://localhost:8000/api/categories/getpopularcategories')
      .then(res=>{
        store.commit('popularCategories',res)
      })
      .catch(()=>{
        console.log(res.status)
      }).finally(()=>{
      })
    }
  },
  mutations: {
    categories(state,res){
      state.categories=res.data[0];
      console.log(state.categories)
     },
    popularCategories(state,res){
     state.popularCategories=res.data;
     console.log(state.popularCategories)
    }
  },
  getters:{
    categories(state){
      return state.categories;
  },
    popularCategories(state){
        return state.popularCategories;
    }
  },
  state: {
    popularCategories:{},
    categories:{}
  },
 
 
  modules: {
  },
 
}
export default categories;