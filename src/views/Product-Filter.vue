<template>
    <section class="y1SFajIn5T d-flex align-items-center" style="padding-top: 6rem;padding-bottom: 6rem;">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-12 col-sm-6">
						<form method="get" action="/filter">
							<div class="input-group">
								<input v-model="filter" name="filter" class="form-control form-control-lg" type="text">
								<div class="input-group-append">
									<button v-on:click="submit" class="btn btn-outline-dark btn-lg" type="submit">Ara</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		
		<section style="padding-top: 4rem;padding-bottom: 4rem;">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div style="margin-bottom: 4rem;">
							<h3 class="mb-0">"{{this.$route.query.filter}}" ile ilgili {{productFilter.length}} sonuç bulundu.</h3>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12 col-sm-3">
						<form>
							<div style="margin-bottom: 4rem;">
								<div style="margin-bottom: 1rem;">
									<h4 class="mb-0">Kategoriler</h4>
								</div>
								<div class="form-group">
									<select v-model="categoryId" @change="s()" name="a" class="form-control">
										<option></option>
										<option  v-for="item in categories" :key="item.id"  :value="item.id">{{item.categoryName}}</option>
									</select>
								</div>
							</div>
							
						</form>
					</div>
					<div class="col-12 col-sm-9">
						<div class="row">
							<div  v-for="item in productFilter" :key="item.id"  class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
								<div class="card border-0 rounded-0" style="width: 100%;margin-bottom: 1rem;">
									<ProductImage :url="item.product_image.image"/>
									<div class="card-body">
										<h5 class="card-title">
											<router-link :to="{name: 'Product' ,path: 'product/', params: { id: item.id } }" class="text-reset stretched-link" href="#">{{item.name}}</router-link>
										</h5>
										<p class="card-text">{{item.description}}</p>
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
  components:{
      ProductImage
  },
  data() {
        return{
            filter:'',
			categoryId:''
        }
    },
    methods:{
        submit(){
            
        },
		s(){
			this.$store.dispatch('getByCategoryId',this.categoryId)
			console.log(this.categoryId)
		}
    },
  created(){
    this.$store.dispatch('getByFilter',this.$route.query.filter)
	this.$store.dispatch('getCategories')
  },
  computed: {
    ...mapGetters(['productFilter','categories']),
  },
}
</script>

<style scoped>
/* Kenvar kıvrımlarını kaldırmak için (*) */

* {
	border-radius: unset!important;
}

.y1SFajIn5T {
	background-color: rgba(0, 0, 0, .02);
}

.rK3dleh2JA {
	position: relative;
	width: 100%;
	height: 100%;
	padding-bottom: 125%;
}

.jC2OLUOoP1 {
	position: absolute;
	width: 100%;
	height: 100%;
}

.jC2OLUOoP1 img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media only screen and (max-width: 991px) {
	.Lahx9mc4hL {
		flex-wrap: nowrap;
		overflow-x: auto;
	}
}

.NKxWWLxzmB {
	background-color: rgba(0, 0, 0, .9);
}

/**/

.navbar .dropdown-menu {
	width: 360px;
}

@media only screen and (max-width: 991px) {
	.navbar .dropdown-menu {
		width: 100%;
	}
}

.navbar .dropdown-menu {
	padding: unset;
}

.navbar .dropdown-menu .IILmKtHxFI {
	margin: 1.25rem;
}

.xrBK8FN3Sd {
	border-color: #343a40;
}
</style>
