<template>
    <!-- Start Top Bar -->
    <div class="top-bar">
        <div class="container-fluid" v-if="is_signed_in==false">
            <!-- <div class="col-12 text-end">
                <p><a href="tel:+18885555555">Call us at 1 (888) 555-5555</a></p>
            </div> -->
            <div class="row text-end">
                <div class="col-12">
                    <router-link to="/login" class="topbar-links px-2">Login</router-link>
                    <router-link to="/register" class="topbar-links px-2">Register</router-link>
                </div>
            </div>
        </div>
        <div class="container-fluid" v-if="is_signed_in==true">
            <div class="row text-end">
                <div class="col-12">
                    <a :href="'/profile/' + this.authUser.uid" class="topbar-links px-4">My Profile</a>
                    <a class="topbar-links" @click="LogoutUser">Log out</a>
                </div>
            </div>
        </div>
    </div>
    <!-- End Top Bar -->

    <!-- Start Nav Bar -->
    <nav class="navbar bg-light navbar-light navbar-expand-lg">
        <div class="container-fluid">
            <a href="/" class="navbar-brand"><img src="../assets/imgs/logo.png" alt="ZolphScapeLogo" title="ZolphScapeLogo"></a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav" style="margin-left: auto" >
                    <li class="nav-item">
                        <router-link to="/" class="nav-link"><div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</div></router-link>
                        <!-- <a href="/" class="nav-link">Home</a> -->
                    </li>
                    <li class="nav-item">
                        <router-link to="/about"  class="nav-link"> <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</div></router-link>
                        <!-- <a href="/about" class="nav-link">About</a> -->
                    </li>
                    <!-- <li class="nav-item"><a href="" class="nav-link">Contact Us</a></li> -->
                    <li class="nav-item"><router-link to="/users" class="nav-link"><div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">User Profiles</div></router-link></li>
                    <li class="nav-item"><router-link to="/explore" class="nav-link"><div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Explore</div></router-link></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- End Nav Bar  -->
</template>

<script>
import firebase from '../utilities/firebase'
export default {
    name: 'Top-Area',
    props: ['is_signed_in','authUser'],
    methods: {
        LogoutUser () {
            firebase.auth().signOut().then(() => {
                console.log('Logged out');
                this.$router.push("/");
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style>
/* Start Top Bar CSS */
.top-bar {
    background: #ECA71E;
    height: 2.8rem;
    padding: .5rem 0;
}
.top-bar a {
    color: white;
    text-decoration: none;
    font: 1.1rem;
}
/* End Top Bar CSS */

/* Start Navbar CSS */
.navbar-brand img {
    height: 3rem;
}

.navbar {
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: .1rem;
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .1);
    z-index: 2;
}

.nav-link {
    color: #5b5555!important;
}

.nav-item {
    margin: auto!important;
    padding: .5rem;
}

.nav-link.active,
.nav-link:hover {
    color: #ECA71E!important;
}

#navbarResponsive {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

}

.topbar-links:hover {
    color: rgb(65, 65, 255);
    cursor: pointer;
}


/* End Navbar CSS */
</style>