<template>
    <div class="explore-heading">
        <h1 class="explore-title text-center">Explore New Ideas</h1>
        <div class="border-top border-warning w-50 mx-auto my-3">

        </div>
        <h3 class="explore-about text-center">Find data that moves you. Like cards you enjoy. Follow cards you love.</h3>
    </div>

    <div class="content-section">
        <!-- <div class="spinner-border text-warning" role="status" >
            <span class="sr-only text-warning">Loading...</span>
        </div> // Use this incase font-awsome spinners have issues. This is how to
        implement bootstrap spinners-->
        <div class="fa-3x text-warning content-loading-spinner" v-if="is_card_data_loaded == false">
            <i class="fas fa-spinner fa-pulse"></i>
        </div>
        <div class="content-card" v-for="(item, index) in card_data"  v-bind:key="item">
            <div class="content-card-display-img">
                <img :src="'data:image/png;base64,'+item.image_path" />
            </div>
            <div class="content-card-bottom" @click="displayFrameData(item)"> 
                <label class="content-card-title">{{ item.title }}</label>
                <!-- <label class="content-card-followed">Linked: 0</label> -->
            </div>
            <div class="content-card-delete" @click="deleteCardData(index)"
            v-if="is_signed_in==true&&authUser.uid==item.creator_id"><i class="far fa-times-circle"></i></div>
        </div>
        <div class="add-card-space">
            <div class="content-add-card d-flex align-items-center" @mouseenter="is_showing_big_add=true" 
            @mouseleave="is_showing_big_add=false" 
            @click="is_displaying_add_content = true;add_new_card.creator_username = authUser.displayName;"
            v-if="is_signed_in==true">
                <h1 v-if="!is_showing_big_add" class="text-center">+</h1>
                <h1 v-else class="text-center">ADD</h1>
            </div>
        </div>
    </div>

    <!-- Start Card-Display -->
    <div class="card-display-shadow" v-if="is_displaying_card_content">
        <div class="card-display-delete" @click="is_displaying_card_content = false"><i class="far fa-times-circle"></i></div>
        <div class="card-display-background" v-if="is_displaying_card_content">
            <iframe class="card-display-frame" :srcdoc="target_display_frame_info" name="card-display"
            v-if="target_file_extention != 'pdf'"></iframe>
            <object class="card-display-frame" :data="target_display_frame_info" name="card-display"
            v-if="target_file_extention == 'pdf'"></object>
            <div class="card-display-bottom">
                <div class="container input-file-holder w-100">
                    <div class="input-file-name-cont w-100 text-center my-5">
                        <h3 class="w-100 my-3 text-white">Name: </h3>
                        <label type="text" class="h4 text-warning py-1 mx-3 border border-warning w-50 text-center rounded bg-white">
                            {{target_display_name}}
                        </label>
                    </div>
                    <div class="input-file-desc-cont w-100 text-center my-5">
                        <h3 class="w-100 my-3 text-white">Description: </h3>
                        <textarea readonly placeholder="No Description" v-model="target_display_description" class="py-1 w-75 border border-warning rounded text-center desc-text"></textarea>
                    </div>
                    <div class="input-file-creator-cont w-100 text-center my-5">
                        <h3 class="w-100 my-3 text-white">Creator: </h3>
                        <label class="py-1 w-50 border bg-white h4 text-capitalize text-warning border-warning rounded">
                            {{target_display_creator_username}}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Card-Display -->
    
    <!-- Start Add-Card-Display -->
    <div class="add-card-display-shadow" v-show="is_displaying_add_content">
        <div class="card-display-delete" @click="is_displaying_add_content = false;resetAddCardDisplay();"><i class="far fa-times-circle"></i></div>
        <div class="card-display-background" @click="is_displaying_card_content = false">
            <iframe class="card-display-frame" :srcdoc="target_add_display_frame_info" name="card-display"
            v-if="add_new_card.file_extention == 'html'"></iframe>
            <object class="card-display-frame" :data="target_add_display_frame_info" name="card-display"
            v-if="add_new_card.file_extention == 'pdf'"></object>
            <div class="add-card-display-bottom">
                <div class="container input-file-holder w-100">
                    <div class="row text-center input-file-bg">
                        <div class="col-md-6 my-3">
                            <img v-if="add_new_card.image_path != null" class="input-img-display border border-2 border-warning" :src="'data:image/png;base64,'+add_new_card.image_path" alt="Upload Image">
                            <img v-else class="input-img-display border border-2 border-warning" src="../../static/assets/defaults/default_profile.png" alt="Upload Image">
                            <div class="w-100">
                                <form action="" id="input-img-form">
                                    <input type="file" id="input-img" class="input-img" accept=".png, .jpeg, .jpg" @change="onAddImgSelected" required>
                                </form>
                                <label for="input-img" class="input-img-cont btn btn-primary">
                                    <i class="fas fa-image"></i> Upload Image
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex my-3">
                            <form action="" id="input-file-form">
                                <input type="file" id="input-content" class="input-file" accept=".html" @change="onAddCardSelected" required>
                            </form>
                            <label for="input-content" class="input-file-cont btn btn-primary align-middle">
                                <i class="fas fa-upload"></i> Upload Content
                            </label>
                        </div>           
                    </div>
                    <div class="input-file-name-cont w-100 text-center my-5">
                        <h3 class="w-100 my-3 text-white">Name: </h3>
                        <input v-model="add_new_card.title" type="text" class="py-1 mx-3 border border-warning w-50 text-center rounded name-text">
                    </div>
                    <div class="input-file-desc-cont w-100 text-center my-5">
                        <h3 class="w-100 my-3 text-white">Description: </h3>
                        <textarea v-model="add_new_card.description" class="py-1 w-50 border border-warning rounded desc-text"></textarea>
                    </div>
                    <div class="input-file-creator-cont w-100 text-center my-5">
                        <h3 class="w-100 my-3 text-white">Creator: </h3>
                        <label class="py-1 w-50 border bg-white h4 text-capitalize text-warning border-warning rounded">{{add_new_card.creator_username}}</label>
                    </div>
                    <div class="add-card-btn-cont w-100 d-flex justify-content-center">
                        <button class="add_card_button btn btn-warning text-uppercase" @click="onConfirmAddCard">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Add-Card-Display -->

    <!-- Start is-saving-spinner -->
    <!--  -->
    <div class="is-saving-cards-spinner" v-if="is_saving_cards == true">
        <div class="text-warning">
            <span>
                <i class="saving-text">saving...</i>
                <i class="fas fa-spinner fa-pulse"></i>
            </span>
        </div>
    </div>
    <!-- End is-saving-spinner -->
