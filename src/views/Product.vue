<template>
    <section style="padding-top: 4rem;padding-bottom: 4rem;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-8">
                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <ProductImage :url="product.product_image.image"/>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="card" style="width: 100%;">
                                <div class="card-body" style="height: 525px;overflow-y: auto;">
                                    <h5 class="card-title">{{product.name}}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{{product.unitPrice}} tl</h6>
                                    <p class="card-text">{{product.description}}</p>
                                    <div style="margin-bottom: .75rem;">
                                        <a class="btn btn-outline-dark btn-block" href="#">Sepete Ekle</a>
                                    </div>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <small class="text-muted">{{product.created_at}}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import {mapGetters} from 'vuex'
import ProductImage from './Product-Image'
export default {
  props:['id'],
  components:{
      ProductImage
  },
  created(){
    this.$store.dispatch('getByProductId',this.$route.params.id)
    console.log(this.$route.params.id)

  },
  computed: {
    ...mapGetters(['product']),
  },
}
</script>

<style scoped>

    

</style>
