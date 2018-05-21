<template lang="html">
  <div class="nav">
    <br>
    <h4 style="text-align:center; color:white; margin-top:5px;">Always</h4>
    <h4 style="text-align:center; color:white; margin-bottom:26px;">Stuckoverflow.</h4>
      <hr>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" class="validate">
          <label for="email">Search</label>
        </div>
      </div>
      <hr>
      <br>
      <div class="" style="margin-top:50px;">
        <a class="waves-effect waves-light btn-large modal-trigger" data-target="modal1" style="width:95%; margin-left:5px;">New Question</a>
        <br>
        <a class="waves-effect waves-light btn-large" style="width:95%; margin-left:5px; margin-top:5px;">Top Rated</a>
        <br>
        <div class="" style=" margin-top: 29%;">
          <hr>
          <a class="waves-effect waves-light btn-large" style="width:95%; margin-left:5px;" @click='logout'>Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout(){
      swal("Are you sure?", {
        dangerMode: true,
        buttons: true,
      })
      .then((accept) => {
        if (accept) {

          localStorage.removeItem('authorization');
          this.$router.push('/')
          location.reload();
        }
      })
    }
  }
}
</script>

<style scoped>
.nav {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #222f3e;
    overflow-x: hidden;
    padding-top: 20px;
}

.sidenav a {
    padding: 6px 6px 6px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.main {
    margin-left: 200px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

</style>
