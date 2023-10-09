<?php include('header.php');?>
<?php /*<link href="https://northtechmachining.com/assets/vendor/owl-carousel/css/owl.carousel.min.css" rel="stylesheet">
<link href="https://northtechmachining.com/assets/vendor/owl-carousel/css/owl.theme.default.min.css" rel="stylesheet">*/?>

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
.mob-hide{
    display:block;
}
.mob-show{
    display:none;
}
@media only screen and (max-width: 768px) {
	.listing video{
		height:173px;
	}
	.single video{
        height:190px;
    }
    .mob-hide{
        display:none;
    }
    .mob-show{
        display:block;
    }
}
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
     <form action="<?php echo base_url('products');?>" id="formSubmit" method="post">
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
<section class="section-page mt-50 mb-50">
    <div class="container">
        
        <div class="row">
            <div class="col-md-2 col-sm-12"></div>
            <div class="col-md-8 col-sm-12 single">
			<?php if($oneproduct){?>
                <div class="video-wrapper mtb-15">
                    <div class="video-container" id="video-container">
                    	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/<?php echo $oneproduct->servicephoto;?>">
                    		<source src="<?php echo base_url();?>public/productvideos/<?php echo $oneproduct->servicevideo;?>" type="video/mp4">
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
    <!-- uploading video form section -->
    <div class="container mb-20">
            <!--<form class="uploadform" action="" method="post" enctype="multipart/form-data">-->
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 center">
                        <div class="upload-btn-wrapper">
                          <a class="btn" href="<?php echo base_url();?>uploadproduct">+ Upload Product</a>
                          <!--<input type="file" name="servicephoto" />-->
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 center">
                        <div class="upload-btn-wrapper">
                          <a class="btn" href="<?php echo base_url();?>uploadservice">+ Upload Services</a>
                          <!--<input type="file" name="servicevideo" />-->
                        </div>
                    </div>
                </div> 
            <!--</form>-->
    </div>
    <!-- upload video section -->
    <div class="container listing">
        <div class="row">
        <?php 
			if($product){
			foreach($product as $index=>$item){?>
            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-15">
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
                            <h4>$<?php echo $item->live_stream_price;?>  </h4>
                        </div>
                        <div class="col-2-grid prd-views-likes">
                            <h4>Views Likes:</h4>
                            <button class="btn-views-links"><img src="assets/images/thumb-up.png" class="img-responsive" alt="img"></button>
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
            
            <?php /*<div class="owl-carousel mob-show " data-items="3" data-margin="10" data-loop="true" data-rewind="true" data-dots="false" data-nav="true" data-nav-speed="500" data-autoplay="false" data-autoplay-timeout="1500" data-autoplay-speed="500" data-autoplay-hover-pause="true" data-tablet-landscape="3" data-tablet-portrait="2" data-mobile-landscape="1" data-mobile-portrait="1" data-play_type="loop"> 
                <div class="cc-item"> 
                      <article class="blog-list-item"> 
                        <a href="#" class="bl-item-image"><img src="<?php echo base_url();?>public/productimages/<?php echo $item->servicephoto;?>" alt="image"></a> </article>
                      <div style="bottom:0px;">
                       </div>
                    </div>
            </div>*/?>
            <?php }}?>
            
        </div>
    </div>
</section>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>
<script>
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
    
</script>
<script>

$('.submitReg').click(function(){
    let country = $('#country_id').val();
    let state = $('#state_id').val();
    let city = $('#city_id').val();
    if(country && state && city){
          $('#formSubmit').submit();
    }else{
        swal('','Please Enter All Fields!!!','error'); 
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
<?php include('footer.php');?>
<?php /*<script src="https://northtechmachining.com/assets/vendor/owl-carousel/js/owl.carousel.min.js"></script>*/?>