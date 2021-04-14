<template>
    <!-- Start Footer -->
    <footer>
        <div class="container bg-dark-custom">
            <div class="row text-light textcenter py-0 justify-content-center">
                <div class="col-sm-10 col-md-8 col-lg-6 text-center col-xl-12">
                    <img src="../assets/imgs/footer_logo.png" alt="">
                    <p>
                            ZolphScape is currently under development in a beta phase.
                            Please do not post any personal or sensitive information you do 
                            not wish to share with the public on ZolphScape. ZolphScape is 
                            not responsible for any information you store on our website or 
                            any information you input to ZolphScape because this is a site to share information
                            with the public, NOT a site to securely store information. When you share information
                            on ZolphScape you are giving us permission to share your information with the public.
                            No inappropriate content is allowed on ZolphScape. Posters of inappropriate content will be 
                            banned right away and their information will be sent to the authorities.
                            ZolphScape is not responsible for the content posted by users but we will try our best
                            to enforce strict community guidelines to help build a safe environment for all.
                            While ZolphScape is under development, your account and information may get
                            deleted randomly (We sometimes have to delete all users when large changes occur).
                            Since we are in beta phases please refrain from posting any important information
                            because it might get deleted.
                    </p>
                    <ul class="social pt-3">
                        <li><a href="" class="social-link fab fa-facebook "></a></li>
                        <li><a href="" class="fab fa-instagram"></a></li>
                        <li><a href="" class="fab fa-youtube"></a></li>
                        <li><a href="" class="fab fa-twitter"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <!-- End Footer -->
    <!-- Start Socket -->
    <div class="socket text-light text-center py-3 bg-dark">
        <p>&copy; <a href="#">placeholder.notreal</a></p>
    </div>
    <!-- End Socket -->
</template>

<script>
export default {

}
</script>

<style>
/* Start Footer */
footer {
    background-color: #383838;
    padding: 1rem 2rem 3rem;
}
footer img {
    height: 2.5rem;
    margin: 1.5rem auto;
}

footer p, footer a,
.socket a {
    color: white;
    text-decoration: none;
}

ul.social {
    list-style-type: none;
    display: flex;
    max-width: 16rem;
    margin: 0 auto;
}
ul.social li {
    margin: 0 auto;
}

footer .svg-inline--fa{
    font-size: 2.3rem;
}
footer .svg-inline--fa:hover{
    cursor: pointer;
    color: #68a0d2;
}

.bg-dark-custom {
    background-color: #383838 !important;
}
/* End Footer */

@media screen and (min-width: 1600px) {
    footer img {
        height: 5rem;
    }
    footer .svg-inline--fa{
        font-size: 3rem;
    }
    ul.social { 
        max-width: 22rem;
    }
}
</style>