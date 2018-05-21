<template lang="html">
  <div class="container">
    <div class="row" style="margin-top:50px;" v-for='data in allQuestion'>
      <div class="col s12 m12">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <router-link :to="{name: 'answer', params: {id: data._id}}">
              <span class="card-title"> <a style="cursor:pointer;" @click='openQuestion(data._id)'>{{ data.title }}</a> </span>
            </router-link>
            <hr>
            <h6>Description :</h6>
            <p style="color: #f39c12">{{ data.description }}</p>
            <hr>
            <h6>From: {{ data.UserId.email }}</h6>
            <h6><i class="material-icons">thumb_up</i> {{ data.votes.length }} &nbsp;&nbsp;&nbsp; <i class="material-icons">thumb_down</i> {{ data.downvotes.length }}</h6>
            <h6></h6>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="container-modal white z-depth-2">
        <h4 style="text-align:center; padding-top:25px;">Post New Question</h4>
      	<div id="login" class="col s12">
      		<form class="col s12">
      			<div class="form-container">
      				<div class="row">
                <br>
      					<div class="input-field col s12">
      						<input id="text" type="text" v-model='question.title'>
      						<label for="text">_Title</label>
      					</div>
      				</div>
              <div class="input-field col s12">
                <textarea id="textarea" class="materialize-textarea" v-model='question.detail'></textarea>
                <label for="textarea">Question</label>
              </div>
      				<br>
      				<center>
                <a class="btn modal-action modal-close waves-effect waves-green" >Cancel</a>
      					<button class="btn waves-effect waves-light teal" type="submit" @click='addNewQuestion($event)'>Post</button>
      					<br>
      					<br>
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
    if (!localStorage.hasOwnProperty('authorization')) {
      window.location.replace('/');
    } else {
      this.getAllQuestion()
    }
  },
  data(){
    return {
      allQuestion: null,
      email: '',
      question: {
        id: null,
        title: '',
        detail: ''
      }
    }
  },
  methods: {
    addNewQuestion(event){
      event.preventDefault()

      const token = localStorage.getItem('authorization')

      const newQuestion = {
        question: this.question,
        token
      }

      axios({
        method: 'post',
        url: 'http://localhost:3000/question',
        data: newQuestion
      })
      .then(() => {
        this.question.title = ''
        this.question.detail = ''
        swal({
          title: "Yosh!",
          text: "Successfully post Question",
          icon: "success",
        });
        this.getAllQuestion()
      })
      .catch(err => {
        console.log(err);
      })
    },

    getAllQuestion(){

      const token = localStorage.getItem('authorization')
      axios({
        method: 'post',
        url: 'http://localhost:3000/question/'
      })
      .then(dataQuestion => {
        this.allQuestion = dataQuestion.data
      })
      .catch(err => {
        console.log(err);
      })

    },

    openQuestion(question_id){

      axios({
        method: 'get',
        url: `http://localhost:3000/question/${question_id}`
      }).then((data) => {
        this.question.detail = data.data
      })

    }
  }
}
</script>

<style scoped>
body{
  background-color: #00ff00;
}
.container{
  padding-left: 220px;
  width: 1000px;
}
.modal {
  overflow: hidden;
  width: 35%;
  height: 600px;
  margin-top: 0px;
  padding: 0 0 0 0;
}

.container-modal{
  margin: 0 0 0 0;
  width: 455px;
  height: 100%;
}

h5
{
	font-weight: 400;
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
