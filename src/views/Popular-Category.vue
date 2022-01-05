<template>
    <section style="padding-top: 4rem;padding-bottom: 4rem;">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div style="margin-bottom: 1rem;">
							<div class="d-flex align-items-center">
								<div class="d-flex justify-content-start" style="width: 100%;">
									<h3 class="mb-0 text-monospace">En Popüler Kategoriler</h3>
								</div>
							</div>
						</div>
						<div class="row Lahx9mc4hL">
							<div v-for="item in popularCategories[0]" :key="item.id" class="col-9 col-sm-6 col-md-6 col-lg-3 col-xl-3">
								<div class="card border-0 rounded-0" style="width: 100%;margin-bottom: 1rem;">
									<div class="card-body p-0">
										<h5 class="card-title">
											<a class="text-reset stretched-link">{{item.categoryName}}</a>
										</h5>
										<p class="card-text">{{item.product_count}} ürün</p>
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
export default {
  components:{
  },
  created(){
    this.$store.dispatch('getPopularCategories')
  },
  computed: {
    ...mapGetters(['popularCategories']),
  },
}
</script>




<style scoped>

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

</style>
