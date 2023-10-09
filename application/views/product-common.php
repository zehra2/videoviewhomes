<link href="https://northtechmachining.com/assets/vendor/owl-carousel/css/owl.carousel.min.css" rel="stylesheet">
<link href="https://northtechmachining.com/assets/vendor/owl-carousel/css/owl.theme.default.min.css" rel="stylesheet">
<script src="https://northtechmachining.com/assets/vendor/owl-carousel/js/owl.carousel.min.js"></script>
<style>
    .mob-hide{
    display:block !important;
}
.mob-show{
    display:none !important;
}
@media only screen and (max-width: 768px) {
   
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
}
</style>
<?php 
			if($product){
			foreach($product as $index=>$item){?>
            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-15 mob-hide">
                <div class="upload-video-box">
                    <div class="video-wrapper">
                        <div class="video-container" id="video-container">
                        	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/<?php echo $item->servicephoto;?>">
                        		<source src="<?php echo base_url();?>public/productvideos/<?php echo $item->servicevideo;?>" type="video/mp4">
                        	</video>
                        </div>
                    </div>
                    <div class="upload-video-content">
                        <div class="col-2-grid prd-title-btn-info" <?php if($val == 2){?> style="display:block"<?php }?>>
                            <?php if($val == 1){?><h4 style="cursor:pointer" onclick="products_detail('<?php echo $item->id;?>')">
                                <?php echo $item->product;?></h4>
                                <button class="btn-buynow" onclick="products_detail('<?php echo $item->id;?>')">Buy Now</button>
                            <?php }else{?>
                                <h4 style="cursor:pointer;width: 51%;overflow: hidden;text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;float: left;" onclick="products_detail('<?php echo $item->id;?>')">
                                <?php echo $item->service;?></h4>
                                <button class="btn-buynow" onclick="request_for_service('<?php echo $item->id;?>')">Request for Service</button>
                            <?php }?>
                        </div>
                        <div class="prd-address">
                            <h4 style="text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">About: <?php echo $item->about;?> , <?php echo $item->pick_ship;?></h4>
                        </div>    
                        <div class="col-2-grid prd-price">   
                            <h4>Price: </h4>
                            <h4>$<?php echo $item->price;?>  </h4>
                        </div>
                        <div class="col-2-grid prd-views-likes">
                            <h4>Views Likes:</h4>
                            <button type="button" class="like_<?php echo $item->id;?> btn-views-links <?php if($item->isLike){?> hides <?php }?>" onclick="submitLikes('<?php echo $item->id;?>')"><img src="assets/images/thumb-up.png" class="img-responsive" alt="img"></button>
                             <button type="button" class="dislike_<?php echo $item->id;?> btn-views-links dis-link <?php if(!$item->isLike){?> hides <?php }?>" onclick="submitDislikes('<?php echo $item->id;?>')"><img src="assets/images/thumb-up.png" class="img-responsive" alt="img"></button>
                        </div>   
                        <div class="col-2-grid prd-price">
                            <h4>Live Stream Price: </h4>
                            <h4>$<?php echo $item->live_stream_price;?></h4>
                        </div>
                       <div class="col-2-grid  prd-price">
                            <h4>Experience:</h4>
                            <h4><?php echo $item->exp;?></h4>
                        </div>
                        <div class="col-2-grid btn-live-info">
                            <a href="<?php echo base_url();?>inputDevices" class="btn-live">Live Stream Product <i class="fa fa-video-camera" aria-hidden="true"></i></a>
                            
                            <button class="btn-live">Request Live <i class="fa fa-video-camera" aria-hidden="true"></i></button>
                        </div>   
                        <div class=" col-12">
                            
                          <div class="stars">
                              
                              <?php 
                                $rates = ($item->rates)?$item->rates:0;
                                $rateSel = '';
                              for($x=1;$x<=5;$x++){
                              if($x <= $rates){ $ratesSel = 'select'; }else{ $ratesSel = '';}
                              ?>
                                <div onclick="submitRates('<?php echo $item->id;?>','<?php echo $x;?>')" class="rates_<?php echo $x;?>_<?php echo $item->id;?> <?php echo $ratesSel;?>"><i class="fa fa-star"></i></div>
                              
                            <?php }?>
                            </div>
                      </div>
                    </div>
                </div>
            </div>
            
           
            <?php }}?>
            
            <?php 
			if($product){?>
			 <div class="owl-carousel owl-theme mob-show" data-items="3" data-margin="10" data-loop="true" data-rewind="true" data-dots="false" data-nav="true" data-nav-speed="500" data-autoplay="false" data-autoplay-timeout="1500" data-autoplay-speed="500" data-autoplay-hover-pause="true" data-tablet-landscape="3" data-tablet-portrait="2" data-mobile-landscape="1" data-mobile-portrait="1" data-play_type="loop" style="position:relative"> 
			<?php foreach($product as $index=>$item){?>
			    
                <div class="item"> 
                      <div class="upload-video-box">
                    <div class="video-wrapper">
                        <div class="video-container" id="video-container">
                        	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/<?php echo $item->servicephoto;?>">
                        		<source src="<?php echo base_url();?>public/productvideos/<?php echo $item->servicevideo;?>" type="video/mp4">
                        	</video>
                        </div>
                    </div>
                    <div class="upload-video-content">
                        <div class="col-2-grid prd-title-btn-info" <?php if($val == 2){?> style="display:block"<?php }?>>
                            <?php if($val == 1){?><h4 style="cursor:pointer" onclick="products_detail('<?php echo $item->id;?>')">
                                <?php echo $item->product;?></h4>
                                <button class="btn-buynow" onclick="products_detail('<?php echo $item->id;?>')">Buy Now</button>
                            <?php }else{?>
                                <h4 style="cursor:pointer;width: 51%;overflow: hidden;text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;float: left;" onclick="request_for_service('<?php echo $item->id;?>')">
                                <?php echo $item->service;?></h4>
                                <button class="btn-buynow" onclick="request_for_service('<?php echo $item->id;?>')">Request for Service</button>
                            <?php }?>
                        </div>
                        <div class="prd-address">
                            <h4 style="text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">About: <?php echo $item->about;?> , <?php echo $item->pick_ship;?></h4>
                        </div>    
                        <div class="col-2-grid prd-price">   
                            <h4>Price: </h4>
                            <h4>$<?php echo $item->price;?>  </h4>
                        </div>
                        <div class="col-2-grid prd-views-likes">
                            <h4>Views Likes:</h4>
                            <button type="button" class="like_<?php echo $item->id;?> btn-views-links <?php if($item->isLike){?> hides <?php }?>" onclick="submitLikes('<?php echo $item->id;?>')"><img src="assets/images/thumb-up.png" class="img-responsive" alt="img" style="width: 100%;max-width: 18px;height: 18px"></button>
                            <button type="button" class="dislike_<?php echo $item->id;?> btn-views-links dis-link <?php if(!$item->isLike){?> hides <?php }?>" onclick="submitDislikes('<?php echo $item->id;?>')"><img src="assets/images/thumb-up.png" class="img-responsive" alt="img" style="width: 100%;max-width: 18px;height: 18px"></button>
                        </div>   
                        <div class="col-2-grid prd-price">
                            <h4>Live Stream Price: </h4>
                            <h4>$<?php echo $item->live_stream_price;?></h4>
                        </div>
                        <div class="col-2-grid  prd-price">
                            <h4>Experience:</h4>
                            <h4><?php echo $item->exp;?></h4>
                        </div>
                        <div class="col-2-grid btn-live-info">
                            <a href="<?php echo base_url();?>inputDevices" class="btn-live">Live Stream Product <i class="fa fa-video-camera" aria-hidden="true"></i></a>
                            
                            <button class="btn-live">Request Live  <i class="fa fa-video-camera" aria-hidden="true"></i></button>
                        </div> 
                        <div class=" col-12">
                            
                          <div class="stars">
                              
                              <?php 
                                $rates = ($item->rates)?$item->rates:0;
                                $rateSel = '';
                              for($x=1;$x<=5;$x++){
                              if($x <= $rates){ $ratesSel = 'select'; }else{ $ratesSel = '';}
                              ?>
                                <div onclick="submitRates('<?php echo $item->id;?>','<?php echo $x;?>')" class="rates_<?php echo $x;?>_<?php echo $item->id;?> <?php echo $ratesSel;?>"><i class="fa fa-star"></i></div>
                              
                            <?php }?>
                            </div>
                      </div>
                    </div>
                </div>
                    </div>
           
			
			<?php }?>
			 </div> <?php }?>
			 
 <script>
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