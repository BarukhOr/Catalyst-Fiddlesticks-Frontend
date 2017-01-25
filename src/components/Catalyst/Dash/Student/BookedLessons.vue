<template>
    <div class="col-sm-12 col-md-5">
        <div v-if="!bookingAlert()">
            <p>You have booked {{ count }} lesson<span v-if="count>1">s</span> this week</p>
            <button @click="viewBookings">View Them</button>
        </div>
        <div v-if="bookingAlert()">
            <p>Alert: Please make sure that you book your lesson for the week</p>
        </div>
    </div>
</template>

<script>
    export default{
        name: "week_availability",
        data: function(){
            return{
                count: 1,
                weeks_availability: 20
            }
        },
        props: [],
        components: {
        
        },
        methods: {
            bookingAlert: function(){
                if(this.count < 1){
                    return true;
                }else { return false; }
            },
            viewBookings: function(){
                console.log("Your request to be redirected has been duly noted")
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