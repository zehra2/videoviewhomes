<?php include('header.php');?>
    <style>
        .carousel-caption video, .carousel-caption iframe{
            margin-top: 20px;
        }
        .buisnessfriendlyimg img{
            height:700px;
        }
        .buisnessfriendlyimg2 img{
            height:740px;
        }
        #tab div {
    display: none;
}

#tab div:target {
    display: block;
  
}
        @media only screen and (max-width: 767px) {
            .carousel-caption video,.carousel-caption iframe{
                /*margin-top: -20px;*/
            }
            
            .carousel-captionDiv h1 {
                font-size: 50px;   
            }
            .carousel-captionDiv h2 {
                font-size: 17px;   
            }
            .buisnessfriendlyimg img, .buisnessfriendlyimg2 img{
                height:100%;
            }
        }


    </style>

    <?php 
    $video_url = $this->db->query("select url from tbl_heading")->row()->url;
    $video_url = $this->db->query("select url from tbl_heading")->row()->url;
    ?>
    <section class="sliderMain">

        <div id="carousel-example-generic1" class="carousel slide online-main" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <!-- assets/images/anner3162734389741.png -->
                    <div class="sliderOverly"> <img src="<?php echo base_url().'assets/';?>/images/banner1162734398236.png" alt="slider"
                            class="img-responsive" alt="img"> </div>
                    <div class="container">
                        <div class="carousel-caption">
                            <div class="carousel-captionDiv" data-aos="zoom-in" data-aos-offset="500"
                                data-aos-duration="500">
                                <h1>VIDEO VIEW</h1>
                                <h2>
                                    <h2>VENDORS HOMES SERVICES PRODUCTS EMPLOYMENT</h2>
                                </h2>
                                <a href="#search" class="slider-button hvr-grow tc-image-effect-shine">Search</a> <!---<a
                                    href="<?php echo base_url();?>aboutus" class="hvr-grow tc-image-effect-shine">About US</a>--->
                               
                                    <?php if($video_url){
                        foreach($video_url as $data){?>
                        <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="investmentbox" data-aos="zoom-in" data-aos-offset="500" data-aos-duration="500">

                            <video  autoplay loop muted controls="controls"  style="width: 90%;height:300px">
                                        <source
                                        src="<?php echo $data->youtube_link;?>"
                                            type="video/mp4">
                                    </video>
                                <!--- <div class="investmentoverlay">
                                <span class="sale">For Sale</span>
                            </div> --->
                                <!--- <div class="investmentbody">
                                <h4>CREATE BUSINESS SERVICE   ACCOUNT  AND LIVE STREAM YOUR SERVICES IN ACTION</h4>
                            </div> --->
                            </div>
                        </div> 
                    <?php }}?>
                               
                                    <div class="videoportion1" >
                                     <video  autoplay loop muted controls="controls"  style="width: 90%;height:300px">
                                        <source
                                            src="assets/images/file3.mp4"
                                            type="video/mp4">
                                    </video>
                                    <?php /*if($video_url){?>
                                     <iframe style="width: 90%;height:300px" src="<?php echo $video_url?>"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer;autoplay;playsinline;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                        <video controls="controls" autoplay loop playsinline style="width: 90%;height:300px">
                                        <source
                                            src="https://video.wixstatic.com/video/3086e8_b06e06ee17a544de9916e2c2e0e5800d/1080p/mp4/file.mp4"
                                            type="video/mp4">
                                    </video>
                                    <?php }else{?>
                                    <video controls="controls" autoplay loop style="width: 90%;height:300px">
                                        <source
                                            src="https://video.wixstatic.com/video/3086e8_b06e06ee17a544de9916e2c2e0e5800d/1080p/mp4/file.mp4"
                                            type="video/mp4">
                                    </video>
                                    <?php }*/?>
                                </div>
                                
                            </div>
                        </div>
                       
                    </div>
                </div>
                
            </div>
            <!-- Controls -->
        </div>
    </section>
    <section class="bidonprpertysec">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="bidbox" data-aos="zoom-in" data-aos-offset="500" data-aos-duration="500" style="text-align:center">
                        <!--<i class="fa fa-line-chart"></i>--->
                        <img src="assets/images/icon3.jpg" style="width:40px">
                        <h3>Upload Your Video</h3>
                        <p>Upload videos of your business to the Video View Live website - Livestream your projects to your page - Choose Cities list your business.</p>
                        <a href="<?php echo base_url();?>uploadproduct" class="hvr-grow tc-image-effect-shine" >Upload</a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="bidbox" data-aos="zoom-in" data-aos-offset="500" data-aos-duration="500">
                        <i class="fa fa-tv"></i>
                        <h3 style="margin-top: 1px;">Join Video View Team</h3>
                        <!---<p>A convenient way of searching for properties through the service of virtual viewing and live
                            showing of the property.</p>--->
                            <p>Join The Video View Contractors - Stream your projects to your Video View webpage - Choose your industry to receive projects</p>
                        <a href="<?php echo base_url();?>signup"  class="hvr-grow tc-image-effect-shine">Join</a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="bidbox" data-aos="zoom-in" data-aos-offset="500" data-aos-duration="500" style="text-align:center">
                        <!---<i class="fa fa-dollar"></i>--->
                        <img src="assets/images/icon1.jpg" style="width:30px">
                        <h3 style="margin-top: -1px;">Plans & Pricing</h3>
                        <p>From basic home plans to pro plans, we have covered all types of budgets requirements of our
                            residential clients in our plans and pricing.</p>
                        <a href="<?php echo base_url();?>price" class="hvr-grow tc-image-effect-shine" >View Plans</a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="bidbox" data-aos="zoom-in" data-aos-offset="500" data-aos-duration="500" style="text-align:center">
                        <!---<i class="fa fa-building"></i>--->
                        <img src="assets/images/icon2.jpg" style="width:40px">
                        <h3 style="margin-top: -6px;">State / City</h3>
                        <p>Choose the Country the State and the City that you desire to see videos of homes goods or services in - Request A  stream from Vendor</p>
                        <a href="<?php echo base_url();?>countries" class="hvr-grow tc-image-effect-shine"  >Choose City </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- bid on prperty sec end -->

    <!-- watch video sec start -->
    <section class="watchvideosec" style="background: #e1edef;padding: 30px 0 30px;">
        <div class="container">
            <div class="row flexRow">
                <div class="col-sm-6 col-md-6 col-xs-12">
                    <div class="videoportion">
                        <video controls="controls" autoplay muted loop style="width: 100%;">
                            <source
                                src="assets/images/file2.mp4"
                                type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-xs-12">
                    <div class="watchvideotext" data-aos="fade-right" data-aos-offset="500" data-aos-duration="500">
                        <!---<h3>WATCH VIDEO TOUR</h3>--->
                        <h3 style="font-size: 2.8vw;">  VIDEO VIEW LIVE VIDEOGRAPHY</h3>
                       






                        <div class="row flexRow" style="margin-top:30px">
 
 <div class="col-md-12 col-sm-6 col-xs-12 center " >
     <div class="buisnessfriendlytext" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500"  style="margin-bottom: 25px;">
         <!---<h3>BUDGET-FRIENDLY SERVICES</h3>--->
        
        <!-- <a  class="hvr-grow tc-image-effect-shine">Read More </a>-->
       <a   class="hvr-grow tc-image-effect-shine center" id="button"> More Info </a>
        <div  id="newpost" style="display:none;margin-top:30px">The Video View Live Videographers are a global team of Videographers Editors and Photographers. What makes our team unique is our business model. This is our model for weddings, birthday parties, Quinceaneras Engagements and events. 
