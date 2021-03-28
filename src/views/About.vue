<template>
    <div>
        <img src="../assets/imgs/Header-Bar.jpg" alt="top-bar-img" class="top-bar-img">
        <div class="bg-black"><p class="text-danger">We are currently under development. Please DO NOT store any sensitive information or passwords on this site. We are not responsible for any information you input to this site.</p></div>
        <div class="col-12 text-center mt-2">
            <h1 class="text-warning pt-4">About</h1>
            <div class="border-top border-warning w-25 mx-auto my-3">
            </div>
            <p class="site-desc">ZolphScape is not only a site to showcase my own skill set but also a service which allows for anyone to share their projects and ideas to the public. Data and information is hard to keep track of especially in a time where we are all bombarded with constant flows of information. ZolphScape is a place where you can organize the information that comes into your life.</p>
        </div>
    </div>

    <!-- Start Columns-->
    <div class="container-fluid">
        <div class="row mt-2 g-0">
            <h3 class="text-uppercase text-center text-dark mt-5 text-underline"><u>Our Core Team Members</u></h3>
            <div class="col-md-12 mt-5 mb-5 border p-0 p-md-5">
                <div class="row">
                    <div class="col-md-5">
                        <img src="../assets/imgs/about/abdullah.jpeg" alt="Contribution" class="our-imgs abdul-pic">
                    </div>
                    <div class="col-md-7 about-us-card">
                        <h4 class="mb-2 text-capitalize text-dark our-name">Abdullah Qureshi</h4>
                        <h5 class="mb-4 text-warning">Founder and Lead Developer</h5>
                        <p class="our-desc">Abdullah is a talented Computer Science graduated with skills in data science and software engineering. The combination of his skills have helped create ZolphScape from the ground up.</p>
                    </div>
                    <!-- <a href="#" class="btn btn-outline-dark btn-md">Share Now</a> -->
                    <div class="cc-space"></div>
                </div>
            </div>
            <div class="col-md-12 mt-5 mb-5 border p-0 p-md-5">
                <div class="row">
                    <div class="col-md-5 our-img-cont">
                        <img src="../assets/imgs/about/ali.jpeg" alt="Contribution" class="our-imgs ali-pic">
                    </div>
                    <div class="col-md-7 about-us-card">
                        <h4 class="mb-2 text-capitalize text-dark our-name">Ali Khan</h4>
                        <h5 class="mb-4 text-warning">Public Relations Expert</h5>
                        <p class="our-desc">
                            https://www.linkedin.com/in/wamiq-ali-k-b4b437bb/
                            <br><br>
                            Ali Khan is the President and Founder of Humanity Relief. After volunteering and interning with Chicago faith based charities, graduating from Roosevelt University with a B.A in integrated marketing communications/ minor in political science and landing a corporate position he decided to leave corporate America and pursue his passion of charity work.
                            <br><br>
                            Ali has worked at companies like AT&T and Hilton Worldwide for government and business accounts.
                            <br><br>
                            A lot of his inspiration and dedication came from visiting his country of ethnic origin Pakistan where he was able to witness poverty first handedly, but also by visiting refugee camps in the middle east on volunteer youth trips and from living in a transitional housing program when he was a child with his single mother.
                            <br><br>
                            He is also a fan of global affairs, paintball and deep dish pizza. Ali can be reached at ali.khan@humrelief.org                          
                        </p>
                    
                    </div>
                    <!-- <a href="#" class="btn btn-outline-dark btn-md">Share Now</a> -->
                    <div class="cc-space"></div>
                </div>
            </div>
            <!-- <div class="col-md-12 mt-5 mb-5 border p-5">
                <div class="row">
                    <div class="col-md-5">
                        <img src="../assets/imgs/about/abdullah.jpeg" alt="Contribution" class="float-end our-imgs">
                    </div>
                    <div class="col-md-7">
                        <h4 class="mb-2 text-capitalize text-dark our-name">Ali Khan</h4>
                        <h5 class="mb-4 text-warning">Founder and Lead Developer</h5>
                        <p class="our-desc">Abdullah is a talented Computer Science Graduated with skills in data science and software engineering. The combination of his skills have helped create zolphscape from the ground up.</p>
                    </div>
                    <div class="content-caption-space1"></div>
                </div>
            </div> -->
        </div>
    </div>
    <!-- End Columns -->
</template>

<script>
export default {
    props:['is_signed_in','authUser'],
}
</script>

<style scoped>
.top-bar-img {
    position: relative;
    width: 100%;
    height: 5rem;
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .1);
}

.site-desc {
    padding: 0 9rem;
}
.our-imgs {
    box-shadow: -2px 2px 9px 2px rgb(90, 77, 57);
    height: 25rem;
    border-radius: 1rem;
    margin: 0 5rem;
}
.ali-pic {
    height: 19rem;
}
/* .our-name {
    margin: 0 0;
} */
.our-desc {
    margin-right: 25%;
}

.cc-space {
    background: black;
}

.bg-black {
    background: black;
}

.text-danger {
    text-align: center;
    padding: 0 2rem;
}
/* Devices under 1199px (xl) */
@media (max-width: 1199.98px) {
    .our-imgs {
        box-shadow: -2px 2px 9px 2px rgb(90, 77, 57);
        border-radius: 1rem;
        padding: 0 auto;
        margin: 0 0;
    }
    .about-us-card {
        text-align: center;
    }
    .our-desc {
        margin-right: 0;
    }
}
/* Devices under 768px (md) */
@media (max-width: 768.98px) {
    .site-desc {
        padding: 0 4rem;
    }
    .our-imgs {
        height: 20rem;
    }
    .ali-pic {
        height: 14rem;
    }
}

/* Devices under 576px (md) */
@media (max-width: 575.8px) {
    .site-desc {
        padding: 0 2rem;
    }
    .our-imgs {
        display: block;
        margin: 3rem auto;
    }
}

/* Devices under 576px (md) */
@media (max-width: 376px) {
    .site-desc {
        padding: 0 1rem;
    }
    .our-desc {
        margin-right: 0;
    }
}
</style>