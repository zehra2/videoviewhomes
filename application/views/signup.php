<?php include('header.php');?>
<style type="text/css">
section.aboutsecbanner {
    background-image: linear-gradient(#05595b, #062C30), url(assets/images/-managed-services-banner162742458088.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 50px 0 100px;
    background-position: 90% 43%;
    background-blend-mode: multiply;
}
.service-form .container{
	max-width:70%;
	margin-top:50px;
	border:1px solid #ddd;
	box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.service-form .col-lg-12,.service-form .col-lg-6{
	    padding: 0px 20px;
}
section.service-form input[type="text"] {
	text-align:left;
}	
@media only screen and (max-width: 767px) {
	.service-form .container{
		max-width:85%;
	}
	.service-form .col-lg-12{
	    padding: 0px 15px;
	}
}
</style>
<!-- about banner sec start -->
<section class="aboutsecbanner">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="abouttext2">
                    <h2>Sign Up</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- about banner sec end -->


<!-- Service Form start -->
<section class="service-form">
    <div class="container">
        <div class="row">
            
            <form class="serviceForm submitRegForm" method="post" action='<?php echo base_url('signupdb'); ?>'>
			<?php if(!empty($this->session->flashdata('success'))){ ?>
					<div class="row alert alert-success alert-dismissible " style="font-size: 15px;text-align: center;">
						<?php echo $this->session->flashdata('success'); unset($_SESSION['success']); ?>
					</div>
				<?php }?>
			<?php if(!empty($this->session->flashdata('errors'))){ ?>
					<div class="row alert alert-danger alert-dismissible " style="font-size: 15px;text-align: center;background: #ebc8c8;">
						<?php echo $this->session->flashdata('errors'); unset($_SESSION['errors']);?>
					</div>
				<?php }?>
                <div class="row" style="margin-top: 25px;">
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Name:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="name" required>
                    </div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Last Name:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="last_name" required>
                    </div>
				</div>
				<div class="row" >
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Phone:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="phone" required>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Email:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="email" required>
                    </div>
				</div>
				
				<div class="row" >
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
                        
                        </select>
                    </div>
					
				</div>
				<div class="row" style="margin-top: 10px;">
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>City:<span class="field_required">*</span></label>
                        <br>
                        <select name="city_id" id="city_id" required>
						<option value="">--Select City--</option>
                        
                        </select>
                    </div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>User Type:<span class="field_required">*</span></label>
                        <br>
                        <select name="user_type" id="user_type" required>
						<option value="">--Select Type--</option>
						<option value="1">Product Provider</option>
						<option value="2">Service Provider</option>
                        
                        </select>
                    </div>
                    
                </div>
				<div class="row" style="margin-top: 10px;">
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Password:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="password" required>
                    </div>
                </div>
                
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<button type="button" class="submitReg">Submit</button>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align: center;border-top: 1px solid rgba(0,0,0,.1);padding: 13px 0px 18px 0px;">
							<a href="<?php echo base_url('login');?>" style=" color: #062c30;">Already have an account? Sign in</a>
					</div>
				</div>
            </form>
        </div>
    </div>
    </div>
</section>

<!-- Service Form end -->

<script>
/*$('.serviceForm').submit(function() {
    var data = $(this).serialize();
    var url = base_url + 'service_form/save_service';
    var res = AjaxRequest.formrequest(url, data);
    if (res.status) {
        AdminToastr.success('Success');
        setInterval(function() {
            window.location.reload();
        }, 3000);
    } else {
        AdminToastr.error('Something went wrong!');

    }
})*/
</script>
 <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>

<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css'>
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
});

$('.submitReg').click(function(){
          
           $.ajax({
            url: "<?php echo base_url('formValidation');?>",
            type: "POST",
            data: $('.submitRegForm').serialize(),
            dataType: "json",
            success: function(result) {
                let obj = result;
                if(obj.error){
                     swal('',obj.msg,'error');
                }else{
                    $('.submitRegForm').submit();
                }
            }
        });
});
</script>

<?php include('footer.php');?>
