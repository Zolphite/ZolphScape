<template>
    <!-- Start Image Carousel -->
    <div id="carousel" class="carousel slide home-carousel" data-bs-ride="carousel" 
        data-bs-interval="10000">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/imgs/carousel/3.jpg" alt="">
                <div class="carousel-caption ">
                    <div class="container">
                        <div class="row caption1">
                            <div class="col-6 bg-custom py-4 px-0">
                                <h1 class="text-uppercase">Explore Data</h1>
                                <div class="border-top border-warning w-50 mx-auto caption-divider">

                                </div>
                                <p class="lead">Find new and interesting ideas</p>
                                <router-link to="/about" class="btn btn-danger btn-lg caption-btn">Learn More</router-link>
                                <router-link to="/explore" class="btn btn-warning btn-lg caption-btn">Explore Now</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                      
            <div class="carousel-item">
                <img src="../assets/imgs/carousel/0.jpg" alt="">
                <div class="carousel-caption">
                    <div class="container">
                        <div class="row text-start caption2">
                            <div class="col-6 bg-custom py-4 mx-5">
                                <p class="lead">ZolphScape is powered by the community. Take a look at all the talented users which make up the ZolphScape network.</p>
                                <div class="border-top border-warning w-50 mx-auto mb-3 caption-divider">

                                </div>
                                <router-link to="/users" class="btn btn-warning btn-lg wx-3 caption-btn">View Users</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <img src="../assets/imgs/carousel/1.jpg" alt="">
                <div class="carousel-caption">
                    <div class="container">
                        <div class="row caption3">
                            <div class="col-6 bg-custom py-4 mx-5">
                                <h3 class="text-uppercase">Let's Work Together</h3>
                                <div class="border-top border-warning w-50 caption-divider mx-auto">
                                </div>
                                <p class="lead text-end">Check out our code base on github and feel free to expand on it.</p>
                                <a href="https://github.com/Zolphite/ZolphScape" target="_blank" class="btn btn-warning btn-lg wx-3 float-end caption-btn">Visit Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Start Carousel Controls -->
        <a href="#carousel" class="carousel-control-prev" role="button"
            data-bs-slide="prev">
            <span class="fas fa-chevron-left fa-2x"></span>
        </a>

        <a href="#carousel" class="carousel-control-next" role="button"
            data-bs-slide="next">
            <span class="fas fa-chevron-right fa-2x"></span>
        </a>
        <!-- End Carousel Controls -->
    </div>
    <!-- End Image Carousel -->

    <!-- Start Main Page Heading -->
    <div class="col-12 text-center mt-5">
        <h1 class="text-warning pt-4">What We Have To Offer</h1>
        <div class="border-top border-warning w-25 mx-auto my-3">
        </div>
        <p class="lead">Management of information can be broken down into three areas: Contribution, Exploration, and Analysis. </p>
    </div>
    <!-- End Main Page Heading -->
    <!-- Start Columns-->
    <div class="container-fluid">
        <div class="row mt-5">
            <div class="col-md-4 my-4 text-center">
                <img src="../assets/imgs/front_page/1.jpg" alt="Contribution" class="w-100 h-75">
                <h4 class="my-4 text-uppercase">Contribute</h4>
                <p>Share any information you can convert to HTML
                     so that your ideas can reach the world.</p>
                <a :href="'/profile/' + this.authUser.uid" class="btn btn-outline-dark btn-md">Share Now</a>
                <div class="content-caption-space1"></div>
            </div>

            <div class="col-md-4 my-4 text-center">
                <img src="../assets/imgs/front_page/2.jpg" alt="Explore" class="w-100 h-75">
                <h4 class="my-4 text-uppercase">Explore</h4>
                <p>The world around us is cluttered with a constant flow of knowledge.
                    Find the information that matters to you.</p>
                <a href="/explore" class="btn btn-outline-dark btn-md content-column-btn">Explore Now</a>
                <div class="content-caption-space2"></div>
            </div>

            <div class="col-md-4 my-4 text-center">
                <img src="../assets/imgs/front_page/0.jpg" alt="Analyze" class="w-100 h-75">
                <h4 class="my-4 text-uppercase">Analyze</h4>
                <p>View other peoples profiles to find projects that might speak to you and work together to build a brighter future.</p>
                <a href="/users" class="btn btn-outline-dark btn-md content-column-btn">View Profiles</a>
                <div class="content-caption-space3"></div>
            </div>
        </div>
    </div>
    <!-- End Columns -->
    <div class="extra-space"></div>
    <!-- Start Fixed Background -->
    <div class="fixed-background">
        <!-- Start Inside Content Background -->
        <div class="col-6 bg-custom mx-auto">
            <div class="row text-light py-5">
                <div class="col-12 text-center">
                    <h1>View a Random Card</h1>
                    <h3 class="py-4">..see what information is out there.</h3>
                    <a href="#" class="btn btn-warning btn-lg mr-2">View Card</a>
                </div>
            </div>
        </div>
        <!-- End Inside Content Background -->
        <div class="fixed-wrap">
            <div class="fixed">
            </div>
        </div>
    </div>
    <!-- End Fixed Background -->
    <!-- Start Two Column Section -->
    <div class="container-fluid my-5">
        <div class="row py-4 text-center">
            <div class="col-lg-4 mb-4 my-lg-auto">
                <h1 class="text-dark font-weight-bold mb-3 text-uppercase">Register to join our network</h1>
                <p class="mb-4">We are all connected and the more meaningful connections we have the more quality information we gain about the world around us. Join our network of information producers to find, collect, and analyze ideas that hold meaning to you.</p>
                <a href="/register" class="btn btn-outline-dark btn-md">Register Now</a>
            </div>

            <div class="col-lg-8 p-5"><img src="../assets/imgs/front_page/simGraph.jpg" alt="" class="w-100"></div>
        </div>
    </div>
    <!-- End Two Column Section -->

    <!-- Start Jumbotron -->
    <div class="jumbotro py-5 mb-0 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-lg-8 col-xl-9 my-auto">
                    <h4>Looking for talented front-end and back-end developers?</h4>
                </div>

                <div class="col-md-5 col-lg-4 col-xl-3">
                    <a href="https://www.linkedin.com/in/abdullah-qureshi-5823b1200/" class="btn btn-warning btn-lg">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
    <!-- End Jumbotron -->
    <!-- <div class="container my-5"></div> -->