</template>

<script>
import axios from 'axios'
import firebase from '../utilities/firebase'
export default {
    data(){
        return {
            card_data: [
            ],
            add_new_card: {
                id: null,
                image_path: null,
                plotly_html: null,
                title: null,
                file_extention: null,
                file_name: null,
                description: null,
                creator_id: null,
                creator_username: null,
            },
            // Display Frame Stuff
            target_display_frame_info: null,
            target_file_extention: null,
            target_display_name: null,
            target_display_description: null,
            target_display_creator_username: null,
            is_displaying_card_content: false,
            // End Display Frame Stuff
            target_add_display_frame_info: null,
            target_add_image_info: null,
            // target_add_display_name: null,
            // target_add_content_description: null,
            is_showing_big_add: false,
            is_displaying_add_content: false,
            is_card_data_loaded: false,
            is_saving_cards: false,
        };
    },
    props:['is_signed_in','authUser'],
    mounted () {
        this.loadExploreCardsData();
    }, 
    methods: {
        onAddCardSelected(event)
        {
            console.log(event.target.files[0].name)
            const file = event.target.files[0];
            

            const name = event.target.files[0].name;
            const lastDot = name.lastIndexOf('.');

            const fileName = name.substring(0, lastDot);
            const ext = name.substring(lastDot + 1);

            const reader = new FileReader();

            reader.onload =  evt => {
                this.target_add_display_frame_info = evt.target.result;
                // console.log(evt.target.result);
            }
            // reader.readAsDataURL(file);
            
            if (ext == 'html')
            {
                reader.readAsText(file);
            }
            else if (ext == 'pdf')
            {
                reader.readAsDataURL(file);
            }

            this.add_new_card.title = fileName;
            this.add_new_card.file_extention = ext;
            this.add_new_card.file_name = name;
        },
        onAddImgSelected(event)
        {
            // console.log(event)
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload =  evt => {
                var result = evt.target.result;
                var pros_result = result.split(",")
                console.log(pros_result)
                this.add_new_card.image_path = pros_result[1];
            }
        },
        onConfirmAddCard()
        {
            this.add_new_card.plotly_html = this.target_add_display_frame_info;
            this.add_new_card.creator_id = this.authUser.uid;
            console.log(this.add_new_card);
            if(this.add_new_card.title == null || this.add_new_card.description == null)
            {
                alert('Error Adding Card: Please make sure all fields are filled and the proper files are being displayed');
                return;
            }
            let compareTitle = !this.add_new_card.title.trim().length;
            let compareDesc = !this.add_new_card.description.trim().length;
            if(this.add_new_card.plotly_html == null || this.add_new_card.image_path == null ||
                compareTitle == true || compareDesc == true)
            {
                alert('Error Adding Card: Please make sure all fields are filled and the proper files are being displayed');
                return;
            }
            const new_card = Object.assign({}, this.add_new_card);
            this.card_data.push(new_card);
            this.target_add_display_frame_info = null;
            this.is_displaying_add_content = false;
            // this.add_new_card.image_path = null;
            // this.add_new_card.plotly_html = null;
            // this.add_new_card.title = null;
            this.resetAddCardDisplay()
            this.saveExploreCardsData()
        },
        fetchCovidGraph()
        {
            // use axios to fetch data from backend api/test
            axios.get('/api/covid_graph')
            .then((response) => {
                // console.log(response)
                // var len = Object.keys(this.card_data).length
                // this.card_data[len] = response.data
                this.card_data.push(response.data)
                // console.log(response.data)
            });
        },
        deleteCardData(targetCardKey)
        {
            // console.log(targetCardKey);
            this.card_data.splice(targetCardKey, 1);
            this.saveExploreCardsData();
        },
        displayFrameData(targetCard)
        {
            this.target_display_frame_info = targetCard.plotly_html;
            this.target_file_extention = targetCard.file_extention;
            this.target_display_name = targetCard.title;
            this.target_display_description = targetCard.description;
            this.target_display_creator_username = targetCard.creator_username;
            this.is_displaying_card_content = true;
        },
        saveExploreCardsData()
        {
            if (this.authUser) {
                this.is_saving_cards = true;
                const processed_card_data = {'cards': this.card_data}
                console.log(processed_card_data);
                // convert your object into a JSON-string
                var jsonString = JSON.stringify(processed_card_data);
                // create a Blob from the JSON-string
                var new_blob = new Blob([jsonString], {type: "application/json"})
                firebase.storage().ref('explore/savedCards.json').put(new_blob).then(() =>{
                    this.is_saving_cards = false;
                    console.log('Save Worked');
                }).catch(error => {
                    this.is_saving_cards = false;
                    console.log('Save failed' + error);
                })
            } else {
                console.log('Error: No User Signed In')
            }
        },
        resetAddCardDisplay(){
            this.target_add_display_frame_info = null;
            this.target_add_image_info = null;
            this.add_new_card.image_path = null;
            this.add_new_card.plotly_html = null;
            this.add_new_card.title = null;
            this.add_new_card.creator_id = null;
            this.add_new_card.file_extention = null;
            this.add_new_card.description = null;
            this.add_new_card.creator_username = null;
            document.getElementById("input-img-form").reset();
            document.getElementById("input-file-form").reset();
        },
        loadExploreCardsData()
        {
            firebase.storage().ref('explore/savedCards.json').getDownloadURL().then((savedDataURL) => {
                axios.get(savedDataURL)
                .then((response) => {
                    console.log(response.data.cards)
                    this.card_data = response.data.cards;
                    this.is_card_data_loaded = true;
                });
                console.log('Load Worked');
            }).catch(error => {
                this.is_card_data_loaded = true;
                console.log('Load failed' + error);
            })
        },
    }
}
</script>

