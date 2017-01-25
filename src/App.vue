<template>
    <div id="app_main_div">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {

        },
        data: function(){
            return {

            }
        }
    }
</script>

<style>
    body, html, #app_main_div{
        height: 100%;
    }
    html{
        position: relative;
        min-height: 100%
    }
    body {
        background: linear-gradient(to left, #d0cdd4 , #b1a5af);
        /*background-color: #e0dede;*/
        color: #333;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        margin-bottom: 60px
    }
    footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        background-color: #f5f5f5
    }
    .container .text-muted {
        margin: 20px 0
    }
    code {
        font-size: 80%
    }
    #page-content{
        min-height: 95vh;
        margin-top: 1%;
        padding: 60px 15px 0;
    }
    .fade-enter-active {
        transition: opacity .5s;
        opacity: 1;
    }
    .fade-enter {
        opacity: 0;
    }
    .fade-leave {
        display: none;
    }
    .fade-leave-active {
        display: none;
    }

    .scale-enter-active {

    }
    .scale-enter {

    }
    .scale-leave {
        transform: scale(1, 1);
    }
    .scale-leave-active {
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
        transform: scale(0, 0);
        z-index: 20;
    }
    .m-t-20 {
        margin-top: 20px;
    }

    .m-b-20 {
        margin-bottom: 20px;
    }

    .m-t-15 {
        margin-top: 15px;
    }

    .m-b-15 {
        margin-bottom: 15px;
    }

    .m-t-0 {
        margin-top: 0;
    }

    .m-b-0 {
        margin-bottom: 0;
    }

    .no-margin {
        margin: 0;
    }
</style>