</template>

<script>
export default {
    props:['is_signed_in','authUser'],
}
</script>

<style>
/* Start Carousel CSS */
#carousel {
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, .1) !important;
}

#carousel .carousel-item {
    transition: transform 1.2s ease-in-out;
}

.home-carousel .carousel-item img {
    max-height: 32rem !important;
    width: 100%;
}
/* Start Carousel Content CSS */
.carousel-caption {
    position: absolute!important;
    width: 100%;
    height: 100%;
    top: 0%;
    transform: translateX(-15%);
}

.bg-custom {
    background-color: rgba(44, 44, 44,0.6);
    color: white;
    border-radius: 1rem;    
}

.carousel-caption h1 {
    font-size: 3rem;
    text-shadow: .1rem .1rem .3rem rgba(0, 0, 0, 1);
}

.carousel-caption h3 {
    font-size: 2.2rem;
    text-shadow: .1rem .1rem .2rem rgba(0, 0, 0, 1);
}
.border-warning {
    border-top: .3rem solid #ECA71E!important;
}

.btn-lg {
    /* border-radius: 0!important; */
    text-transform: uppercase;
    font-size: 1rem!important;
    /* border-width: none!important; */
}

.caption1 {
    justify-content: center;
    padding-top: 5%;
}
.caption2 {
    justify-content: flex-start;
    padding-top: 8%;
}
.caption3 {
    justify-content: flex-end;
    padding-top: 8%;
}

.caption-divider {
    margin: 1rem 0;
}

.caption-btn {
    margin: .6rem;
}
/* End Carousel Content CSS */
/* End Carousel CSS */

