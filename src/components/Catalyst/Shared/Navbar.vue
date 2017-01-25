<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <!-- TODO: drop down on responsive view does not drop down ...-->
        <!-- TODO: Push notification field to the right -->
        <div id="nav-container" class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="">Catalyst Coaching</a>
            </div>

            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/newsfeed" tag="li" active-class="active" exact><a>Home</a></router-link>
                    <li class="dropdown">
                        <router-link to="" tag="a" active-class="active" class="dropdown-toggle" exact data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Sessions <span class="caret"></span>
                        </router-link>
                        <ul class="dropdown-menu">
                            <router-link to="/sessions" tag="li" exact><a>Available</a></router-link>
                            <router-link to="/sessions" tag="li" exact><a>Previous</a></router-link>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <router-link to="" tag="a" active-class="active" class="dropdown-toggle" exact data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Profiles <span class="caret"></span>
                        </router-link>
                        <ul class="dropdown-menu">
                            <router-link to="/profile" tag="li" active-class="active" exact><a>My Profile</a></router-link>
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header"></li>
                            <router-link to="/studentprofiles" tag="li" active-class="active" exact><a>Student Profiles</a></router-link>
                            <router-link to="/coachprofiles" tag="li" active-class="active" exact><a>Coach Profiles</a></router-link>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <router-link to="" tag="a" class="dropdown-toggle" exact data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            You have {{ notifications.length }} new notifications<span class="caret"></span>
                        </router-link>
                        <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                        <ul class="dropdown-menu">
                            <li v-for="item in notifications"><a href="#">{{item}}</a></li>
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header"></li>
                            <router-link to="/notifications" tag="li" exact><a>All notifications</a></router-link>
                        </ul>
                    </li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav>
</template>

<script>
    export default{
        name: "navbar",
        data: function(){
            return{
                notifications:['hi','hello','whatsup']
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
    nav {
        height: 8.09%;
    }
    #nav-container{
        margin-left: 2%
    }
</style>
