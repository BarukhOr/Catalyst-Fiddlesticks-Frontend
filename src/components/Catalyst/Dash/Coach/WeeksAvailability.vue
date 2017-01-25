<template>
    <div class="col-sm-12 col-md-5">
        You have set aside {{ weeks_availability }} availabilities this week

        <div v-if="availableAlert()">
            Dont forget to log your available time slots ... or something
        </div>

        <button>View your availabilities</button>
    </div>   
</template>

<script>
    export default{
        name: "week_availability",
        data: function(){
            return{
                weeks_availability: 20
            }
        },
        props: [],
        components: {
        
        },
        methods: {
            availableAlert: function(){
                this.weeks_availability > 0 ? false : true
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