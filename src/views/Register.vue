<template>
    <section class="register-form mx-2">
        <div class="container">
            <div class="row g-0 register-row">
                <div class="col-lg-5">
                    <img src="../assets/imgs/carousel/0.jpg" class="" alt="">
                </div>
                <div class="col-lg-7 text-center register-side">
                    <h1 class="">Register</h1>
                    <div class="border-top border-warning w-50 my-2 mx-auto"></div>
                    <h3>Welcome to our network</h3>
                    <form class="register-form-actual" @submit.prevent="RegisterNewUser">
                        <div class="register-form-group">
                            <label for="register-email" class="w-100">Email</label>
                            <input type="email" name="register-email" placeholder="Email" v-model="register_form.email">
                        </div>
                        <div class="register-form-group">
                            <label for="register-username" class="w-100">Username</label>
                            <input type="username" name="register-username" placeholder="Username" v-model="register_form.username">
                        </div>
                        <div class="register-form-group">
                            <label for="register-password" class="w-100">Password</label>
                            <input type="password" name="register-password" placeholder="Password" v-model="register_form.password">
                        </div>
                        <div class="register-form-group">
                            <button type="submit-register-form-actual" class="btn btn-warning">Register Now</button>
                        </div>
                        <p>
                            Already have an account? 
                            <a href="/login">Login Here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import firebase from '../utilities/firebase'

export default {
    props:['is_signed_in','authUser'],
    data() {
        return {
            register_form: {
                email: "",
                username: "",
                password: "",
            },
        };
    },
    methods: {
        RegisterNewUser (){
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.register_form.email, this.register_form.password)
            .then((userRecord) => {
                // See the UserRecord reference doc for the contents of userRecord.
                console.log('Successfully created new user:', userRecord.uid);
                userRecord.user.updateProfile({
                    displayName: this.register_form.username
                });

                const extra_user_data = {'uid': userRecord.user.uid, 
                                        'displayName': this.register_form.username, 
                                        'description': null,
                                        'profile_image': null}
                                        
                console.log(extra_user_data);
                // convert your object into a JSON-string
                var jsonString = JSON.stringify(extra_user_data);
                // create a Blob from the JSON-string
                var new_blob = new Blob([jsonString], {type: "application/json"})
                firebase.storage().ref('users/' + userRecord.user.uid + '/profileData.json').put(new_blob).then(function () {
                    console.log('Save Worked');
                }).catch(error => {
                    console.log('Save failed' + error);
                })
                this.$router.push("/");
            })
            .catch((error) => {
                console.log('Error creating new user:', error);
            });
        }
    }
}
</script>

<style>
.register-row {
    background: rgba(247, 247, 247, 0.877);
    border-radius: 1rem;
    height: 100%;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, .4) !important;
}

.register-form .container {
    margin-top: 3%;
    margin-bottom: 3%;

}
.register-form .register-side {
    margin: 30px 0;
}
.register-form img{
    width: 100%;
    height: 100%;
    border-radius: 1rem 0 0 1rem !important;
}

.register-form-group {
    margin: 1.8rem;
}
.register-form-group > input {
    margin: .5rem 0;
}
.border-warning {
    border-top: .3rem solid #ECA71E!important;
}

.register-side > h1 {
    font-weight: bold;
}
</style>