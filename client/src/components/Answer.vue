<template lang="html">
  <div class="">
    <a class="waves-effect waves-light btn-large" style="position: fixed; padding-right:50px; margin-left:92%; margin-top:35%; background-color:#E91E63" @click="goBack()">Back</a>

    <div class="container">

      <h4 style="margin-top: 10%;">From : {{ user }}</h4>
      <hr>

      <h3 style="color: #44bd32"><u>{{ title }}</u></h3>

      <p style="font-size: 20px;">{{ question }}</p>
      <div class="" style="text-align:right;">
        <a class="waves-effect waves-light btn-large" @click='upvote'><i class="material-icons">thumb_up</i>{{ votes }}</a>
        <a class="waves-effect waves-light btn-large" @click='downvote'><i class="material-icons">thumb_down</i>{{ downvotes }}</a>
      </div>
      <br><br><br>

      <div class="input-field col s12">
        <i class="material-icons prefix">feedback</i>
        <textarea id="icon_prefix" type="textarea1" class="materialize-textarea" v-model='comment' v-on:keyup.enter='addAnswer'></textarea>
        <label for="textarea1">Enter Your Answer Here !</label>
      </div>
      <hr>
      <h4>Answers :</h4>
      <hr>
      <div class="row" v-for='answer in answers'>
        <div class="col s12 m12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">From : {{ answer.UserId.email }}</span>
              <hr>
              <p> {{ answer.comment }} </p>
              <div class="" style="text-align:right;">
                <a class="waves-effect waves-light btn-large"><i class="material-icons">thumb_up</i>{{ answerVotes }}</a>
                <a class="waves-effect waves-light btn-large"><i class="material-icons">thumb_down</i>{{ answerDownVotes }}</a>
              </div>
            </div>
          </div>
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
      this.getDetailQuestion()
      this.getAnswer()
    }
  },
  data(){
    return {
      user: '',
      title: '',
      question: '',
      votes: '',
      downvotes: '',
      answerVotes: '',
      answerDownVotes: '',
      answers: null,
      comment: ''
    }
  },
  methods: {
    getDetailQuestion(){

      axios({
        method: 'get',
        url: `http://localhost:3000/question/detail/${this.$route.params.id}`
      })
      .then((data) => {
        this.user = data.data[0].UserId.email
        this.title = data.data[0].title
        this.question = data.data[0].description
        this.votes = data.data[0].votes.length
        this.downvotes = data.data[0].downvotes.length
        this.answerVotes = data.data[0].answerVotes
        this.answerDownVotes = data.data[0].answerDownVotes
      })

    },

    goBack(){
      this.$router.push('/questions')
    },

    getAnswer(){

      axios({
        method: 'get',
        url: `http://localhost:3000/answer/${this.$route.params.id}`
      })
      .then(data => {
        this.answers = data.data.data
      })

    },

    addAnswer(){

      const token = localStorage.getItem('authorization')
      const newComment = {
        comment: this.comment,
        token
      }

      axios({
        method: "post",
        url: `http://localhost:3000/answer/${this.$route.params.id}`,
        data: newComment
      })
      .then((data) => {
        this.comment = ''
        this.getDetailQuestion()
        this.getAnswer()
      })

    },

    upvote(){

      const UserToken = localStorage.getItem('authorization')

      const user = {
        token: UserToken
      }

      axios({
        method: 'post',
        url: `http://localhost:3000/question/detail/upvote/${this.$route.params.id}`,
        data: user
      })
      .then((success) => {
        this.getAnswer()
        location.reload();
      })

    },

    downvote(){

      const UserToken = localStorage.getItem('authorization')

      const user = {
        token: UserToken
      }

      axios({
        method: 'post',
        url: `http://localhost:3000/question/detail/downvote/${this.$route.params.id}`,
        data: user
      })
      .then((success) => {
        this.getAnswer()
        location.reload();
      })

    },

    upAnswerVote(){

      console.log('belom');

    },

    downAnswerVote(){

      console.log('belom');

    }

  }

}
</script>

<style scoped>
body{
  background-color: #747d8c;
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
