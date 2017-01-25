<template>
<div class="">
  <h3 class="text-center">Login</h3>

  <input type="text" class="form-control m-b-15" placeholder="Email" v-model="user.email">
  <input type="password" class="form-control" placeholder="Password" v-model="user.password">

  <hr>

  <button class="btn btn-lg btn-primary btn-block m-b-15" @click="login">Sign in!</button>

  <hr>

  <!-- TODO: Add reset password functionality -->
  <p class="text-center">
    If you have forgotten your password, please contact an admin via discord.
    The ability to change your password will be added in a future update.
  </p>

  <!-- Login should return status of 422? so that failed api requests can return 401 for unauthorized-->
</div>
</template>

<script>
export default{
  name: "login",
  data: function(){
    return{
      user:{
        email:"demostudent@script.io",
        password:"defaultPassword!PleaseChange"
      }
    }
  },
  props: [],
  components: {

  },
  methods: {
    login: function(){
      console.log(this.user);
      this.$http.post('auth', this.user)
          .then(function(response){
            alertify.success("Successful Login");
            this.$auth.setToken(response.body.token, Date.now() + 43200000); // + 12 hours
            this.$router.push('/newsfeed');
          })
          .catch(function(error){

          })
    }
  }
}
</script>

<style scoped>
div{

}
</style>
