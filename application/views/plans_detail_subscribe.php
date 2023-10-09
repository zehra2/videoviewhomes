<?php include('header.php');?>
<style>
section.aboutsecbanner {
    background-image: linear-gradient(#05595b, #062C30), url(assets/images/enabling-transactions-slide-small2162742469113.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 30px 0 40px;
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
section.service-form textarea {
    width: 200px;
    text-align: left;
    font-size: inherit;
    font-family: inherit;
    border: 1px solid #c3c3c5;
    padding: 5px 4px;
    width: 100% !important;
    letter-spacing: normal;
}
section.service-form input[type="date"], section.service-form input[type="number"] {
    max-width: 100%;
    width: 100%;
    border: 1px solid #c3c3c5;
    padding: 10px 20px;
    line-height: 24px;
    border-radius: 0;
    margin-bottom: 12px;
    color: #666;
    font-style: italic;
    text-align: left;
    background: #fff;
}
</style>
<?php 
if($row){
    $id = $row->id;
    $type = $row->type;
    $name = $row->name;
    $amount = $row->amount;
}else{
    $id = '';
    $type = '';
    $name = '';
    $amount = '';
}
?>
<!-- about banner sec start -->
<section class="aboutsecbanner">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="abouttext2">
          <h2><?php echo $name;?></h2>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- about banner sec end -->

<section class="service-form">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 style="margin: 0px !important;margin-top: 15px !important;">Payment Form</h2>
          </div>
            <form class="serviceForm submitRegForm" method="post" action='<?php echo base_url('saveSubscriptions'); ?>'>
			<?php if(!empty($this->session->flashdata('success'))){ ?>
					<div class="row alert alert-success alert-dismissible " style="font-size: 15px;text-align: center;">
						<?php echo $this->session->flashdata('success'); ?>
					</div>
				<?php }?>
			<?php if(!empty($this->session->flashdata('errors'))){ ?>
					<div class="row alert alert-danger alert-dismissible " style="font-size: 15px;text-align: center;background: #ebc8c8;">
						<?php echo $this->session->flashdata('errors'); ?>
					</div>
				<?php }?>
				<div class="row" style="margin-top: 25px;">
					<div class="col-lg-6 col-md-6 col-6" style="font-size: 18px;font-weight: 600;">
                        <label><?php echo $name;?> 
                            <span style="font-size: 15px;">
                                (<?php if($type ==1){?>Yearly<?php }else{?>Monthly<?php }?>)
                            </span>
                        </label>
                        
                    </div>
                    <div class="col-lg-6 col-md-6 col-6" style="text-align: right;font-size: 18px;font-weight: 600;">
                        <label>$<?php echo $amount;?></label>
                    </div>
				
				</div>
                <div class="row" >
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Name:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="name" required >
                    </div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Last Name:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="lname" required>
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
                        <label>VISA CARD NO:<span class="field_required">*</span></label>
                        <br>
                        <input type="number" name="years" id="years"  required>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Expiry Date:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="address" required>
                    </div>
				</div>
				<div class="row" >
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>CVV:<span class="field_required">*</span></label>
                        <br>
                        <input type="number" name="years" id="years"  required>
                    </div>
                    
				</div>
				
				<div class="row" style="margin-top: 25px;">
					<div class="col-lg-6 col-md-6 col-6" style="font-size: 18px;font-weight: 600;">
                        <label>Total Amount
                        </label>
                        
                    </div>
                    <div class="col-lg-6 col-md-6 col-6" style="text-align: right;font-size: 18px;font-weight: 600;">
                        <label >$<span id="totalVal"><?php echo $amount;?></span></label>
                    </div>
				
				</div>
				
				
                
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						    <input type="hidden" name="plans_type_id" value="<?php echo $id;?>">
                            <input type="hidden" name="plans_type" value="<?php echo $type;?>">
                            <input type="hidden" name="plans_price" value="<?php echo $amount;?>">
						    <input type="hidden" name="vendor_id" value="<?php echo $row->userid;?>">
						    <input type="hidden" name="plan_name" value="<?php echo $name;?>">
							<button type="button" class="submitRegx">Submit</button>
						</div> 
					</div>
				</div>
				
            </form>
        </div>
    </div>
    </div>
</section>
<!-- bid-on-property end -->
 <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>

<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css'>
<script>
$(document).on('change','#years',function(){
   let val = $(this).val();
   let value = parseInt(val);
   let amountT = "<?php echo $amount;?>";
   let amount = parseInt(amountT);
   let cal = 0;
   if(value > 0){
       cal = value * amount;
   }else{
       cal = amount;
   }
   $('#totalVal').text(cal);
});
$('.submitReg').click(function(){
          
           $.ajax({
            url: "<?php echo base_url('subscriptionsFormValidation');?>",
            type: "POST",
            data: $('.submitRegForm').serialize(),
            dataType: "json",
            success: function(result) {
                let obj = result;
                if(obj.error){
                    let message = "";
                    if (obj.validation != undefined && obj.validation == false) {
                        var errorList = obj.errors;
                        console.log(obj.errors);
                        $.each(obj.errors, function(ind, val) {
                            if(val != ''){
                                message = message + val + "<br>";
                            }
                        });
                       
                    } else {
                        message = message + obj.msg;
                    }
                     swal('',message,'error');
                }else{
                    $('.submitRegForm').submit();
                }
            }
        }); 
});   

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
</script>
<?php include('footer.php');?>
