<?php include('header.php');?>
<style type="text/css">
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
.col-2-grid {display: flex;justify-content: space-between;column-gap: 10px;margin-bottom: 10px;margin-top: 10px;}
.upload-video-box {background-color: #ffffff;border: 1px solid #dcdad6;border-radius: 8px; margin-bottom: 10px;overflow: hidden;position: relative;padding: 10px 10px 0px 10px;}
.btn-buynow {font-size: 13px;font-weight: 700;line-height: normal;border: none;background-color: #062C30;color: #fff;border-radius: 4px;padding: 5px 10px;}
.prd-address {margin-bottom: 10px;}
.btn-views-links {border: none;padding: 0px;background-color: transparent;}
.btn-views-links img {width: 100%;max-width: 18px;}
.btn-live {font-size: 12px;font-weight: 700;line-height: normal;border: none;background-color: #062C30;color: #fff;border-radius: 4px;padding: 4px 5px;
    display: flex;width: 100%;align-items: center;column-gap: 5px;text-align: center;justify-content: center;}
.btn-live img {width: 100%;max-width: 16px;}

.single video{
    height:475px;
}
.listing video{
	height:155px;
}
@media only screen and (max-width: 768px) {
	.listing video{
		height:173px;
	}
	.single video{
        height:190px;
    }
}
.statecity{
    padding: 0px 30px 70px;
}
section.statecity .statecitycountry {
    float: left;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    padding-left: 0px;
    padding-right: 30px;
    margin: 0;
}

section.aboutsecbanner {
    background-image: linear-gradient(#05595b, #062C30), url(assets/images/random-3162742262147.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 0px 0 30px;
    background-position: 90% 43%;
    background-blend-mode: multiply;
}

section.statecity .statecitycountry li a:before {
  content: "\2022";
  color: #000;
  font-weight: bold;
  display: inline-block;
  
}
.statecitycountry a {
    padding: 6px 6px 6px 0px;
}
section.statecity ul {
    float: none;
    padding: 0px;
    width: 100%;
    box-sizing: border-box;
}
.contactBox{
    
    border: 1px solid #ddd;
    border-radius: 5px 5px 0 0;
}
.contactBox .content ul li{
    border-bottom: 1px solid #ddd;
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

.video-container{
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
}
.hides{
    display:none;
}

</style>
<!-- about banner sec start -->
<section class="aboutsecbanner">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="abouttext2">
                    <h2>Category</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- statecity U.S.A start -->
<section class="statecity">
    <div class="container" style="max-width:100%">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2 style="margin-bottom: 20px;margin-top: 30px !important;"> <?php echo str_replace('%20', ' ', $city);?> <i class="fa fa-angle-right"></i> Categories</h2>
            </div>

           <div class="row">
               <?php /*if($data){
						foreach($data as $item){?>

               <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                   <ul class="statecitycountry">
                       <li>
                           <a href="<?php echo base_url();?>categoryvendor/<?php echo $item->category_id;?>/<?php echo $city_id;?>" data-toggle="collapse"
                               role="button" aria-expanded="false" aria-controls="multiCollapseExample1">&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $item->name;?>
                           </a>
                       </li>
                       <div class="clearfix"></div>
                   </ul>
               </div>

			   <?php }}*/?>
			  
			   <div class="col-md-2">
                    <div class="contactBox" style="margin-top: 12px;">
                        <div class="headingBox">Product Categories</div>
                        <div class="content">
                            <ul>
                            <?php if($data){
                                foreach($data as $data_val){
                                    ?>
                               <li class="category_<?php echo $data_val->category_id;?> category_list" onclick="selectCategory('<?php echo $data_val->category_id;?>')"  <?php if($val == 1){if($category_id == $data_val->category_id){?>style="background:#eee;<?php }}?>">
                                   
                                    <span ><?php echo $data_val->name;?></span>   
                                    <i class="fa fa-angle-right right_<?php echo $data_val->category_id;?>" style="font-size: 17px;float: right;margin-top: 3px;"></i>
                                    <i class="fa fa-angle-down down_<?php echo $data_val->category_id;?> hides" style="font-size: 17px;float: right;margin-top: 3px;"></i>
                                </li>
                                <?php if($data_val->products){?>
                                <span class="product_list product_<?php echo $data_val->category_id;?> hides" >
                                    <li >
                                        <span style="font-weight:600">Products</span> 
                                    </li>
                                <?php  foreach($data_val->products as $pd){?>
                                        <li style="padding:0">
                                           <img onclick="products_detail('<?php echo $pd->id;?>')" src="<?php echo base_url();?>public/productimages/<?php echo $pd->servicephoto;?>" style="border: 1px solid #ddd;">
                                            <span onclick="products_detail('<?php echo $pd->id;?>')"><?php echo $pd->product;?></span> 
                                        </li>
                                    <?php }?>
                                </span>
                                <?php }?>
                            <?php }}?>
                            </ul>
                        </div>
                    </div>
                                    
                </div>
                <div class="col-md-8">
                    <section class="section-page " style="margin-top: 13px;padding:0">
    
                        <div class="contaxiner listing">
                            <div class="row">
                            <?php 
                    			if($product){
                    			foreach($product as $item){?>
                                <div class="col-md-4 col-sm-12 col-xs-12 mb-15">
                                    <div class="upload-video-box">
                                        <div class="video-wrapper">
                                            <div class="video-container" id="video-container">
                                            	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/<?php echo $item->servicephoto;?>">
                                            		<source src="<?php echo base_url();?>public/productvideos/<?php echo $item->servicevideo;?>" type="video/mp4">
                                            	</video>
                                            </div>
                                        </div>
                                        <div class="upload-video-content">
                                            <div class="col-2-grid prd-title-btn-info">
                                                <h4 style="cursor:pointer" onclick="products_detail('<?php echo $item->id;?>')">
                                                    <?php if($val == 1){?><?php echo $item->product;?><?php }else{?><?php echo $item->service;?> <?php }?></h4>
                                                <button class="btn-buynow" onclick="products_detail('<?php echo $item->id;?>')">Buy Now</button>
                                            </div>
                                            <div class="prd-address">
                                                <h4 style="text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">About: <?php echo $item->about;?> , <?php echo $item->pick_ship;?></h4>
                                            </div>    
                                            <div class="col-2-grid prd-price">   
                                                <h4>Price: </h4>
                                                <h4>$<?php echo $item->live_stream_price;?>  </h4>
                                            </div>
                                            <div class="col-2-grid prd-views-likes">
                                                <h4>Views Likes:</h4>
                                                <button class="btn-views-links" style="border: none;padding: 0px;background-color: transparent;"><img src="http://wvwebdemo.com/home-rentals/assets/images/thumb-up.png" class="img-responsive" alt="img"></button>
                                            </div>   
                                            <div class="col-2-grid prd-qty-available">
                                                <h4>Quantity Available: <?php echo $item->quantity_available;?></h4>
                                            </div>
                                            <div class="col-2-grid btn-live-info">
                                                <a href="<?php echo base_url();?>inputDevices" class="btn-live">Live Stream Product <i class="fa fa-video-camera" aria-hidden="true"></i></a>
                                                
                                                <button class="btn-live">Request Live  <i class="fa fa-video-camera" aria-hidden="true"></i></button>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                                <?php }}?>
                                
                            </div>
                        </div>
                    </section>
                </div>
                <div class="col-md-2">
                    <div class="contactBox" style="margin-top: 12px;">
                        <div class="headingBox">Service Categories</div>
                        <div class="content">
                            <ul>
                            <?php if($data_s){
                                foreach($data_s as $data_val){
                                    ?>
                               <li class="s_category_<?php echo $data_val->category_id;?> s_category_list" onclick="selectServiceCategory('<?php echo $data_val->category_id;?>')" <?php if($val == 2){if($category_id == $data_val->category_id){?>style="background:#eee;<?php }}?>">
                                   
                                    <span ><?php echo $data_val->name;?></span>   
                                    <i class="fa fa-angle-right s_right_<?php echo $data_val->category_id;?>" style="font-size: 17px;float: right;margin-top: 3px;"></i>
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
                            <?php }}?>
                            </ul>
                        </div>
                    </div>
                                    
                </div>
                
            </div>
        </div>
</section>

<!-- statecity U.S.A end -->
<script>
    $('#category_id').select2();
    function products_detail(id){
        <?php if($val == 1){?>
        window.location = "<?php echo base_url('');?>products_detail/"+id;
        <?php }else{?>
        window.location = "<?php echo base_url('');?>services_detail/"+id;
        <?php }?>
    }
    
    function selectCategory(cat_id){
        let city_id = '<?php echo $city_id;?>';
        let city = '<?php echo $city;?>';
        window.location = "<?php echo base_url('');?>citycategory/"+city_id+"/"+city+"/1"+"/"+cat_id;
        
        return;
        //$('.product_list').addClass('hides');
        $('.category_list').css('background','#fff');
        $(".product_"+cat_id).slideToggle('slow', function() {
            if ($(".product_"+cat_id).is(':visible')){ 
                $(".product_"+cat_id).css('display','block');
                
                $('.right_'+cat_id).addClass('hides');
                $('.down_'+cat_id).removeClass('hides');
                $('.category_'+cat_id).css('background','#eee');
            }
            else{
                $(".product_"+cat_id).css('display','none');
                $('.right_'+cat_id).removeClass('hides');
                $('.down_'+cat_id).addClass('hides');
                $('.category_'+cat_id).css('background','#fff');
            }
        }); 
        
    }
    
    function selectServiceCategory(cat_id){
        let city_id = '<?php echo $city_id;?>';
        let city = '<?php echo $city;?>';
        window.location = "<?php echo base_url('');?>citycategory/"+city_id+"/"+city+"/2"+"/"+cat_id;
        
        return;
        $('.s_category_list').css('background','#fff');
        $(".service_"+cat_id).slideToggle('slow', function() {
            if ($(".service_"+cat_id).is(':visible')){ 
                $(".service_"+cat_id).css('display','block');
                
                $('.s_right_'+cat_id).addClass('hides');
                $('.s_down_'+cat_id).removeClass('hides');
                $('.s_category_'+cat_id).css('background','#eee');
            }
            else{
                $(".service_"+cat_id).css('display','none');
                $('.s_right_'+cat_id).removeClass('hides');
                $('.s_down_'+cat_id).addClass('hides');
                $('.s_category_'+cat_id).css('background','#fff');
            }
        }); 
    }
</script>
<!-- statecity U.S.A end -->
<?php include('footer.php');?>
