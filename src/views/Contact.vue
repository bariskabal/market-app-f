<template>
  <section id="contact">
  <div class="container">
      <div class="contact-top text-center wow fadeInDown">
          <h3>Contact Us</h3>
          <p class="paragraf">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          </p>
      </div>
      <form>
          <div class="row">
              <div class="col-md-6 wow fadeInLeft">
                  <input type="text" id="name" class="form-control" placeholder="YOUR NAME*">
                  <input type="text" id="email" class="form-control" placeholder="YOUR EMAIL*">
                  <input type="text" id="subject" class="form-control" placeholder="YOUR SUBJECT*">
              </div>
              <div class="col-md-6 wow fadeInRight">
                  <textarea id="textarea" class="form-control" placeholder="MESSAGE*"></textarea>
              </div>
          </div>
          <div class="row justify-content-center">
              <a  style="width:200px" href="/" type="submit" class="btn btn-lg btn1 text-white" value="SEND MESSAGE">SEND MESSAGE</a>
          </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
#contact{
	background-color: #000;
	height: 600px;
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	padding: 120px 0;
	color: #fff;
}
#name,#email,#subject,#textarea{
	width: 90%;
	height: 50px;
	margin-bottom: 26px;
	border-style: none;
	border-radius: 3px;
	padding-left: 20px;
	margin-left: 5%;
	font-weight: 700;
}
#textarea{
	height: 200px;
}
.btn1 {
	background-color: #fed136;
	border-style: none;
	text-transform: uppercase;
	font-size:18px;
	padding: 20px 40px;
}

.btn1:hover {
	background-color: #fff;
	color: #fed136 !important;
}
.paragraf {
	font-size: 16px;
	font-style: italic;
	margin-bottom: 70px;
	color:#777;
}
</style>