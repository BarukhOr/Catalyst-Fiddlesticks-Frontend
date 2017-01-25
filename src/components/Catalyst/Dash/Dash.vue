<template>
    <div id="dash">
        <appNavbar></appNavbar>

        <div id="page-content">
            <div v-if="isCoach">
                <appCoachDash></appCoachDash>
            </div>

            <div v-if="isStudent">
                <appStudentDash></appStudentDash>
            </div>

            <div class="container">
                <h3>Shared Pages</h3>
                <div class="row">
                    <appWeeksAvailabilities></appWeeksAvailabilities>
                </div>     
            </div>      
        </div>

        <appFooter></appFooter>
    </div>
</template>

<script>
    import navbar from "../Shared/Navbar.vue";
    import footer from "../Shared/Footer.vue";
    import studentDash from "./Student/Main.vue";
    import coachDash from "./Coach/Main.vue";

    import getWeeksAvailabilities from "./Shared/GetWeeksAvailabilities.vue";

    export default{
        name: "login",
        data: function(){
            return{
                isStudent: true,
                isCoach: true
            }
        },
        props: [],
        components: {
            appNavbar: navbar,
            appFooter: footer,
            appCoachDash: coachDash,
            appStudentDash: studentDash,
            appWeeksAvailabilities: getWeeksAvailabilities
        },
        methods: {
            isStudent: function(){
                return isStudent;
            }, 
            isCoach: function(){
                return isCoach;
            }
        }
    }
</script>