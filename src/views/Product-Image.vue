<template>
    <div class="rK3dleh2JA">
        <div class="jC2OLUOoP1">
            <img :src="apiUrl+this.url">
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  props: ["url"],
  computed: {
      ...mapGetters(['apiUrl'])
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
