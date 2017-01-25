<template>
    <div class="col-sm-12 col-md-5">
        You have {{ thisweek_bookedlessons }} lessons booked for the week
        <button>View all your lesosns for the week</button>
    </div>
</template>

<script>
    export default{
        name: "week_booked",
        data: function(){
            return{
                thisweek_bookedlessons: 5
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
    div {
        background: #fff;
        border-radius: 6px;
        padding: 20px;
    }
</style>