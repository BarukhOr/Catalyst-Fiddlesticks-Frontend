<template>
    <div>
        <h3>Welcome Great and Mighty Coach</h3>
        <p>Main Coach Display thingy</p>

        <div class="container">
            <div class="row">
                <appTodaysLessons></appTodaysLessons>
                <appWeeksLessons></appWeeksLessons>
                <appWeeksAvailability></appWeeksAvailability>
            </div>
        </div>
    </div>
</template>

<script>
    import lessonsToday from "./LessonsToday.vue";
    import weeksBookedLessons from "./WeeksBookedLessons.vue";
    import weeksAvailability from "./WeeksAvailability.vue";

    export default{
        name: "main",
        data: function(){
            return{
                
            }
        },
        props: [],
        components: {
            appTodaysLessons: lessonsToday,
            appWeeksLessons: weeksBookedLessons,
            appWeeksAvailability: weeksAvailability
        },
        methods: {

        }
    }
</script>