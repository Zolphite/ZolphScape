<template>
    <div class="users-heading">
        <h1 class="users-title text-center">User Profiles</h1>
        <div class="border-top border-warning w-50 mx-auto my-3">

        </div>
        <h3 class="users-about text-center">These users are the backbone of our network.</h3>
    </div>
    <div class="content-section">
        <div class="content-card-space" v-for="(item, index) in users_data"  v-bind:key="item">
            <div class="container content-card">
                <div class="content-card-display-img">
                    <img v-if="item.profile_image == null" src="../../static/assets/defaults/default_profile.png" />
                    <img v-else :src="'data:image/png;base64,'+item.profile_image" />
                </div>
                <div class="row mt-3">
                    <div class="col-md-6 text-center xxl-text">
                        Created: 0
                    </div>
                    <div class="col-md-6 text-center xxl-text">
                        Tracked: {{index}}
                    </div>
                </div>
                <label class="border-top border-warning w-100 mx-auto">

                </label>
                <label class="content-card-title text-center w-100 mb-2 text-capitalize">{{ item.displayName }}</label>

                <p class="users-desc text-center" ref="user_desc" v-if="item.description != null">{{item.description}}</p>
                <p class="users-desc text-center" ref="user_desc" v-else>no description</p>
                <router-link :to="'/profile/' +false+'/'+ item.uid" class="btn btn-warning view-profile-btn btn-sm">View Profile</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../utilities/firebase'
import axios from 'axios'
export default {
    data() {
        return {
            users_data: [
            ]
        };
    },
    props:['is_signed_in','authUser'],
    mounted () {
        this.loadUserProfileData()
    }, 
    methods: {
        loadUserProfileData()
        {
            firebase.storage().ref('users/')
            .listAll()
            .then((res) => {
                res.prefixes.forEach((folderRef) => {
                    // SubFolders
                    firebase.storage().ref('users/' + folderRef.name + '/profileData.json').getDownloadURL().then((savedDataURL) => {
                        axios.get(savedDataURL)
                        .then((response) => {
                            // console.log(response.data)
                            this.users_data.push(response.data);
                        });
                        console.log('Load Worked');
                    }).catch(error => {
                        console.log('Load failed' + error);
                    })
                });
                res.items.forEach((itemRef) => {
                    console.log(itemRef)
                });
            }).catch((error) => {
                console.log(error + 'Error getting users data')
            });
        },
    },
}
</script>

<style scoped>
.users-heading {
    /* background-image: linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(161, 161, 161, 0.1)); */
    padding: 30px 0;

}

.content-card-space{
    height: 100%;
    width: 100%;
    position: relative;
}
/* Start of CSS Content Section */
.content-section {
    /* background-image: linear-gradient(to bottom, rgb(255, 255, 255), rgba(173, 173, 173, 0.178)); */
    border: none;
    border-radius: 9px 9px 9px 9px; 
    height: 100vh;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    display: grid;
    grid-auto-flow: row ;
    grid-auto-rows: 550px ;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: unset;

    justify-items: center;
    align-items: center;
    padding: 10px;
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    margin-bottom: 20px;
}

/* --Works only for chromium stuff */
.content-section::-webkit-scrollbar {
    display: none;
}

/* Start of CSS Content Card */
.content-card {
    position: relative;
    overflow: hidden;
    float: center;
    /* width: 435px;
    height: 300px; */
    width: 90%;
    height: 90%;
    border-radius: 9px 9px 9px 9px;
    box-shadow: -1px 1px 8px 1px rgba(90, 84, 57, 0.6);
    border: 0px solid rgba(223, 219, 255, 0.8);
    transition: all .2s ease-in-out;
}

.content-card:hover {
    background-image: white;
    box-shadow: -2px 2px 9px 2px rgba(57, 83, 90, 1);
}

.content-card-title {
    color: rgb(230, 168, 0);
    float: left;
    font-size: 22px;
    transition: all .2s ease-in-out;
    pointer-events: none;
}

.content-card:hover .content-card-title{
    /* color: rgb(56, 56, 56); */
    transform: scale(1.05);

    /* font-size: 22px; */
    /* margin: 13px 12px; */
}

.content-card-display-img {
    overflow: hidden;
    margin: 0 auto;
    height: 160px;
    width: 75%;
    margin-top: 20px;
    box-shadow: -1px 1px 8px 4px rgba(90, 84, 57, 0.3);
}

.content-card-display-img img{
    width: 100%;
    height: 100%;
    opacity: .9;
    transition: all .2s ease-in-out;
}

.content-card:hover .content-card-display-img img{
    opacity: 1;
    transform: scale(1.02);
}

.users-desc {
    height: 25%;
    width: 100%;
    display: block;
    /* float: left; */
    overflow: hidden;
    text-overflow: ellipsis;
}

.view-profile-btn {
    position: absolute;
    bottom: 0;
    display: block;
    width: 50%;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-bottom: 22px;
}
/* End of Content Card */

/* Devices under 1600px (4k) */
@media screen and (min-width: 1600px) {
    .content-section {
        grid-auto-rows: 850px ;
    }
    .content-card-display-img {
        height: 300px;
    }
    .view-profile-btn {
        font-size: 2rem!important;
    }
    .xxl-text{
        font-size: 1.5rem!important;
    }
}
/* Devices under 1199px (xl) */
@media (max-width: 1199.98px) {
    /* .content-card-title {
        font-size: 14px;
    } */
}
/* Devices under 768px (md) */
@media (max-width: 768.98px) {
    .content-section {
        grid-template-columns: 1fr 1fr;
    }
}

/* Devices under 576px (md) */
@media (max-width: 575.8px) {
    .content-section {
        grid-template-columns: 1fr;
    }
    .explore-about {
        font-size: 20px;
        margin: 0 20px;
    }
}

/* mobile medium */
@media (max-width: 376px) {

}

/* mobile small */
@media (max-width: 321px) {

    .explore-about {
        font-size: 18px;
    }
}
</style>