We Send Professional exceptional Videographers and Photographers to your event. We make you a YouTube page livestream the event through our platform to most major social media platforms such as Facebook and Instagram etc. and we upload the footage to our website and the YouTube Chanel we create for you so you, your family and guest can download footage to your personal account. This is our protocol. You can also opt out of the livestream and YouTube.
If you are an experienced Photographer, Videographer, Wedding Planner, Dj or Catering Specialist Please join the Video View Videography Team and we will send projects to your inbox and we keep your calendar booked. We will also give you a Vendors page  on the Vidro View Live website for your personal business</p>
 
     </div>
    


</div>
 
</div>


                          
            </div>
           
                      
                     
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- watch video sec end -->

    <!-- buisness friendlysec start -->
    <section class="buisnessfriendlysec">
        <div class="container" style="max-width: 100%;">
            <div class="row flexRow">
                <div class="col-md-6 col-sm-6 col-xs-12 no-margin">
                    <div class="buisnessfriendlyimg buisnessfriendlyimg2">
                        <img src="<?php echo base_url().'assets/';?>images/buisness_11.jpg" class="img-responsive" alt="img">
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="buisnessfriendlytext" style="margin-bottom: 25px;" data-aos="fade-right" data-aos-offset="500" data-aos-duration="500">
                        <!---<h3>TOP-QUALITY DESIRABLE NEIGHBORHOODS</h3>--->
                        <p style="padding-top:20px">Welcome to the Video View Live Stream Business Platform. Upload the video of the service or services that you provide. Upload the video of your skillset from your mobile device or cell phone to the city or cities of your choice. You can even upload videos from your YouTube account. You can upload these videos to your own Video View Live website page. Live stream your skill set or occupation to your branded page on the Video View Live website plus stream to most all social media platforms simultaneously whenever you want to advertise your service or business. Bring your potential client to your live stream and demonstrate your exceptional abilities to get the job done right the first time around.</br>
                        Security issues? Hire a Video View Live Construction Contractor or Handyman and watch them complete your construction project in real time from wherever you may be located and make real time decisions concerning your project while you are miles away. This is the future of all contracting.</br>
                        Hire a Video View Live Developer and actually contribute to the design and development of your website in real time. Make changes in real time instead of making revisions and changes after you have paid for your time already. No more paying twice. No more paying for work hours when the developer did not work the hours listed but charged you for the hours anyways. Video View Live Stream Developers and Contractors actually stream the design and development of your website or of your marketing media to the Video Video Live website. You can go to your Video View Live webpage to view and join the live stream anytime to check your developer. You can determine every factor and design of your website in real time. Watch from your cell phone desktop or mobile device and end the days of being overcharged and not getting exactly what you pay for. </br>
                        You have the option to join the Video View Live Contracting Team in your area of expertise and receive already contracted projects to your inbox. THUMBTACK ANGIES-LIST and all other lead generating websites are a waste of time and money. They overcharge for job leads that you may not even get but you still pay for. At Video View Live we dont send leads. We send project assignments. We have already contracted the job and it is your project to start asap. You get paid on completion of the product guaranteed By Video View Live Stream Construction. We are accepting Contractors and Handymen with at least 10 years experience in their prospective field. All Construction. All Design and Development. All  Consulting. Lending. Photography. Private Schooling. Casting. Modeling. Acting. Whatever you do you can do it on the Video View Live platform for your client also to gain clients and for their security and convenience. Do you need an extra hand completing your project Video View Live has Handymen waiting scanning the website in all cities all day. They are available to help complete projects. To work or assist. Do you need workers? look at the profiles in the city where you are working or on your stream just say I need three men right now who's available or just order three handymen from the Video View Live Website. We are the YOUTUBE of Business.</br>
                        Use your crm to schedule appointments and to keep your contacts all one one platform. The Video View Live Platform. Create your free account today. </p>
                        <a href="<?php echo base_url();?>aboutus" class="hvr-grow tc-image-effect-shine">Read More </a>
                  
                    </div>
                </div>
            </div>
            <div class="row flexRow">
 
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="buisnessfriendlytext" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500"  style="margin-bottom: 25px;">
                        <!---<h3>BUDGET-FRIENDLY SERVICES</h3>--->
                        <p>Video View Live. Upload your video of your product  that you have for sale rent or trade  from your cellphone desktop or mobile device to the city or cities of your choice. You can even upload your You Tube Videos to your own page also Live Stream your product  to your Video View Live Page whenever you want to advertise your product to a potential buyer.<br>
                        Bring your potential client on your live stream and demonstrate the  exceptional value of your product. Stream your product or products  to all Major Social  Media Platforms Simultaneously. Video Shoot  issues? Hire a Video View Live Stream Contractor and shoot your commercial.<br>
                        You have the option to to show your product in real time. Consumer see what you are buying before you buy it. see the real size of the product . See the product work before you buy it. see what color it really is in real time. If you are purchasing an automobile or anything with a motor see and hear it run before you even waste the gas to go inspect it. <br>
                        Do you need a vintage car part from North Dakota? Have you traveled hundreds of miles just to get there to find out the car part wont fit your 66 Chevy? Utilize the Video View Live platform and get that real time confirmation before you leave the house.<br>
                        Show your home anytime through the video view live platform. Shoot the video of your home rental or property for sale. list it with Video View Homes and rentals if you cant shoot the video we will shoot the video for you. We will list your home on our platform. you dont pay any realty fees unless your home sells. Our transaction coordinator fee is always 1.9%  <br>
                        You have the option to brand your Page and Live Stream your Business while you show your products. Mobile phone Go Pro  mobile device  body cam or your 4k camera on tripod.<br>
                        See how many likes and view your property or product receives on the Video View Live website
                        .
                        </p>
                        <a href="<?php echo base_url();?>aboutus" class="hvr-grow tc-image-effect-shine">Read More </a>
                  
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 no-margin">
                    <div class="buisnessfriendlyimg">
                        <img src="<?php echo base_url().'assets/';?>/images/buisness_22.jpg" class="img-responsive" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- buisness friendlysec end -->

    <!-- investment sec start -->
    <section class="investmentsec">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-x-12">
                    <div class="investmenttext" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-duration="500">
                        <h4>LIST YOUR SERVICES OR PRODUCT VIDEO</h4>
                        <p style="text-align: center;">
                            List your video on the Video View Homepage.<br>
                            Your video will be shared on major social media platforms 2 times a day for 1 week or 2 times a day for 1 month. <br>
                            The cost for homepage videos will be $20.00 dollars per week<br>
                            Or $70.00 per month. Install a link to the clients personal page  if they have one<br>
                        </p>
                    </div>
                    <div class="row">
                    <?php if($investments){
                        foreach($investments as $data){?>
                        <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="investmentbox" data-aos="zoom-in" data-aos-offset="500" data-aos-duration="500">

                                <a href="javascript:;">
                                    <iframe width="100%" height="171px" src="<?php echo $data->youtube_link;?>"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                </a>
                                <!--- <div class="investmentoverlay">
                                <span class="sale">For Sale</span>
                            </div> --->
                                <!--- <div class="investmentbody">
                                <h4>CREATE BUSINESS SERVICE   ACCOUNT  AND LIVE STREAM YOUR SERVICES IN ACTION</h4>
                            </div> --->
                            </div>
                        </div> 
                    <?php }}?>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- investment sec end-->
    <script>
        var button = document.getElementById('button');

button.onclick = function() {
    var div = document.getElementById('newpost');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
                        </script>
                        
<?php include('footer.php');?>