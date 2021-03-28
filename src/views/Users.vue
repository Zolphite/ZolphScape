<template>
    <div class="users-heading">
        <h1 class="users-title text-center">User Profiles</h1>
        <div class="border-top border-warning w-50 mx-auto my-3">

        </div>
        <h3 class="users-about text-center">These users are the backbone of our network.</h3>
    </div>
    <div class="content-section">
        <div class="container content-card" v-for="(item, index) in users_data"  v-bind:key="item">
            <div class="content-card-display-img">
                <img v-if="item.profile_image == null" src="../../static/assets/defaults/default_profile.png" />
                <img v-else :src="'data:image/png;base64,'+item.profile_image" />
            </div>
            <div class="row mt-3">
                <div class="col-md-6 text-center">
                    Created: 0
                </div>
                <div class="col-md-6 text-center">
                    Tracked: {{index}}
                </div>
            </div>
            <label class="border-top border-warning w-100 mx-auto">

            </label>
            <label class="content-card-title text-center w-100 mb-2 text-capitalize">{{ item.displayName }}</label>

            <label class="users-about text-center w-100" v-if="item.description != null">{{item.description}}</label>
            <label class="users-about text-center w-100" v-else>no description</label>
            <router-link :to="'/profile/' + item.uid" class="btn btn-warning view-profile-btn btn-sm">View Profile</router-link>
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
    props: ['is_signed_in'],
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

.content-section {
    background-image: linear-gradient(to bottom, rgba(252, 251, 240, 0.3), rgba(197, 196, 193, 0.5));
    border: none;
    border-radius: 9px 9px 9px 9px; 
    height: 100vh;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

/* --Works only for chromium stuff */
.content-section::-webkit-scrollbar {
    display: none;
}

/* Start of CSS Content Section */
.content-section {
    background-image: linear-gradient(to bottom, rgb(255, 255, 255), rgba(173, 173, 173, 0.178));
    border: none;
    border-radius: 9px 9px 9px 9px; 
    height: 100vh;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

/* --Works only for chromium stuff */
.content-section::-webkit-scrollbar {
    display: none;
}

/* Start of CSS Content Card */
.content-card {
    position: relative;
    overflow: hidden;
    float: left;
    width: 308px;
    height: 350px;
    margin: 40px 36px;
    border-radius: 9px 9px 9px 9px;
    box-shadow: -1px 1px 8px 1px rgba(90, 84, 57, 0.6);
    border: 0px solid rgba(223, 219, 255, 0.8);
    transition: all .2s ease-in-out;
}

.content-card:hover {
    background-image: white;
    box-shadow: -2px 2px 9px 2px rgba(57, 83, 90, 1);
}

.content-card-bottom {
    position: absolute;
    bottom: 0px;
    height: 50px;
    width: 100%;
    background-image: linear-gradient(to right, rgba(250, 226, 89, 0.514), rgba(250, 180, 30, 0.404));
}

.content-card-bottom {
    cursor: pointer;
}

.content-card:hover .content-card-bottom {
    background-image: linear-gradient(to left, rgba(250, 226, 89, 0.822), rgba(250, 180, 30, 0.678));
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

.content-card-followed {
    pointer-events: none;
    color: rgba(141, 141, 141, 0.5);
    float: right;
    font-weight: none;
    font-size: 14px;
    margin: 12px 15px;
    padding: 3px 8px;
    border: 2px solid rgba(255, 167, 251, 0.3);
    border-radius: 9px 9px 9px 9px;
    transition: all .2s ease-in-out;
}
.content-card:hover .content-card-followed{
    color: rgba(68, 68, 68, 0.9);
    /* font-size: 15px; */
    /* padding: 2.5px 7.5px; */
    /* margin: 12px 12px; */
    transform: scale(1.10);
    border: 2px solid rgba(252, 197, 249, 0.5);
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

.content-card-delete {
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 16px;
    margin: 5px;
    color: #ECA71E;
    transition: all .2s ease;
}
.content-card:hover .content-card-delete:hover {
    color: rgb(255, 56, 56);
    font-size: 20px;

}
.content-card:hover .content-card-delete{
    margin: 10px;
    cursor: pointer;
}

.view-profile-btn {
    display: block;
    width: 50%;
    margin: 0 auto;
}
/* End of Content Card */

/* Devices under 1199px (xl) */
@media (max-width: 1199.98px) {
    .content-card {
        width: 269px;
        height: 350px;
    }
    /* .content-card-title {
        font-size: 14px;
    } */
}
/* Devices under 768px (md) */
@media (max-width: 768.98px) {
    .content-card {
        width: 312px;
        height: 350px;
    }
}

/* Devices under 576px (md) */
@media (max-width: 575.8px) {
    .content-card {
        width: 355px;
        height: 385px;
    }
    .explore-about {
        font-size: 20px;
        margin: 0 20px;
    }
}

/* mobile medium */
@media (max-width: 376px) {
    .content-card {
        width: 300px;
    }
}

/* mobile small */
@media (max-width: 321px) {
    .content-card {
        width: 252px;
    }
    .explore-about {
        font-size: 18px;
    }
}
</style>