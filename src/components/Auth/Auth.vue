<template>
    <div id="auth">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4 authForm">
                    <h2 class="text-center">Catalyst Coaching</h2>
                    <transition name=fade>
                      <router-view></router-view>
                  </transition>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default{
        name: "auth",
        data: function(){
            return{

            }
        },
        props: [],
        components: {

        },
        methods: {

        }
    }
</script>

<style scoped>
    #auth {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        height: 70vh;
    }
    .authForm {
        background: #fff;
        padding-bottom: 15px;
        padding-top: 10px;
        border-radius: 10px;
    }
</style>