<style scoped>
.explore-heading {
    /* background-image: linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(161, 161, 161, 0.1)); */
    padding: 30px 0;
    box-shadow: 0 .3rem .3rem rgba(173, 173, 173, 0.1);
}

.explore-title {
    font-weight: bold;
}

.explore-about {
    margin: 0 100px;
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
    grid-auto-rows: 45% ;
    grid-template-columns: 1fr 1fr 1fr;
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

.content-card-bottom {
    position: absolute;
    bottom: 0px;
    height: 50px;
    width: 100%;
    background-image: linear-gradient(to right, rgba(255, 238, 140, 0.9), rgba(250, 191, 63, 0.9));
    cursor: pointer;
}

.content-card:hover .content-card-bottom {
    background-image: linear-gradient(to left, rgba(250, 226, 89, 0.822), rgba(250, 180, 30, 0.678));
}

.content-card-title {
    position: relative;
    color: rgba(0, 0, 0, 0.6);
    /* float: left; */
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    margin-left: 10px;
    font-size: 18px;
    transition: all .2s ease-in-out;
    pointer-events: none;
}

.content-card:hover .content-card-title{
    color: rgb(56, 56, 56);
    top: 30%;
    transform: scale(1.05);

    /* font-size: 22px;
    margin: 13px 12px; */
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
    height: 100%;
    width: 100%;
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


/* End of Content Card */

/* Start Add Card Section */
.add-card-space {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-items: center;
    align-items: center;
    /* flex-direction: column; */

}

.content-add-card {
    position: relative;
    overflow: hidden;
    /* float: left; */
    width: 100px;
    height: 100px;
    /* width: 20%;
    height: 20%; */
    /* margin-left: 100px;
    margin-top: 100px;
    margin-bottom: 100px; */
    display: inline-block;
    margin: 0 auto;
    background-image: linear-gradient(to bottom, rgba(250, 226, 89, 0.822), rgba(250, 180, 30, 0.678));
    border-radius: 32px 32px 32px 32px;
    box-shadow: -1px 1px 8px 1px rgba(90, 85, 57, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.5);
    transition: all .2s;
}

.content-add-card:hover {
    /* width: 350px;
    height: 250px;
    margin: 11px; */
    cursor: pointer;
    transform: scale(1.5);
    background-image: linear-gradient(to top, rgba(250, 226, 89, 0.822), rgba(250, 180, 30, 0.678));
    border-radius: 9px 9px 9px 9px;
    border: 2px solid rgba(255, 255, 255);
}

.content-add-card h1{
    font-size: 80px;
    color: white;
    font-weight: bold;
}

.content-add-card:hover h1 {
    font-family: serif;
    font-size: 20px;
    transform: translateY(2px);
    /* transform: scale(.3); */
}
/* End of End ADD Card Section */
/* End of Content Section */

/* Start Card-Display */
.card-display-shadow {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to left, rgba(216, 218, 128, 0.4), rgba(233, 178, 132, 0.5));

    transition: .3s ease;
}

.card-display-shadow:hover {
    cursor: pointer;
}

.card-display-background {
    position: fixed;
    width: 96%;
    height: 92%;
 
    top: 0px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: -3px 3px 8px 3px rgba(0,0,0, 0.6);
    border-radius: 9px 9px 9px 9px;
    margin: 30px auto;
    
    left: 0px;
    right: 0px;
    z-index: 1001;
    overflow: hidden;
    transition: all .5s ease;
    overflow-y: scroll;
}

.card-display-frame {
    position: relative;
    border-radius: 9px;
    top:0;
    left:0;
    border: none;
    height: 100%;
    width: 100%;
}

.card-display-bottom {
    position: absolute;
    top: 100%;
    height: auto;
    width: 100%;
    background-image: linear-gradient(to right, rgba(255, 242, 170, 0.9), rgba(252, 200, 87, 0.9));
    /* pointer-events: none; */
}

.card-display-delete {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 26px;
    margin: 3px;
    color: #ff3232;
    transition: all .2s ease;
    z-index: 1020;
}

/* End Card Display */

/* Start Add Card Display */
.add-card-display-shadow .card-display-background {
    position: fixed;
    width: 96%;
    height: 92%;
 
    top: 0px;
    background: rgba(65, 65, 65, 0.658);
    box-shadow: -3px 3px 8px 3px rgba(0,0,0, 0.6);
    border-radius: 9px 9px 9px 9px;
    margin: 30px auto;
    
    left: 0px;
    right: 0px;
    z-index: 1001;
    overflow-y: scroll;
    transition: all .5s ease;
    /*scrollbar-width: none;  Firefox */
    /*-ms-overflow-style: none;   Internet Explorer 10+ */
}

/* --Works only for chromium stuff */
/* .add-card-display-shadow .card-display-background::-webkit-scrollbar {
    display: none;
} */

.add-card-display-shadow {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to left, rgba(216, 218, 128, 0.4), rgba(233, 178, 132, 0.5));

    transition: .3s ease;
}

