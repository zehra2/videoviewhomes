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


<script src="https://unpkg.com/video.js/dist/video.js"></script>
<script src="https://unpkg.com/@videojs/http-streaming/dist/videojs-http-streaming.js"></script>

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
.stars div:hover { transform: rotate(-15deg) scale(1.3);


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
<section class="service-form" style="margin-top: 20px;margin-bottom:0 !important">
    <div class="container">
    <?php $action_url = 'products';
        if($val == 2){
          $action_url = 'services';
        }    
        ;?>
     <form action="<?php echo base_url($action_url);?>" id="formSubmit" method="post">
    <div class="row upload-service-form" >
       
            <div class="col-md-3">
                 <label>Country:<span class="field_required">*</span></label>
                    <br>
                    <select name="country_id" id="country_id" required>
					<option value="">--Select Country--</option>
                    <?php if($country){
						foreach($country as $data){?>
                        <option value="<?php echo $data->id;?>" <?php echo ($data->id == $country_id)?'selected':'';?>><?php echo $data->country;?></option>
					<?php }}?>
                    </select>
            </div>
            <div class="col-md-3">
                <label>Region:<span class="field_required">*</span></label>
                    <br>
                    <select name="state_id" id="state_id" required>
					<option value="">--Select Region--</option>
                    
                    </select>
            </div>
            <div class="col-md-3">
                <label>City:<span class="field_required">*</span></label>
                    <br>
                    <select name="city_id" id="city_id" required>
					<option value="">--Select City--</option>
                    
                    </select>
            </div>
            <div class="col-md-3"> 
                <button type="button" class="submitReg" style="line-height: 15px;margin: 32px 0 0px 0;height: 41px;" >Search</button>
            </div>
           
        </div>
         </form>
         </div>
</section>
<section class="section-page mt-50 mb-50" style="padding: 0px 0px 70px;">
    <div class="container">
        <div class="row mob-show" style="border: 1px solid #ddd;padding: 0px 0; border-radius: 0px;">
                    <div class="col-md-12 single">
                       <?php if(count($product) > 0){?>
                            <div class="video-wrapper mtb-10">
                                <div class="video-container" id="video-container">
                                	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/<?php echo $product[0]->servicephoto;?>">
                                		<source src="<?php echo base_url();?>public/productvideos/<?php echo $product[0]->servicevideo;?>" type="video/mp4">
                                	</video>
                                </div>
                            </div>
            			<?php }else{?>
            			<div class="video-wrapper mtb-10">
                                <div class="video-container" id="video-container">
                                	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/165409324499.jpg"> 
                                		<source src="<?php echo base_url();?>public/productvideos/" type="video/mp4">
                                	</video>
                                </div>
                            </div>
            			<?php }?>
                    </div>
                    <div class="col-md-12 scrollMenu">
                <?php if($val ==1){?>
                        <ul >
                            <li onclick="selectCategory()" <?php if(!$category_id){?> class="active"<?php }?>>All</li>
                    <?php if($data_c){
                        foreach($data_c as $data_val){
                            if($data_val->name != ''){?>        
                           <li <?php if($val == 1){if($category_id == $data_val->category_id){?>class="active"<?php }}?> onclick="selectCategory('<?php echo $data_val->category_id;?>')"><div><?php echo $data_val->name;?></div></li>
                   <?php }}}?>
                        </ul>
                    <?php }else{?>
                        <ul >
                            <li onclick="selectServiceCategory()" <?php if(!$category_id){?> class="active"<?php }?>>All</li>
                    <?php if($data_s){
                        foreach($data_s as $data_val){
                          if($data_val->name != ''){?>            
                           <li <?php if($val == 2){if($category_id == $data_val->category_id){?>class="active"<?php }}?> onclick="selectServiceCategory('<?php echo $data_val->category_id;?>')"><div><?php echo $data_val->name;?></div></li>
                   <?php }}}?>
                        </ul>
                    <?php }?>
                    </div>
                </div>
        <div class="mob-hide">
        <div class="row ">
            <div class="col-md-2 col-sm-12"></div>
                 <div class="col-md-8 col-sm-12 single">
		    <?php if(count($product) > 0){?>
                <div class="video-wrapper mtb-15">
                    <div class="video-container" id="video-container">
                    	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/<?php echo $product[0]->servicephoto;?>">
                    		<source src="<?php echo base_url();?>public/productvideos/<?php echo $product[0]->servicevideo;?>" type="video/mp4">
                    	</video>
                    </div>
                </div>
			<?php }else{?>
			    <div class="video-wrapper mtb-15">
                    <div class="video-container" id="video-container">
                    	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/165409324499.jpg">
                    		<source src="<?php echo base_url();?>public/productvideos/" type="video/mp4">
                    	</video>
                    </div>
                </div>
			<?php }?>
            </div>
            <div class="col-md-2 col-sm-12"></div>
        </div>
        </div>
    </div> 
    <!-- uploading video form section /////////////////////////////////////-->
    <div class="container mb-0 mob-hide">
            <!--<form class="uploadform" action="" method="post" enctype="multipart/form-data">-->
                <div class="row">
                  
          
                    <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 center" >
                    <div class="col-md-3 mob-hide">
            <?php if($val == 1){?>
                    <div class="contactBox" >
                       <!--- <div class="headingBox">Product Categories</div>--->
                        <div class="content" style="width:1000px">
                            <ul>
                            <?php if($data_c){
                                foreach($data_c as $data_val){
                                  if($data_val->name != ''){?>       
                               <li class="category_<?php echo $data_val->category_id;?> category_list" onclick="selectCategory('<?php echo $data_val->category_id;?>')"  <?php if($val == 1){if($category_id == $data_val->category_id){?>style="background:#eee;<?php }}?>">
                                   
                                    <span ><?php echo $data_val->name;?></span>   
                                    <i class="fa fa-angle-down down_<?php echo $data_val->category_id;?>" style="font-size: 17px;float: right;margin-top: 3px;"></i>
                                    <i class="fa fa-angle-down down_<?php echo $data_val->category_id;?> hides" style="font-size: 17px;float: right;margin-top: 3px;"></i>
                                </li>
                               
                            <?php }}}?>
                            <li> <div class="upload-btn-wrapper">
                          <a  style="padding:8px;font-size:16px" class="btn" href="<?php echo base_url();?>uploadservice">+Service</a>
                          <!--<input type="file" name="servicevideo" />-->
                        </div></li>
                        <li> <div class="upload-btn-wrapper">
                        <a  style="padding:8px;font-size:16px" class="btn" href="<?php echo base_url();?>uploadproduct">+Product</a>
                          <!--<input type="file" name="servicephoto" />-->
                        </div></li>
                            </ul>
                        </div>
                    </div>
              <?php }else{?>
              <div class="contactBox" >
                       <!---- <div class="headingBox">Service Categories </div>--------------------------------------------->


                        <div class="content" style="width:1000px">
                            <ul id="" >
                            <?php if($data_s){
                                foreach($data_s as $data_val){
                                   if($data_val->name != ''){?>
                               <li class="s_category_<?php echo $data_val->category_id;?> s_category_list" onclick="selectServiceCategory('<?php echo $data_val->category_id;?>')" <?php if($val == 2){if($category_id == $data_val->category_id){?>style="background:#eee;<?php }}?>">
                                   
                                    <span ><?php echo $data_val->name;?></span>   
                                    <i class="fa fa-angle-down s_down_<?php echo $data_val->category_id;?>" style="font-size: 17px;float: right;margin-top: 3px;"></i>
                                    <i class="fa fa-angle-down s_down_<?php echo $data_val->category_id;?> hides" style="font-size: 17px;float: right;margin-top: 3px;"></i>
                                </li>
                                <?php if($data_val->services){?>
                                <span class="service_list service_<?php echo $data_val->category_id;?> hides" >
                                    <li >
                                        <span style="font-weight:600">Services</span> 
                                    </li>
                                <?php  foreach($data_val->services as $pd){?>
                                        <li style="padding:0">
                                           <img onclick="products_detailx('<?php echo $pd->id;?>')" src="<?php echo base_url();?>public/productimages/<?php echo $pd->servicephoto;?>" style="border: 1px solid #ddd;">
                                            <span onclick="products_detailx('<?php echo $pd->id;?>')" style="text-overflow: ellipsis;overflow: hidden;"><?php echo $pd->service;?></span> 
                                        </li>
                                    <?php }?>
                                </span>
                                <?php }?>
                            <?php }}}?>
                            <li> <div class="upload-btn-wrapper">
                            <a  style="padding:8px;font-size:16px" class="btn" href="<?php echo base_url();?>uploadservice">+Service</a>
                          <!--<input type="file" name="servicevideo" />-->
                        </div></li>
                        <li> <div class="upload-btn-wrapper">
                        <a  style="padding:8px;font-size:16px" class="btn" href="<?php echo base_url();?>uploadproduct">+Product</a>
                          <!--<input type="file" name="servicephoto" />-->
                        </div></li>
                            </ul>
                        </div>
                    </div>
              <?php }?>
                </div>
                    </div>
                 
                </div> 
            <!--</form>-->
    </div>
    <!-- upload video section  end-->
    <!---------start of menu section------>
    <div class="container listing mt-15">
        <div class="row ">
      
        

               <!-----------end of section---------->
        <div class="col-md-12 mob-hide">
        <div class="row">
        <?php 
			if($product){
			foreach($product as $index=>$item){?>
            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-15 ">
                <div class="upload-video-box">
                    <div class="video-wrapper">
                        <div class="video-container" id="video-container" style="height:166px">

                        
                        <?php if ($item->is_live){ ?>

							<video
								id="stream-video-<?php echo $item->streaming_id; ?>"
								class="video-js vjs-fluid"
								controls
								preload="auto"
								width="640"
								height="264"
								poster="<?php echo base_url();?>assets/images/live.png"
								data-setup="{}"
							>
								<p class="vjs-no-js">
									To view this video please enable JavaScript, and consider upgrading to a
									web browser that
									<a href="https://videojs.com/html5-video-support/" target="_blank"
									>supports HTML5 video</a
									>
								</p>
							</video>

						<?php }else { ?>

                        	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/<?php echo $item->servicephoto;?>">
                        		<source src="<?php echo base_url();?>public/productvideos/<?php echo $item->servicevideo;?>" type="video/mp4">
                        	</video>

						<?php } ?>



                        </div>
                    </div>
                    <div class="upload-video-content">
                        <div class="col-2-grid prd-title-btn-info center" <?php if($val == 2){?> style="display:block;content-align:center"<?php }?>>
                            <?php if($val == 1){?> 
                                <h4 style="text-overflow: ellipsis;text-align:center;overflow: hidden;content-align:center;display: -webkit-box;-webkit-line-clamp: 1;text-align:center;-webkit-box-orient: vertical;" onclick="products_detail('<?php echo $item->id;?>')">
                                <?php echo $item->product;?></h4>
                              
                              <!--  <button class="btn-live-info" onclick="products_detail('<?php echo $item->id;?>')">Buy Now</button>--->
                            <?php }else{?>
                                <h4 style="cursor:pointer;text-align:center;content-align:center;overflow: hidden;text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;" onclick="products_detail('<?php echo $item->id;?>')">
                                <?php echo $item->service;?></h4>
                              <!---  <button class="btn-buynow" onclick="products_detail('<?php echo $item->id;?>')">Request for Service</button>--->
                            <?php }?>
                            <div class=" col-12">
                            
                           
                        </div>
                        <div>
                       
                            <?php if($val == 1){?> 
                                <div class="col-3-grid prd-price" style="width:200px">  
                                <div class="stars">
                               
                               <?php 
                              
                                   $rates = ($item->rates)?$item->rates:0;
                                   
                                   $rateSel = '';
                                 
                                 for($x=1;$x<=5;$x++){
                                 if($x <= $rates){ $ratesSel = 'select'; }else{ $ratesSel = '';}
                                 ?>
                                   <div style="font-size:20px;text-align:left" onclick="submitRates('<?php echo $item->id;?>','<?php echo $x;?>')" class="rates_<?php echo $x;?>_<?php echo $item->id;?> <?php echo $ratesSel;?>"><i class="fa fa-star"></i> </div>
                                
                               <?php }?>
                               <h4 style="text-align:right;-webkit-box-orient: vertical;padding-top:5px">Rating:<?php echo $item->ratesCount;?></h4>
                              
                               </div>
                               </div>  
                              
                              
                               
                         </div>

                            
                            <?php
                         }else{?>
                         
                         <div class="col-3-grid prd-price" style="width:200px"> 
                                <div class="stars" style="text-align:left">
                               
                              <?php 
                             
                                  $rates = ($item->rates)?$item->rates:0;
                                  
                                  $rateSel = '';
                                
                                for($x=1;$x<=5;$x++){
                                if($x <= $rates){ $ratesSel = 'select'; }else{ $ratesSel = '';}
                                ?>
                                  <div style="font-size:20px;text-align:left" onclick="submitRates('<?php echo $item->id;?>','<?php echo $x;?>')" class="rates_<?php echo $x;?>_<?php echo $item->id;?> <?php echo $ratesSel;?>"><i class="fa fa-star"></i> </div>
                               
                              <?php }?>
                              <h4 style="text-align:right;-webkit-box-orient: vertical;padding-top:5px">Rating:<?php echo $item->ratesCount;?></h4>
                              
                              </div>
                              </div>
                             
                             
                              
                        </div>
                            
                              <?php }?>
                        </div>    
                       
                             
                        <div class="col-2-grid prd-price">   
                            <h4>About: </h4>
                            <h4 style="text-align:right;overflow: hidden;content-align:left;display: -webkit-box;-webkit-line-clamp: 1;text-align:right;-webkit-box-orient: vertical;"> <?php echo $item->about;?> , <?php echo $item->pick_ship;?></h4>
                       
                        </div>
                        <div class="col-2-grid prd-price">   
                            <h4>Price: </h4>
                            <h4><?php echo $item->price;?>  </h4>
                        </div>
                        <div class="col-2-grid prd-views-likes">
                            <h4>Like:</h4>
                            <button type="button" class="like_<?php echo $item->id;?> btn-views-links <?php if($item->isLike){?> hides <?php }?>" onclick="submitLikes('<?php echo $item->id;?>')"><img src="<?php echo base_url();?>assets/images/thumb-up.png" class="img-responsive" alt="img"></button>
                             <button type="button" class="dislike_<?php echo $item->id;?> btn-views-links dis-link <?php if(!$item->isLike){?> hides <?php }?>" onclick="submitDislikes('<?php echo $item->id;?>')"><img src="<?php echo base_url();?>assets/images/thumb-up.png" class="img-responsive" alt="img"></button>
                        </div> 
                        <div class="col-2-grid prd-price">
                            <h4>View Likes: </h4>
                            <h4 class="web_likesCls_<?php echo $item->id;?>"><?php echo $item->likes;?></h4>
                        </div>
                        <div class="col-2-grid prd-price">
                            <h4>Live Stream Price: </h4>
                            <h4><?php echo $item->live_stream_price;?></h4>
                        </div>
                     <!----  <div class="col-2-grid  prd-price">
                            <h4>Year of Experience:</h4>
                            <h4><?php echo $item->exp;?></h4>
                        </div>-->
                         <div class="col-2-grid  prd-price">
                        <?php if($val == 2){?> <?php }?>
                            <?php if($val == 1){?>
                                <h4>Units of available:</h4>
                            <h4><?php echo $item->exp;?></h4>
                                <?php }else{?>
                              
                               
                                    <h4>Years of Experience:</h4>
                            <h4><?php echo $item->exp;?></h4>
                                <?php }?>
                            
                           
                       
                        </div>  
                        
                        <div class="col-2-grid btn-live-info">
                            <a href="<?php echo base_url();?>startVideo" class="btn-live">Live Stream Product <i class="fa fa-video-camera" aria-hidden="true"></i></a>
                            <button class="btn-live" onclick="Requestlivestream('<?php echo $item->id;?>')">Edit <i class="fa fa-video-camera" aria-hidden="true"></i></button>
                            <button class="btn-live">Request Live <i class="fa fa-video-camera" aria-hidden="true"></i></button>
                        </div>  
                        

                        <div class="col-2-grid btn-live-info">
                        <?php if($val == 2){?> <?php }?>
                            <?php if($val == 1){?>
                                <button class="btn-live" style="padding-top:10px;padding-bottom:10px" onclick="products_detail('<?php echo $item->id;?>')">Buy Now</button>
                            <?php }else{?>
                              
                               
                                <button class="btn-buynow" onclick="products_detail('<?php echo $item->id;?>')">Request for Service</button>
                            <?php }?>
                            
                            <?php if($val == 1){?> 
                               
                            <?php }else{?>
                               
                                
                                <button class="btn-buynow" onclick="request_for_service('<?php echo $item->id;?>')">Book Appointment</button>
                            <?php }?>
                       
                            </div>  


















                       

                  
                    </div>
                </div>
            </div>
            
           
        <?php }}?>
          </div>
          </div>
          </div>
          <div class="row">
            <?php 
			if($product){?>
			 <div class="owl-carousel owl-theme mob-show" data-items="3" data-margin="10" data-loop="true" data-rewind="true" data-dots="false" data-nav="true" data-nav-speed="500" data-autoplay="false" data-autoplay-timeout="1500" data-autoplay-speed="500" data-autoplay-hover-pause="true" data-tablet-landscape="3" data-tablet-portrait="2" data-mobile-landscape="1" data-mobile-portrait="1" data-play_type="loop" style="position:relative"> 
			<?php foreach($product as $index=>$item){?>
			    
                <div class="item"> 
                      <div class="upload-video-box">
                    <div class="video-wrapper">
                        <div class="video-container" id="video-container" >
                        
                        <?php if ($item->is_live){ ?>
                                <video
                                    id="stream-video-mobile-<?php echo $item->streaming_id; ?>"
                                    class="video-js vjs-fluid"
                                    controls
                                    preload="auto"
                                    width="640"
                                    height="264"
                                    poster="<?php echo base_url();?>assets/images/live.png"
                                    data-setup="{}"
                                >
                                    <p class="vjs-no-js">
                                        To view this video please enable JavaScript, and consider upgrading to a
                                        web browser that
                                        <a href="https://videojs.com/html5-video-support/" target="_blank"
                                        >supports HTML5 video</a
                                        >
                                    </p>
                                    </video>
                            <?php }else { ?>
                                <video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/<?php echo $item->servicephoto;?>">
                                    <source src="<?php echo base_url();?>public/productvideos/<?php echo $item->servicevideo;?>" type="video/mp4">
                                </video>
                            <?php } ?>

                            

                        </div>
                    </div>
                    <div class="upload-video-content">
                        <div class="col-2-grid prd-title-btn-info" <?php if($val == 2){?> style="display:block"<?php }?>>
                            <?php if($val == 1){?><h4 style="cursor:pointer" onclick="products_detail('<?php echo $item->id;?>')">
                                <?php echo $item->product;?></h4>
                                <button style="padding:10px" class="btn-buynow" onclick="products_detail('<?php echo $item->id;?>')">Buy Now</button>
                            <?php }else{?>
                                <h4 style="cursor:pointer;width: 51%;overflow: hidden;text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;float: left;" onclick="request_for_service('<?php echo $item->id;?>')">
                                <?php echo $item->service;?></h4>
                                <button class="btn-buynow" onclick="products_detail('<?php echo $item->id;?>')">Request for Service</button>
                            <?php }?>
                        </div>
                        <div class="prd-address" style="height:auto">
                             <?php if($val == 1){?> 
                                <h4 style="text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">About: <?php echo $item->about;?> , <?php echo $item->pick_ship;?></h4>
                                
                            <?php }else{?>
                                <h4 style="width: 51%;text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;float:left">About: <?php echo $item->about;?> , <?php echo $item->pick_ship;?></h4>
                                
                                <button class="btn-buynow" onclick="request_for_service('<?php echo $item->id;?>')">Book Appointment</button>
                            <?php }?>
                            </div>    
                        <div class="col-2-grid prd-price">   
                            <h4>Price: </h4>
                            <h4><?php echo $item->price;?>  </h4>
                        </div>
                        <div class="col-2-grid prd-views-likes">
                            <h4>Like:</h4>
                            <button type="button" class="like_<?php echo $item->id;?> btn-views-links <?php if($item->isLike){?> hides <?php }?>" onclick="submitLikes('<?php echo $item->id;?>')"><img src="<?php echo base_url();?>assets/images/thumb-up.png" class="img-responsive" alt="img" style="width: 100%;max-width: 18px;height: 18px"></button>
                            <button type="button" class="dislike_<?php echo $item->id;?> btn-views-links dis-link <?php if(!$item->isLike){?> hides <?php }?>" onclick="submitDislikes('<?php echo $item->id;?>')"><img src="<?php echo base_url();?>assets/images/thumb-up.png" class="img-responsive" alt="img" style="width: 100%;max-width: 18px;height: 18px"></button>
                        </div>   
                        <div class="col-2-grid prd-price">
                            <h4>View Likes: </h4>
                            <h4 class="mob_likesCls_<?php echo $item->id;?>"><?php echo $item->likes;?></h4>
                          
                        </div>
                        <div class="col-2-grid prd-price">
                            <h4>Live Stream Price: </h4>
                            <h4><?php echo $item->live_stream_price;?></h4>
                        </div>
                        <div class="col-2-grid  prd-price">
                            <h4>Year of Experience:</h4>
                            <h4><?php echo $item->exp;?></h4>
                        </div>
                        <div class="col-2-grid btn-live-info">
                            <a href="<?php echo base_url();?>startVideo" class="btn-live">Live Stream Product <i class="fa fa-video-camera" aria-hidden="true"></i></a>
                            
                            <button class="btn-live">Request Live  <i class="fa fa-video-camera" aria-hidden="true"></i></button>
                        </div> 
                       
                       
                    </div>
                </div>
                    </div>
           
			
			<?php }?>
			 </div> <?php }?>
            
        </div>
    </div>
</section>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>


<script>
function selectCategory(cat_id = ''){
        let city_id = '<?php echo $city_id;?>';
        let city = '<?php echo $city;?>';
        if(cat_id){
            window.location = "<?php echo base_url('');?>products/"+cat_id+"/"+city_id;
        }else{
             window.location = "<?php echo base_url('');?>products";
        }
        return;
}
function selectServiceCategory(cat_id = ''){
        let city_id = '<?php echo $city_id;?>';
        let city = '<?php echo $city;?>';
        if(cat_id){
            window.location = "<?php echo base_url('');?>services/"+cat_id+"/"+city_id;
        }else{
             window.location = "<?php echo base_url('');?>services";
        }
        return;
}
    function submitRates(id,rates){
        let type = 1;
        <?php if($val == 1){?>
            type = 1;
        <?php }else{?>
            type = 2;
        <?php }?>
        let formData = {
            type:type,
            product_id:id,
            rates:rates
        }
         $.ajax({
            url: "<?php echo base_url('submitRates');?>",
            type: "POST",
            data: formData,
            dataType: "json",
            success: function(result) {
              
                let obj = result;
                if(obj.error){
                     swal('',obj.msg,'error');
                }else{
                    for(let i=5;i>0;i--){
                        $('.rates_'+i+'_'+id).removeClass('select');
                    }
                    for(let i=rates;i>0;i--){
                        $('.rates_'+i+'_'+id).addClass('select');
                        
                    }
                   
                  
                    
                     swal('',obj.msg,'success');
                    
                    

                }
              
                

            }
        });
       
    }
   
    function submitLikes(id){
        let type = 1;
        <?php if($val == 1){?>
            type = 1;
        <?php }else{?>
            type = 2;
        <?php }?>
        let formData = {
            type:type,
            product_id:id
        }
         $.ajax({
            url: "<?php echo base_url('submitLikes');?>",
            type: "POST",
            data: formData,
            dataType: "json",
            success: function(result) {
                let obj = result;
                if(obj.error){
                     swal('',obj.msg,'error');
                }else{
                    $('.like_'+id).addClass('hides');
                    $('.dislike_'+id).removeClass('hides');
                     swal('',obj.msg,'success');
                 
                 let webLikesCls = $('.web_likesCls_'+id).text();
                 let mobLikesCls = $('.mob_likesCls_'+id).text();
                 let web_likes = parseInt(webLikesCls) + 1;
                 let mob_likes = parseInt(mobLikesCls) + 1;
                 $('.web_likesCls_'+id).text(web_likes);
                 $('.mob_likesCls_'+id).text(mob_likes);
                 
                }
            }
        });
    }
    
    function submitDislikes(id){
        let type = 1;
        <?php if($val == 1){?>
            type = 1;
        <?php }else{?>
            type = 2;
        <?php }?>
        let formData = {
            type:type,
            product_id:id
        }
         $.ajax({
            url: "<?php echo base_url('submitDislikes');?>",
            type: "POST",
            data: formData,
            dataType: "json",
            success: function(result) {
                let obj = result;
                if(obj.error){
                     swal('',obj.msg,'error');
                }else{
                    $('.dislike_'+id).addClass('hides');
                    $('.like_'+id).removeClass('hides');
                     swal('',obj.msg,'success');
                     
                     let webLikesCls = $('.web_likesCls_'+id).text();
                     let mobLikesCls = $('.mob_likesCls_'+id).text();
                     let web_likes = parseInt(webLikesCls) - 1;
                     let mob_likes = parseInt(mobLikesCls) - 1;
                     $('.web_likesCls_'+id).text(web_likes);
                     $('.mob_likesCls_'+id).text(mob_likes);
                }
            }
        });
    }
    
    function products_detail(id){ 
        <?php if($val == 1){?>
         window.location = '<?php echo base_url();?>products_detail/'+id;
        <?php }else{?>
        window.location = '<?php echo base_url();?>services_detail/'+id;
        <?php }?>
    }
    
    function request_for_service(id){
        window.location = '<?php echo base_url();?>request-for-service/'+id;
    }
    $(function() {
  // Owl Carousel
      var owl = $(".owl-carousel");
      owl.owlCarousel({
        responsive : {
      // breakpoint from 0 up
      0 : {
        stagePadding: 0,
        loop: true,
        responsiveClass: true,
        dots: false,
        nav: true,
        autoHeight: true,
        items: 1,
        autoPlay:true
      },
      // breakpoint from 768 up
      768 : {
        items: 4
      }
    }
      });
    });


</script>

<script>

$('.submitReg').click(function(){
    let country = $('#country_id').val();
    let state = $('#state_id').val();
    let city = $('#city_id').val();
    if(country && state && city){
          $('#formSubmit').submit();
           location.reload();
    }else{
        swal('','Please Enter All Fields!!!','error'); 
         location.reload();
    }
});
$(document).ready(function(){
    <?php if($country_id){?>
    let country_id = '<?php echo $country_id;?>';
		if(country_id){
			$.ajax({
					url: "<?php echo base_url('getStateByCountryIdAjax');?>", 
					type:"POST",
					data:"country_id="+country_id,
					success: function(result){
						if(result){
							let obj = JSON.parse(result);
							if(obj.error){
								let htmls = '';
								htmls += '<option value="">--Select Region--</option>';
								$('#state_id').html(htmls);
								return false;
							}else{
								let records = obj.data;
								let htmls = '';
								htmls += '<option value="">--Select Region--</option>';
								if(records.length > 0){
								    let selectRegion = '<?php echo $state_id;?>';
								    let regionVal = '';
									for(let x=0; x<records.length;x++){
									    regionVal = (selectRegion == records[x].id)?'selected':'';
										htmls += '<option value="'+records[x].id+'" '+regionVal+'>'+records[x].region+'</option>';
									}
									
								}
								$('#state_id').html(htmls);
								
							}
						}
					}
			});
		}
    
    /// city ///
	let state_id = '<?php echo $state_id;?>';
	if(state_id){
		$.ajax({
			url: "<?php echo base_url('getCityByStateIdAjax');?>", 
			type:"POST",
			data:"state_id="+state_id,
			success: function(result){
				if(result){
					let obj2 = JSON.parse(result);
					console.log(obj2)
					if(obj2.error){
						let htmls2 = '';
						htmls2 += '<option value="">--Select City--</option>';
						$('#city_id').html(htmls2);
						return false;
					}else{
						let records2 = obj2.data;
						let htmls2 = '';
						htmls2 += '<option value="">--Select City--</option>';
						if(records2.length > 0){
						    let selectCity = '<?php echo $city_id;?>';
						    let cityVal = '';
							for(let x=0; x<records2.length;x++){
							    cityVal = (selectCity == records2[x].id)?'selected':'';
								htmls2 += '<option value="'+records2[x].id+'" '+cityVal+'>'+records2[x].city+'</option>';
							}
							
						}
						$('#city_id').html(htmls2);
						
					}
				}
			}
		});
	}
		/// city ///
    
    <?php }?>
	$(document).on('change','#country_id',function(){
		let country_id = $(this).val();
		if(country_id){
			$.ajax({
					url: "<?php echo base_url('getStateByCountryIdAjax');?>", 
					type:"POST",
					data:"country_id="+country_id,
					success: function(result){
						if(result){
							let obj = JSON.parse(result);
							if(obj.error){
								let htmls = '';
								htmls += '<option value="">--Select Region--</option>';
								$('#state_id').html(htmls);
								return false;
							}else{
								let records = obj.data;
								let htmls = '';
								htmls += '<option value="">--Select Region--</option>';
								if(records.length > 0){
									for(let x=0; x<records.length;x++){
										htmls += '<option value="'+records[x].id+'">'+records[x].region+'</option>';
									}
									
								}
								$('#state_id').html(htmls);
								/// city ///
								$('#state_id').change(function(){
									let state_id = $(this).val();
									console.log(state_id);
									if(state_id){
										$.ajax({
											url: "<?php echo base_url('getCityByStateIdAjax');?>", 
											type:"POST",
											data:"state_id="+state_id,
											success: function(result){
												if(result){
													let obj2 = JSON.parse(result);
													console.log(obj2)
													if(obj2.error){
														let htmls2 = '';
														htmls2 += '<option value="">--Select City--</option>';
														$('#city_id').html(htmls2);
														return false;
													}else{
														let records2 = obj2.data;
														console.log(records2);
														let htmls2 = '';
														htmls2 += '<option value="">--Select City--</option>';
														if(records2.length > 0){
															for(let x=0; x<records2.length;x++){
																htmls2 += '<option value="'+records2[x].id+'">'+records2[x].city+'</option>';
															}
															
														}
														$('#city_id').html(htmls2);
														
													}
												}
											}
										});
									}
								});
								/// city ///
							}
						}
					}
			});
		}
	});
	
	/// city ///
								$('#state_id').change(function(){
									let state_id = $(this).val();
									console.log(state_id);
									if(state_id){
										$.ajax({
											url: "<?php echo base_url('getCityByStateIdAjax');?>", 
											type:"POST",
											data:"state_id="+state_id,
											success: function(result){
												if(result){
													let obj2 = JSON.parse(result);
													console.log(obj2)
													if(obj2.error){
														let htmls2 = '';
														htmls2 += '<option value="">--Select City--</option>';
														$('#city_id').html(htmls2);
														return false;
													}else{
														let records2 = obj2.data;
														console.log(records2);
														let htmls2 = '';
														htmls2 += '<option value="">--Select City--</option>';
														if(records2.length > 0){
															for(let x=0; x<records2.length;x++){
																htmls2 += '<option value="'+records2[x].id+'">'+records2[x].city+'</option>';
															}
															
														}
														$('#city_id').html(htmls2);
														
													}
												}
											}
										});
									}
								});
								/// city ///
});
</script>
<script src="https://unpkg.com/video.js/dist/video.js"></script>
<script src="https://unpkg.com/@videojs/http-streaming/dist/videojs-http-streaming.js"></script>
<script>
function Requestlivestream(id){
         window.location = '<?php echo base_url();?>Requestlivestream/'+id;
    }
</script>
<?php
foreach ($product as $index=>$item){
    
    if ($item->is_live){ ?>

        <script>
            var player = videojs('stream-video-' + <?php echo $item->streaming_id; ?>, {
                responsive: true
            });
            var player2 = videojs('stream-video-mobile-' + <?php echo $item->streaming_id; ?>, {
                responsive: true
            });
            if (location.protocol.startsWith("https")) {

                player.src({
                    src: 'https://streaming.videoviewhomesandrentals.com/WebRTCApp/streams/user-<?php echo $item->streaming_id; ?>-stream.m3u8',
                    type: 'application/x-mpegURL',
                })
            
                player2.src({
                    src: 'https://streaming.videoviewhomesandrentals.com/WebRTCApp/streams/user-<?php echo $item->streaming_id; ?>-stream.m3u8',
                    type: 'application/x-mpegURL',
                })
            
            } else {

                player.src({
                    src: 'http://localhost:5080/WebRTCApp/streams/user-<?php echo $item->streaming_id; ?>-stream.m3u8',
                    type: 'application/x-mpegURL',
                })
                player2.src({
                    src: 'http://localhost:5080/WebRTCApp/streams/user-<?php echo $item->streaming_id; ?>-stream.m3u8',
                    type: 'application/x-mpegURL',
                })
            
            }

        </script>
   <?php }
} ?>



<?php include('footer.php');?>

