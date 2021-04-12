<template>
    <section class="login-form mx-2">
        <div class="container">
            <div class="row g-0 login-row my-3">
                <div class="col-lg-5">
                    <img src="../assets/imgs/carousel/2.jpg" class="" alt="">
                </div>
                <div class="col-lg-7 text-center login-side">
                    <h1 class="">Login</h1>
                    <div class="border-top border-warning w-50 my-3 mx-auto"></div>
                    <h3>Welcome back</h3>
                    <form class="login-form-actual my-3" @submit.prevent="loginButtonPressed">
                        <div class="login-form-group">
                            <label for="login-email" class="w-100">Email</label>
                            <input type="email" name="login-email" placeholder="Email" v-model="login_form.email" required>
                        </div>
                        <div class="login-form-group">
                            <label for="login-password" class="w-100">Password</label>
                            <input type="password" name="login-password" placeholder="Password" v-model="login_form.password" required>
                        </div>
                        <div class="login-form-group">
                            <button type="submit-login-form-actual" class="btn btn-warning">Login Now</button>
                        </div>
                        <p>
                            Don't have an account? 
                            <a href="/register">Register Here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import firebase from "../utilities/firebase";

export default {
  props:['is_signed_in','authUser'],
  data() {
    return {
      login_form: {
        email: "",
        username: "",
        password: "",
      },
    };
  },

  created() {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then((tokenResult) => {
            console.log(tokenResult.claims);
          }).catch(error => {
            alert(error);
          });
      }
    });
  },

  methods: {
    async loginButtonPressed() {
      try {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(
            this.login_form.email,
            this.login_form.password
          );
        console.log(user);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
  },
};
</script>

<style>
.login-row {
    background: rgba(247, 247, 247, 0.877);
    border-radius: 1rem;
    height: 100%;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, .4) !important;
}

.login-form .container {
    margin-top: 3%;
    margin-bottom: 3%;
}
.login-form .login-side {
    margin: 30px 0;
}
.login-form img{
    width: 100%;
    height: 100%;
    border-radius: 1rem 0 0 1rem !important;
}

.login-form-group {
    margin: 2.2rem;
}
.login-form-group > input {
    margin: .9rem 0;
}
/* .border-warning {
    border-top: .3rem solid #ECA71E!important;
} */

.login-side > h1 {
    font-weight: bold;
}
</style>