<template>
  <div>
      <Discover/>
      <Popular/>
      <Newests/>
      <PopularCategory/>
      <Advertisement/>
  </div>
</template>
<script>
import Discover from './Discover.vue'
import Popular from './Popular-Product.vue'
import Newests from './Newests-Product.vue'
import PopularCategory from './Popular-Category.vue'
import Advertisement from './Advertisement.vue'
export default {
 components:{
   Discover,
   Popular,
   Newests,
   PopularCategory,
   Advertisement
 }
}
</script>

<style>

</style>
