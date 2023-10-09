<?php include('header.php');?>
<link href="https://northtechmachining.com/assets/vendor/owl-carousel/css/owl.carousel.min.css" rel="stylesheet">
<link href="https://northtechmachining.com/assets/vendor/owl-carousel/css/owl.theme.default.min.css" rel="stylesheet">
<script src="https://northtechmachining.com/assets/vendor/owl-carousel/js/owl.carousel.min.js"></script>
<!---<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>--->


<script src="https://cdn.bootcss.com/flv.js/1.4.0/flv.min.js"></script>
<link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet"/>

<script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.21.1/video.min.js"></script>
<script src="https://unpkg.com/browse/@videojs/http-streaming@2.6.0/dist/videojs-http-streaming.min.js"></script>

<script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }
</script>

<style type="text/css">
   <style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
 
}

li {
  float: left;
}



section.aboutsecbanner {
    background-image: linear-gradient(#05595b, #062C30), url(assets/images/-managed-services-banner162742458088.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 30px 0 40px;
    background-position: 90% 43%;
    background-blend-mode: multiply;
}
.center{text-align: center;}
.mtb-15{margin-top:15px;margin-bottom:15px;}
.mt-15{margin-top:15px;}
.mt-50{margin-top:50px;}
.mb-50{margin-bottom:50px;}
.mb-15{margin-bottom:15px;}
.mb-20{margin-bottom:20px;}
.section-page {padding: 0px 8%;}
.upload-service-form button {font-family: 'Lato', sans-serif;font-style: normal;font-weight: 700;font-size: 20px;line-height: normal;
    letter-spacing: 1px;background-color: #062C30;color: white;width: 100%;height: 100%;padding: 10px 15px;cursor: pointer;border: 0px;max-width: 315px;margin: 0px auto;display: block;text-align: center;}
.upload-btn-wrapper {position: relative;overflow: hidden;display: inline-block;}
.upload-btn-wrapper .btn {font-family: 'Lato', sans-serif;font-style: italic;font-weight: 700;font-size: 20px;line-height: normal;letter-spacing: 1px;background-color: #062C30;color: white;width: 100%;height: 100%;margin: 0px 0px;padding: 10px 15px;cursor: pointer;}
.upload-btn-wrapper input[type=file] {font-size: 100px;position: absolute;left: 0;top: 0;opacity: 0;}
.upload-video-content h4 {font-size: 14px;font-weight: 600;color: #062c30;margin-bottom: 0px;}
.col-2-grid {display: flex;justify-content: space-between;column-gap: 10px;margin-bottom: 10px;}
.upload-video-box {background-color: #ffffff;height:px;border: 1px solid #dcdad6;border-radius: 8px; margin-bottom: 10px;overflow: hidden;position: relative;padding: 10px 10px 0px 10px;}
.btn-buynow {font-size: 13px;font-weight: 700;line-height: normal;border: none;background-color: #062C30;color: #fff;border-radius: 4px;padding: 5px 10px;}
.prd-address {margin-bottom: 10px;}
.btn-views-links {border: none;padding: 0px;background-color: transparent;}
.btn-views-links img {width: 100%;max-width: 18px;}
.dis-link img {transform: rotate(180deg);}
.btn-live {font-size: 12px;font-weight: 700;line-height: normal;border: none;background-color: #062C30;color: #fff;border-radius: 4px;padding: 4px 5px;
    display: flex;width: 100%;align-items: center;column-gap: 5px;text-align: center;justify-content: center;}
.btn-live img {width: 100%;max-width: 16px;}

.single video{
    height:475px;
}
.listing video{
	height:155px;
}
.hides{
    display:none;
}
.mob-hide{
    display:block !important;
}
.mob-show{
    display:none !important;
}

.contactBox{ 
    
    border: 0px solid #ddd;
    border-radius: 5px 5px 0 0;
}
.contactBox .content ul li{
  
    padding: 10px 10px;
    cursor:pointer;
    
}
.content ul{
    padding: 0;
    margin: 0;
    list-style:none;
}
.contactBox .content ul li img{
    margin-right:10px;
    width: 55px;
    height: 40px;
}
.contactBox .content ul li:hover{
    color:blue;
}
.headingBox{
    font-weight: 600;
    border-bottom: 2px solid #05595b;
    text-align: center;
    padding: 5px 0;
    background: #2d6e70;
    color: white;
    border-radius: 5px 5px 0 0;
}


@media only screen and (max-width: 768px) {
	.listing video{
		height:173px;
	}
	.single video{
        height:190px;
    }
    .mob-hide{
        display:none !important;
    }
    .mob-show{
        display:block !important;
    }
    
    .owl-theme .owl-nav{
        font-size:30px;
        margin-top:0px;
    }
    .owl-nav button.owl-prev, .owl-nav button.owl-next{
            /*background: #ddd !important;*/
    padding: 0 10px !important;
    height: 30px !important;
    line-height: 27px !important;
    }
    
    .statecity {
        padding: 0px 0px 70px;
    }
    .scrollMenu ul{
        list-style:none;  
        display:flex;
        max-width: 100%;
        overflow: auto;
        padding: 0;
    }
    .scrollMenu ul li{
        margin-right: 10px;
        background: #eee;
            padding: 3px 15px 5px 15px;
        border-radius: 20px;
        
    }
    .scrollMenu ul li.active{
        color:white;
        background: #818080;
    }
    .scrollMenu ul li div{
            width: 135%;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    }
    .mtb-10{
        margin-top: 15px;
        margin-bottom: 10px;
    }
}


.stars div{
    float:left;
    margin:0 3px;
    font-size: 20px;
    cursor:pointer;
    color:#a5926f;
} 
.stars div.select{
    color:#FD4;
}



/* rates */
</style>


<!-- banner sec start -->
<section class="aboutsecbanner">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="abouttext2">
                    <h2>
                        <?php /*if($name){ echo str_replace('%20', ' ', $name); }else{?>Flint Michigan Automobiles<?php }*/?>
                        <?php if($val ==1){?>
                            Products
                        <?php }else{?>
                            Services
                        <?php }?>
                        </h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- banner sec end -->
<!-- full upload video section -->





<?php include('footer.php');?>

