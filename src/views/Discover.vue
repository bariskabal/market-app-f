<template>
    <section id="cover" class="y1SFajIn5T d-flex align-items-center" style="padding-top: 6rem;padding-bottom: 6rem;">
        <div class="container">
            <div class="row">
                <div class=" col-12 col-sm-10" style="font-variant: small-caps;text-decoration: overline;">
                    <h1 class="display-4">Marketim seninle</h1>
                    <p class="lead" style="text-decoration: overline;">Aradığın her şey için marketim seninle. Ara, bul, evine gelsin.</p>
                    <div class="row">
                        <div class="col-12 col-sm-8">
                            <form  method="get" action="/filter">
                                <div class="input-group">
                                    <input v-model="filter" name="filter" class="form-control form-control-lg" type="text" style="border:3px solid #212529;border-radius:5px">
                                    <div class="input-group-append">
                                        <button v-on:click="submit"  class="btn btn-outline-dark btn-lg" style="margin-left:5px;border:3px solid #212529;border-radius:5px" type="submit">Ara</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return{
            filter:''
        }
    },
    methods:{
        submit(){
            
        }
    }
}
</script>
<style scoped>

    #cover{
	background:url(../assets/img/market1.jpg) no-repeat center fixed;
	height: 400px;
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
    }


</style>
