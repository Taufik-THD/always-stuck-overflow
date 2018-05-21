<template>
  <div class="body-background">
    <div id="modal1" class="modal">
      <div class="container white z-depth-2">
      	<ul class="tabs teal">
      		<li class="tab col s3"><a class="white-text active" href="#login" >login</a></li>
      		<li class="tab col s3"><a class="white-text" href="#register" >register</a></li>
      	</ul>
      	<div id="login" class="col s12">
      		<form class="col s12">
      			<div class="form-container">
      				<div class="row">
                <br>
      					<div class="input-field col s12">
      						<input id="email" type="email" class="validate" v-model='email'>
      						<label for="email">Email</label>
      					</div>
      				</div>
      				<div class="row">
      					<div class="input-field col s12">
      						<input id="password" type="password" class="validate" v-model='password'>
      						<label for="password">Password</label>
      					</div>
      				</div>
      				<br>
      				<center>
                <a class="btn modal-action modal-close waves-effect waves-green" >Cancel</a>
      					<button class="btn waves-effect waves-light teal" type="submit" @click='login'>Connect</button>
      					<br>
      					<br>
      				</center>
      			</div>
      		</form>
      	</div>
      	<div id="register" class="col s12">
      		<form class="col s12">
      			<div class="form-container">
      				<div class="row">
                <br>
      					<div class="input-field col s12">
      						<input type="email" class="validate" v-model='email'>
      						<label for="email">Email</label>
      					</div>
      				</div>
      				<div class="row">
      					<div class="input-field col s12">
      						<input  type="password" class="validate" v-model='password'>
      						<label for="password">Password</label>
      					</div>
      				</div>
      				<center>
                <br>
      					<button class="btn waves-effect waves-light teal" type="submit" @click='register'>Submit</button>
      				</center>
      			</div>
      		</form>
      	</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created(){

  },
  data(){
    return {
      email: '',
      password: ''
    }
  },
  name: 'Homepage',
  methods: {
    login(event){
      event.preventDefault()

      const user = {
        email: this.email,
        password: this.password
      }

      axios({
        method: 'post',
        url: 'http://localhost:3000/users',
        data: user
      })
      .then((response) => {
        user.email = ''
        user.password = ''
        const token = JSON.stringify(response.data.jwtToken)
        localStorage.setItem('authorization', token);
        this.$router.push('/questions')
        location.reload();
      })
      .catch(err => {
        this.email=''
        this.password=''
        swal({
          text: "email/password is wrong!",
          icon: "error",
        });
      })
    },

    register(event){
      event.preventDefault()

      const user = {
        email: this.email,
        password: this.password
      }

      axios({
        method: 'post',
        url: 'http://localhost:3000/users/register',
        data: user
      })
      .then((response) => {
        this.email = ''
        this.password = ''
        swal({
          title: "Yosh!",
          text: "Successfully register your account",
          icon: "success",
        });
      })
      .catch(err => {
        this.email=''
        this.password=''
        swal({
          text: "email is already exists",
          icon: "error",
        });
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}

.body-background{
  text-align: left;
  background-image: url('http://www.geventiwedding.it/wp-content/uploads/2017/01/Work-img-articolo2.jpg');
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
}
.modal {
  overflow: hidden;
  width: 35%;
  height: 600px;
  margin-top: 0px;
  padding: 0 0 0 0;
}

h5
{
	font-weight: 400;
}

.container{
	margin: 0 0 0 0;
	width: 455px;
	height: 100%;
}

.tabs .indicator
{
	background-color: #1e2121;
	opacity: 0.3;
}

.form-container
{
	padding: 40px;
	padding-top: 10px;
}

.confirmation-tabs-btn
{
	position: absolute;
}
element.style {
    z-index: 1003;
    display: block;
    opacity: 1;
    top: 1%;
}
</style>