.input-file {
    margin: 10px;
    pointer-events: auto;
    display: none;
}
.d-flex {
    display: flex!important;
    align-items: center!important;
    justify-content: center!important;
}
.input-file-cont{
    border: 1px solid #ccc;
    display: block;
    padding: 6px 12px;
    width: 40%;
    height: 13%;
}
.input-img-cont{
    width: 40%;
    height: 13%;
}
.input-img {
    margin: 10px;
    pointer-events: auto;
    display: none;
}

.input-img-display {
    width: 300px;
    height: 250px;
    background: white;
    border-radius: 18px!important;
    margin: 16px;
}
.add-card-display-bottom {
    position: absolute;
    top: 100%;
    height: auto;
    width: 100%;
    background-image: linear-gradient(to right, rgba(255, 242, 170, 0.9), rgba(252, 200, 87, 0.9));
    /* pointer-events: none; */
}

.input-file-bg{
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    border-radius: 0px 0px 16px 16px;
}
.add_card_button {
    /* position: absolute; */
    display: block;
    margin: 12px 0;
    margin-bottom: 22px;
    pointer-events: auto;
    height: 44px;
    width: 150px;
    font-size: 18px!important;
    color: white;
}
/* End Add Card Display */

.is-saving-cards-spinner {
    position: fixed;
    bottom: 0px;
    right: 0px;
    margin-right: 20px;
    margin-bottom: 10px;
    font-size: 20px;
}
.saving-text {
    font-size: 10px;
    margin: 10px;
}

