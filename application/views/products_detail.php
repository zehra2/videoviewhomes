<?php include('header.php');?>
<style type="text/css">
section.aboutsecbanner {
    background-image: linear-gradient(#05595b, #062C30), url(assets/images/-managed-services-banner162742458088.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 110px 0 100px;
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

.contactBox{
    
    border: 1px solid #ddd;
    border-radius: 5px 5px 0 0;
}
.contactBox .content ul li{
    border-bottom: 1px solid #ddd;
    padding-top: 0px;
    padding-left: 0px;
    cursor:pointer;
    
}
.content ul{
    padding: 0;
    margin: 0;
    list-style:none;
}
.contactBox .content ul li img{
    margin-right:10px;
    width: 65px;
    height: 50px;
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
</style>

<!-- banner sec start -->
<section class="aboutsecbanner">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="abouttext2">
                    <h2>
                       <?php echo $row->product;?></h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- banner sec end -->
<!-- full upload video section -->
<section class="aboutus" style="margin-bottom: 0px !important;">
    <div class="container">
        <h2 style="margin-bottom: 10px;margin-top: 20px !important;">Product Detail</h2>
        
</div></section>
<section class="section-page mt-50x mb-50" style=" padding: 0px 5%;">
    <div class="containexr">
        <div class="row">
            <div class="col-md-9 col-sm-12 single">
			<?php if($row){?>
                <div class="video-wrapper mtb-15">
                    <div class="video-container" id="video-container">
                    	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/<?php echo $row->servicephoto;?>">
                    		<source src="<?php echo base_url();?>public/productvideos/<?php echo $row->servicevideo;?>" type="video/mp4">
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
            
            <div class="row mt-50" style=" border-bottom: 1px solid #ddd;">
            
            <div class="col-12 col-md-12 prd-title-btn-info center" style="display: flex;justify-content: space-between;column-gap: 10px;margin-bottom: 10px;">
                    <h4 style="cursor:pointer;content-align:center; text-transform: uppercase;"><?php echo $row->company;;?></h4>
                   <!--- <button class="btn-buynow">Buy Now</button>-->
                </div>
                <div style="margin-left:30px">
                <div class="prd-address mt-50" >
                    <h4 class="color-h4" style="font-size: 18px;font-weight: 600;">About:&#160;&#160;&#160; <?php echo $row->about;?> , <?php echo $row->pick_ship;?></h4>
                </div> 
                <div class="col-12 col-md-12 prd-price" style="display: flex;column-gap: 10px;margin-bottom: 10px;">    
                    <h4 class="color-h4" style="font-size: 18px;font-weight: 600;">Company: &#160;&#160;&#160;<?php echo $row->company;?>  </h4>
                </div>
               
                <div class="col-12 col-md-12 prd-price" style="display: flex;column-gap: 10px;margin-bottom: 10px;">   
                    <h4 class="color-h4" style="font-size: 18px;font-weight: 600;">Category:&#160;&#160;&#160; <?php echo $row->category;?>  </h4>
                </div>
                <div class="col-12 col-md-12 prd-price" style="display: flex;column-gap: 10px;margin-bottom: 10px;">       
                    <h4 class="color-h4" style="font-size: 18px;font-weight: 600;">Sub Category:&#160;&#160;&#160; <?php echo $row->subcategory;?>  </h4>
                </div>
              
                <div class="col-12 col-md-12 prd-price" style="display: flex;column-gap: 10px;margin-bottom: 10px;">      
                    <h4 class="color-h4" style="font-size: 18px;font-weight: 600;">Website: &#160;&#160;&#160;<?php echo $row->website;?>  </h4>
                </div>
                <div class="col-12 col-md-12 prd-price" style="display: flex;column-gap: 10px;margin-bottom: 10px;">      
                    <h4 class="color-h4" style="font-size: 18px;font-weight: 600;">Product Size: &#160;&#160;&#160;<?php echo $row->product_size;?>  </h4>
                </div>
                <div class="col-12 col-md-12 prd-price" style="display: flex;column-gap: 10px;margin-bottom: 10px;">   
                    <h4 class="color-h4" style="font-size: 18px;font-weight: 600;">Price:&#160;&#160;&#160;<?php echo $row->price;?>  </h4>
                </div>
                <div class="col-6 col-md-4 prd-price" style="display: flex;column-gap: 10px;margin-bottom: 10px;">   
                    <h4 class="color-h4" style="font-size: 18px;font-weight: 600;">Live Stream Price: &#160;&#160;&#160;<?php echo $row->live_stream_price;?> </h4>
                </div>
                <!---<div class="col-6 col-md-4 prd-views-likes" style="text-align:right;margin-bottom: 10px;">   
                    <h4 style="font-size: 18px;font-weight: 600;">Views Likes: <button class="btn-views-links" style="border: none;padding: 0px;background-color: transparent;"><img src="http://wvwebdemo.com/home-rentals/assets/images/thumb-up.png" class="img-responsive" alt="img" style="max-width:25px"></button></h4>
                    
                </div>-->
                <div class="col-12 col-md-12 prd-price" style="display: flex;column-gap: 10px;margin-bottom: 10px;">   
                    <h4 class="color-h4" style="font-size: 18px;font-weight: 600;">Address:&#160;&#160;&#160; <?php echo $row->country;?>, <?php echo $row->region;?>, <?php echo $row->city;?> </h4>
                </div>
                <div class="col-12 col-md-12 prd-price" style="display: flex;column-gap: 10px;margin-bottom: 10px;">   
                    <h4  class="color-h4"style="font-size: 18px;font-weight: 600;"> Experience:&#160;&#160;&#160; <?php echo $row->exp;?> </h4>
                </div>
                <div class="col-12 col-md-12 prd-title-btn-info" style="display: flex;justify-content:left;column-gap: 10px;margin-bottom: 10px;margin-top:20px;float:left">
                   
                   <button class="btn-buynow" style="font-size:20px;">Buy Now</button>
            </div>
            </div>
            </div>
        </div>
        
        <div class="col-md-3">
            <div class="contactBox" style="margin-top: 12px;">
                <div class="headingBox">Products</div>
                <div class="content">
                    <ul>
                    <?php if($product){
                        foreach($product as $data){
                            ?>
                       <li <?php if($data->id == $row->id){?> style="background: #eee;"<?php }?>>
                            <img onclick="products_detail('<?php echo $data->id;?>')" src="<?php echo base_url();?>public/productimages/<?php echo $data->servicephoto;?>" style="border: 1px solid #ddd;">
                            <span onclick="products_detail('<?php echo $data->id;?>')"><?php echo $data->product;?></span>                       
                        </li>
                    <?php }}?>
                    </ul>
                </div>
            </div>
                            
        </div>
        
        
        </div>
    </div>
</section>
<script>
    function products_detail(id){
        window.location = '<?php echo base_url();?>products_detail/'+id;
    }
    
</script>
<?php include('footer.php');?>
