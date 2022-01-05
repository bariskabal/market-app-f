<template>
   <div id="register">
  <div class="container">
      <div id="register-row" class="row justify-content-center align-items-center">
          <div id="register-column"  class="col-md-6">
              <div id="register-box" class="col-md-12">
                  <form id="register-form">
                      <h3 class="text-center text-dark">Register</h3>
                      <div class="form-group">
                        <label for="firstName" class="text-dark">FIRST NAME</label><br>
                        <input class="form-control" formControlName="firstName" type="firstName" id="firstName" placeholder="First Name">
                    </div>
                    <div class="form-group">
                      <label for="lastName" class="text-dark">LAST NAME</label><br>
                      <input class="form-control" formControlName="lastName" type="lastName" id="lastName" placeholder="Last Name">
                  </div>
                      <div class="form-group">
                          <label for="email" class="text-dark">EMAIL</label><br>
                          <input class="form-control" formControlName="email" type="email" id="email" placeholder="Email">
                      </div>
                      <div class="form-group">
                          <label for="password" class="text-dark">PASSWORD</label><br>
                          <input class="form-control" formControlName="password" type="password" id="password" placeholder="Password">
                      </div>
                      <div class="form-group">
                          <button type="submit" name="submit" class="w-100 btn btn-dark btn-md" style="background-color: #353b48; border-radius: 25px;">REGISTER</button>
                      </div>
                      <div class="form-group d-flex align-items-center">
                        <div class="d-flex justify-content-start w-50">
                            <a href="/login" class="w-50 text-dark text-left">Zaten Üyeyim</a>
                        </div>
                  </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  components:{
  },
  created(){
    
  },
  computed: {
    
  },
}
</script>




<style scoped>

    #register {
    margin: 0;
    padding: 0;
    background-color: #353b48;;
    height: 100vh;
  }
    #register .container #register-row #register-column #register-box {
      margin-top: 200px;
      max-width: 700px;
      height: 520px;
      border: 1px solid #9C9C9C;
      border-radius: 10px;
      background-color: #EAEAEA;
    }
    #register .container #register-row #register-column #register-box #register-form {
      padding: 20px;
    }
    #register .container #register-row #register-column #register-box #register-form #register-link {
      margin-top: -85px;
    }

    #register {
      height: 100%;
      font-family: "Montserrat", sans-serif;
    }
    
    #register{
      height: 939px;
      background-size: cover;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
    }

</style>
