<template>
    <div class="col-sm-12 col-md-5">
        <h4>Maybe hide this if the user can not book anymore sessions</h4>
        There are {{ weeks_availability }} availabilities this week 
        <button @click="bookingPage">Book a session</button>
    </div>
</template>

<script>
    export default{
        name: "week_availability",
        data: function(){
            return{
                weeks_availability: 50
            }
        },
        props: [],
        components: {
        
        },
        methods: {
            bookingPage: function(){
                console.log("your request to redirect has been duly noted")
            }
        }
    }
</script>

<style scoped>
    div {
        background: #fff;
        border-radius: 6px;
        padding: 20px;
    }
</style>