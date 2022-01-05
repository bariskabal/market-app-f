import axios from 'axios'

const products={
  actions: {
    getData(store){
      axios.get('http://localhost:8000/api/products/getall')
      .then(res=>{
        store.commit('dataComit',res)
      })
      .catch(()=>{
        console.log(res.status)
      }).finally(()=>{
      })
    },
    getPopularProducts(store){
      axios.get('http://localhost:8000/api/products/getpopularproduct')
      .then(res=>{
        store.commit('popularProducts',res)
        console.log(res.data[0])
      })
      .catch(()=>{
      }).finally(()=>{
      })
    },
    getNewestsProducts(store){
      axios.get('http://localhost:8000/api/products/getnewestsproduct')
      .then(res=>{
        store.commit('newestsProduct',res)
        console.log(res.data[0])
      })
      .catch(()=>{
      }).finally(()=>{
      })
    },
    getProductImageById(store,id){
      axios.get('http://localhost:8000/api/productImage/getbyid/'+id)
      .then(res=>{
        store.commit('productImage',res)
        console.log(id)
      })
      .catch(()=>{
      }).finally(()=>{
      })
    },
    getByProductId(store,id){
      axios.get('http://localhost:8000/api/products/getbyid/'+id)
      .then(res=>{
        store.commit('product',res)
        console.log(res)
      })
      .catch(()=>{
      }).finally(()=>{
      })
    },
    getByFilter(store,filter){
      axios.get('http://localhost:8000/api/products/getbyfilter?filter='+filter)
      .then(res=>{
        store.commit('productFilter',res)
        console.log(res.data)
      })
      .catch(()=>{
      }).finally(()=>{
      })
    },
    getByCategoryId(store,id){
      axios.get('http://localhost:8000/api/products/getbycategoryid/'+id)
      .then(res=>{
        store.commit('productFilter',res)
        console.log(res.data[0])
      })
      .catch(()=>{
      }).finally(()=>{
      })
    }
  },
  mutations: {
    dataComit(state,res){
     state.data=res.data;
     console.log(state.data)
    },
    popularProducts(state,res){
      state.popularProduct=res.data;
      console.log(state.popularProduct)
     },
     newestsProduct(state,res){
      state.newestsProduct=res.data;
      console.log(state.newestsProduct)
     },
     productImage(state,res){
      state.productImage=res.data;
      console.log(state.newestsProduct)
     },
     product(state,res){
      state.product=res.data;
      console.log(state.newestsProduct)
     },
     productFilter(state,res){
      state.productFilter=res.data;
      console.log(state.productFilter)
     },
     productsCategory(state,res){
      state.productFilter=res.data[0];
      console.log(state.productFilter)
     }
  },
  getters:{//verileri diğer komponentslerden çekmek için kullandığımız yeer
    products(state){
        //localStorage.setItem('selam',state.data);
        return state.data;
    },
    popularProduct(state){
      return state.popularProduct
    },
    newestsProduct(state){
      return state.newestsProduct
    },
    productImage(state){
      return state.productImage
    },
    product(state){
      return state.product
    },
    productFilter(state){
      return state.productFilter
    },
    /*getterOneData(state,id){
        return state.data.find(id => data.id);
    }*/
  },
  state: {//değişken
    data:{},
    popularProduct:{},
    newestsProduct:{},
    productImage:{},
    product:{},
    productFilter:{}
  },
 
 
  modules: {//diğer yazdığımız store dosyaları
  },
 
}
export default products;