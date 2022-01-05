<template>
  <div class="container">
    <Nav/>

    <div style="">
    <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    Nav,Footer
  }
}
</script>
