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
.mtb-15{margin-top:15px;margin-bottom:15px;}
.mt-15{margin-top:15px;}
.mb-15{margin-bottom:15px;}
.upload-service-form {margin-top: 50px;margin-bottom: 50px;padding: 0px 8%;}
.upload-service-form form label {display: inline-block;vertical-align: top;float: none;width: 100%;margin-bottom: 8px;}
.upload-service-form span.field_required {color: #790000;margin-left: 4px;}
.upload-service-form input[type="text"],
.upload-service-form select {max-width: 100%;width: 100%;border: 1px solid #c3c3c5;padding: 10px 20px;line-height: 24px;border-radius: 0;margin-bottom: 12px;color: #666;font-style: italic;text-align: left;background: #fff;}
.upload-service-form button {font-family: 'Lato', sans-serif;font-style: normal;font-weight: 700;font-size: 20px;line-height: normal;
    letter-spacing: 1px;background-color: #062C30;color: white;width: 100%;height: 100%;padding: 10px 15px;cursor: pointer;border: 0px;max-width: 315px;margin: 0px auto;display: block;text-align: center;}
.upload-btn-wrapper {position: relative;overflow: hidden;display: inline-block;}
.upload-btn-wrapper .btn {font-family: 'Lato', sans-serif;font-style: italic;font-weight: 700;font-size: 20px;line-height: normal;letter-spacing: 1px;background-color: #062C30;color: white;width: 100%;height: 100%;margin: 0px 0px;padding: 10px 15px;cursor: pointer;}
.upload-btn-wrapper input[type=file] {font-size: 100px;position: absolute;left: 0;top: 0;opacity: 0;}
.upload-form-txt p {font-family: 'Lato', sans-serif;font-size: 18px;line-height: normal;}
.hides{
    display:none;
}

.progress 
{
  display:none; 
  position:relative; 
  width:100%; 
  border: 1px solid #ddd; 
  padding: 1px; 
  border-radius: 3px; 
  height: 1.5rem;
}
.bar 
{ 
  background-color: #062c30; 
  width:0%; 
  height:20px; 
  border-radius: 3px; 
}
.percent 
{ 
  position:absolute; 
  display:inline-block; 
  top:3px; 
  left:48%; 
}
</style>
<!-- about banner sec start -->
<section class="aboutsecbanner">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="abouttext2">
                    <h2>UPLOAD SERVICE</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- upload service banner sec end -->

<!-- upload service form start -->
<section class="upload-service-form">
    <div class="container">
        <!--add error loop here-->
        
        
            <form class="uploadform" action="<?php echo base_url();?>saveUploadService" method="post" enctype="multipart/form-data" id="myForm">
            <!--{{ csrf_field() }}--->
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Name:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="name" required>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Address<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="address" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Country:<span class="field_required">*</span></label>
                        <br>
                        <select name="country_id" id="country_id" required>
						<option value="">--Select Country--</option>
                        <?php if($country){
							foreach($country as $data){?> 
                            <option value="<?php echo $data->id;?>"><?php echo $data->country;?></option>
						<?php }}?>
                        </select>
                    </div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Region:<span class="field_required">*</span></label>
                        <br>
                        <select name="state_id" id="state_id" required>
						<option value="">--Select Region--</option>
                        <?php if($region){
							foreach($region as $data){?>
                            <option value="<?php echo $data->id;?>"><?php echo $data->region;?></option>
						<?php }}?>
                        </select>
                    </div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>City:<span class="field_required">*</span></label>
                        <br>
                        <select name="city_id" id="city_id" required>
						<option value="">--Select City--</option>
                        <?php if($cities){
							foreach($cities as $city){?>
                            <option value="<?php echo $city->id;?>"><?php echo $city->city;?></option>
						<?php }}?>
                        </select>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <label>Category:<span class="field_required">*</span></label>
                        <br>
                        <select name="category_id" id="category_id" required>
						<option value="">--Select Category--</option>
                        <?php if($categories){
						foreach($categories as $category){?>
                            <option value="<?php echo $category->id;?>"><?php echo $category->name;?></option>
                        <?php }}?>
                        </select>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <label>Sub Category:<span class="field_required">*</span></label>
                        <br>
                        <select name="subcategory_id" id="subcategory_id" required>
						<option value="">--Select Sub Category--</option>
                        
                        </select>
                    </div>
                </div>
                <div class="row">
                   <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Service<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="service" required>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>About:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="about" required>
                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Price for Service:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="price" required>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Price per hour:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="price_hour" required>
                    </div>
                </div>   
                <div class="row">
                     <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Company:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="company" required>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Stream to facebook, instagram:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="stream" required>
                    </div>
                   
                </div> 
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Hour of operation:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="opreation_hour" required>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Get Estimate:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="get_estimate" required>
                    </div>
                </div> 
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Live stream Price Per Hour:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="live_stream_price" required>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Local Pick Up / Ship:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="pick_ship" required>
                    </div>
                </div> 
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>How Many Years Of Experience:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="exp" required>
                    </div>
                    
                </div> 
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Photo Upload:<span class="field_required">*</span></label>
                        <br>
                        <div class="upload-btn-wrapper">
                          <button class="btn">+ Upload Photo</button>
                          <input type="file" name="servicephoto" accept=".jpg, .jpeg, .png, .gif, .tiff, .psd, .pdf, .eps, .ai, .indd, .raw, .svg, .webp, .mp4" id="servicephoto"/>
                        </div>
                        <div id="display_image" class="hides" style="height:100px; width:100px;background-position: 50%;background-repeat: no-repeat;background-size: cover;">
                            
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Video Upload:<span class="field_required">*</span></label>
                        <br>
                        <div class="upload-btn-wrapper">
                          <button class="btn">+ Upload Video</button>
                          <input type="file" name="servicevideo" accept="video/*" />
                        </div>
                    </div>
                </div> 
                <!---<div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="upload-form-txt mtb-15">
                        <p>Live Stream Product End points Facebook~Instagram~Linkedln~Twitter~You Tube Free</p>
                        <p>Video View Home Page (in Video $5 per hour)</p>
                        <p>Video View City Page (at top $3 per hour)</p>
                        <p>Private 1 on 1 client request Vendor choice </p>
                        </div>
                    </div>
                </div>--->
                <div class='row ' >
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="progress" id="progress_div">
                            <div class='bar' id='bar'></div>
                            <div class='percent' id='percent'>0%</div>
                        </div>
                    </div>
                </div>
                <div class="row mt-15">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <button value="SUBMIT" type="submit" onclick='upload_image()'>Submit</button>
                        </div>
                </div>
            </form>
    </div>
</section>
<script src="assets/js/upload_form.js"></script>

<script>
$(document).ready(function(){
	$('#country_id').change(function(){
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
	
	$('#category_id').change(function(){
		let category_id = $(this).val();
		if(category_id){
			$.ajax({
					url: "<?php echo base_url('getSubcategoryByCategoryIdAjax');?>", 
					type:"POST",
					data:"category_id="+category_id,
					success: function(result){
						if(result){
							let obj = JSON.parse(result);
							if(obj.error){
								let htmls = '';
								htmls += '<option value="">--Select Sub Category--</option>';
								$('#subcategory_id').html(htmls);
								return false;
							}else{
								let records = obj.data;
								let htmls = '';
								htmls += '<option value="">--Select Sub Category--</option>';
								if(records.length > 0){
									for(let x=0; x<records.length;x++){
										htmls += '<option value="'+records[x].id+'">'+records[x].name+'</option>';
									}
									
								}
								$('#subcategory_id').html(htmls);
								
							}
						}
					}
			});
		}
	});
});


 let input = document.getElementById("servicephoto");
    
        input.addEventListener("change", ()=>{
            let inputImage = document.querySelector("#servicephoto").files[0];
            var element = document.getElementById("display_image");
            element.style.backgroundImage="url('"+URL.createObjectURL(inputImage)+"')";
            element.classList.remove('hides');
            
        })
        
function upload_image() 
{
  var bar = $('#bar');
  var percent = $('#percent');
  $('#myForm').ajaxForm({
    beforeSubmit: function() {
      document.getElementById("progress_div").style.display="block";
      var percentVal = '0%';
      bar.width(percentVal)
      percent.html(percentVal);
    },

    uploadProgress: function(event, position, total, percentComplete) {
      var percentVal = percentComplete + '%';
      bar.width(percentVal)
      percent.html(percentVal);
    },
    
	success: function() {
      var percentVal = '100%';
      bar.width(percentVal)
      percent.html(percentVal);
    },

    complete: function(xhr) {
      if(xhr.responseText)
      {
        window.location = '<?php echo base_url();?>services';
      }
    }
  }); 
}

</script>
<?php include('footer.php');?>
