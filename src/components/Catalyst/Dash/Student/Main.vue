<template>
  <div>
    <h3>Greetings Lowly Student</h3>
    <p>Main Student Display thingy</p>

    <div class="container">
        <div class="row">
            <appBookedLessons></appBookedLessons>
        </div>
    </div>
  </div>
</template>

<script>
    import bookedLessons from "./BookedLessons.vue";
    import getWeeksAvailabilities from "./GetWeeksAvailabilities.vue";

    export default{
        name: "main",
        data: function(){
            return{
                
            }
        },
        props: [],
        components: {
            appBookedLessons: bookedLessons,
            appWeeksAvailabilities: getWeeksAvailabilities
        },
        methods: {

        }
    }
</script>