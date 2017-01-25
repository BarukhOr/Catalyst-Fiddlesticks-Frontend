<template>
    <div class="col-sm-12 col-md-5">
        You have {{ count_todayslessons }} Lessons scheduled for today
    </div>
</template>

<script>
    export default{
        name: "lessons_today",
        data: function(){
            return{
                count_todayslessons: 2
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