.content-column-btn {
    /* padding-bottom: 200px; */
}
/*-- Fixed Background Image --*/
.fixed {
    background-image: url('../assets/imgs/front_page/bgMoving.jpg');
    position: fixed;
}
.fixed-background {
    padding: 10rem 0;
    position: relative;
    width: 100%;
    z-index: 1000!important;
}
.fixed-wrap {
    clip: rect(0, auto, auto, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -999 !important;
}
.fixed {
    z-index: -999!important;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    will-change: transform;
}
/* End Fixed Background Image */

/* Start Jumbotron */
.bg-gray {
  background-color: #D9D9D9 !important;
}
/* End Jumbotron */

.extra-space {
    padding: 2rem 0;
    /* background: black; */
}

/*============= MEDIA QUERIES =============*/

/* Devices under 1199px (xl) */
@media (max-width: 1199.98px) {
    .carousel-caption h1 {
        font-size: 2rem;
    }

    .carousel-caption h3 {
        font-size: 1.3rem;
    }
    /* Start Carousel Content CSS */
    /* .carousel-caption {
        top: 35%;
    } */
    .carousel-caption .btn-lg {
        font-size: .9rem!important;
    }
    .lead {
        font-size: 1.2rem;
    }
    .caption1 {
        padding-top: 10%;
    }
    .caption2 {
        padding-top: 12%;
    }
    .caption3 {
        padding-top: 12%;
    }

    .extra-space {
        padding: 4rem 0;
        /* background: black; */
    }
    .home-carousel .carousel-item img {
        height: 28rem !important;
    }   
}
/* Devices under 768px (md) */
@media (max-width: 767.98px) {
    .carousel-caption h1 {
        font-size: 1rem;
    }

    .carousel-caption h3 {
        font-size: .6rem;
    }

    .fixed-background h1 {
        font-size: 1.2rem;
    }

    .fixed-background h3 {
        font-size: 1rem;
    }
    /* Start Carousel Content CSS */
    /* .carousel-caption {
        top: 35%;
    } */
    .carousel-caption .btn-lg {
        font-size: .5rem!important;
    }
    .lead {
        font-size: .7rem!important;
    }
    .extra-space {
        /* padding: 4rem 0; */
        /* background: black; */
    }

    .caption2 {
        padding-top: 3%;
    }
    .caption3 {
        padding-top: 3%;
    }

    .caption-divider {
        margin: .5rem 0;
    }
    .caption-btn {
        margin: .3rem;
    }

    .content-caption-space1 {
        padding: 5rem 0;
    }
    .content-caption-space2 {
        padding: 7rem 0;
    }
    .home-carousel .carousel-item img {
        height: 18rem !important;
    }   
}

/* Devices under 576px (md) */
@media (max-width: 575.8px) {
    .carousel-caption h1 {
        font-size: .8rem;
    }

    .carousel-caption h3 {
        font-size: .6rem;
    }
    /* Start Carousel Content CSS */
    /* .carousel-caption {
        top: 35%;
    } */
    .carousel-caption .btn-lg {
        font-size: .5rem!important;
    }
    .lead {
        font-size: .7rem!important;
    }
    .extra-space {
        /* padding: 4rem 0; */
        /* background: black; */
    }

    .caption2 {
        padding-top: 3%;
    }
    .caption3 {
        padding-top: 3%;
    }

    .caption-divider {
        margin: .5rem 0;
    }
    .caption-btn {
        margin: .3rem;
    }

    .content-caption-space1 {
        padding: 7rem 0;
    }
    .content-caption-space2 {
        padding: 7rem 0;
    }
}

/* @media (max-width: 1399px) {
    .carousel-caption h1 {
        font-size: 100rem;
    }

    .carousel-caption h3 {
        font-size: 3rem;
    }
    .btn-lg {
        font-size: 2rem!important;
    }
    .btn-md {
        font-size: 2rem!important;
    }
    .lead {
        font-size: 2.5rem!important;
    }

    .caption2 {
        padding-top: 3%;
    }
    .caption3 {
        padding-top: 3%;
    }

    .caption-divider {
        margin: .5rem 0;
    }
    .caption-btn {
        margin: .3rem;
    }

    .content-caption-space1 {
        padding: 7rem 0;
    }
    .content-caption-space2 {
        padding: 7rem 0;
    }
    .home-carousel .carousel-item img {
        height: 1000rem !important;
    }
    #app {
        font-size: 2rem;
    }
    h1 {
        font-size: 4rem!important;
    }
} */

/* Small (sm) devices (landscape phones, 576px and up) */
/* @media (max-width: 576px) {
    .carousel-caption{
        top: 15px;
        left: 15px;
        width: 30rem;
    }
    .carousel-caption h1 {
        font-size: .9rem;
        margin: 0 300px;
    }

    .carousel-caption h3 {
        font-size: .7rem;
    } */
    /* Start Carousel Content CSS */
    /* .carousel-caption {
        top: 35%;
    } */
    /* .btn-lg {
        font-size: .3rem!important;
    }
    .lead {
        font-size: .7rem!important;
    }
} */

/*============ BOOTSTRAP BREAK POINTS:

Extra small (xs) devices (portrait phones, less than 576px)
No media query since this is the default in Bootstrap

Small (sm) devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

Medium (md) devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

Large (lg) devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

Extra (xl) large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

=============*/
</style>