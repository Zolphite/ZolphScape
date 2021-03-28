<template>
    <top-area :is_signed_in="is_signed_in" :authUser="authUser"></top-area>
    <router-view :is_signed_in="is_signed_in"/>
    <bottom-area></bottom-area>
</template>

<script>
import axios from "axios";
import TopArea from './components/TopArea.vue';
import BottomArea from './components/BottomArea.vue';
import firebase from './utilities/firebase'

export default {
    name: 'App',
    data () {
        return {
            is_signed_in: false,
            authUser: {},
            test_back_end: ''
        }
    },
    components: {
        TopArea,
        BottomArea
    },
    mounted() {
        // this.TestBackEnd();
        this.firebaseAuthCheck();
    },
    methods: {

        TestBackEnd() {
            axios.get("/api/back_end").then((response) => {
                console.log(response.data);
                this.test_back_end = response.data;
                },
                (error) => {
                console.log(error);
                }
            );
        },
        firebaseAuthCheck()
        {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    console.log("Signed In")
                    this.is_signed_in = true;
                    this.authUser = user;
                    console.log(this.is_signed_in)

                } else {
                    console.log("Signed Out")
                    this.is_signed_in = false;
                    this.authUser = {};
                    console.log(this.is_signed_in)
                }
            });
        }
    }
}
</script>

<style>
/*-- Body Reset --*/
#app {
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
    color: #4d5257;
}

/*============= TOP BAR HEADER =============*/



/*============= NAVIGATION =============*/



/*============= CAROUSEL =============*/



/*---Change Carousel Transition Speed --*/


/*-- Carousel Content --*/



/*===== FIXED BACKGROUND IMG =====*/

.fixed-background {
    overflow: hidden; /*-- Correction for iOS --*/
}


/*-- Emoji Navbar --*/



/*============= FOOTER =============*/



/*============= SOCKET =============*/

/*-- Bootstrap Mobile Gutter Fix --*/
.row, .container-fluid {
    margin-left: 0px !important;
    margin-right: 0px !important;
}
</style>