@media screen and (min-width: 1600px) {
    .h4 {
        font-size: 3rem!important;
    }

    .desc-text{
        font-size: 1.8rem!important;
    }
    .name-text{
        font-size: 2.2rem!important;
    }    
    .content-card-delete {
        font-size: 1.8rem!important;
    }
    .card-display-delete {
        font-size: 2.5rem!important;
    }
    .content-card-bottom {
        height: 80px;
    }
    .content-add-card {
        height: 150px;
        width: 150px;
    }
    .content-add-card h1 {
        font-size: 60px;
    }
    .content-add-card:hover h1 {
        font-size: 50px!important;
    }
    .input-img-display {
        width: 450px;
        height: 400px;
    }
    .input-file-cont {
        width: 60%;
    }
    .input-img-cont {
        width: 60%;
    }
    .add_card_button {
        height: 66px;
        width: 300px;
        font-size: 38px!important;
        margin-bottom: 100px;
    }
}
/* Devices under 1199px (xl) */
@media (max-width: 1199.98px) {
    /* .content-card {
        width: 269px;
        height: 200px;
    } */
    .content-card-title {
        font-size: 14px;
    }
}
/* Devices under 768px (md) */
@media (max-width: 768.98px) {
    /* .content-card {
        width: 312px;
        height: 220px;
    } */
}

/* Devices under 576px (md) */
@media (max-width: 575.8px) {
    .input-img-display{
        height: 150px;
        width: 200px;
    }
    .content-section {
        grid-template-columns: 1fr;
    }
    /* .content-card {
        width: 355px;
        height: 250px;
    } */
    .explore-about {
        font-size: 20px;
        margin: 0 20px;

    }
    .add_card_button {
        font-size: 9px;
        margin: 15px 0px;
        margin-right: 6px;
    }
    .input-file {
        font-size: 9px;
        margin: 15px 0px;
        margin-left: 6px;
    }
    .input-img {
        font-size: 9px;
        margin: 15px 0px;
    }
}

/* mobile medium */
@media (max-width: 376px) {
    /* .content-card {
        width: 300px;
        height: 230px;
    } */
}

/* mobile small */
@media (max-width: 321px) {
    /* .content-card {
        width: 252px;
        height: 230px;
    } */
    .explore-about {
        font-size: 18px;
    }
    .add_card_button {
        font-size: 7px;
        margin: 15px 0px;
        margin-right: 6px;
    }
    .input-file {
        font-size: 7px;
        margin: 15px 0px;
        margin-left: 6px;
    }
    .input-img {
        font-size: 7px;
        margin: 15px 0px;
    }
}
</style>