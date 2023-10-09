<?php include('header.php');?>
<style>
section.aboutsecbanner {
    background-image: linear-gradient(#05595b, #062C30), url(assets/images/enabling-transactions-slide-small2162742469113.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 110px 0 100px;
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
section.service-form input[type="date"] {
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
<!-- about banner sec start -->
<section class="aboutsecbanner">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="abouttext2">
          <h2><?php echo $row->service;?></h2>
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
            <h2 style="margin: 0px !important;margin-top: 15px !important;">Appointment Form</h2>
          </div>
            <form class="serviceForm submitRegForm" method="post" action='<?php echo base_url('saveAppointments'); ?>'>
			<?php if(!empty($this->session->flashdata('success_msg'))){ ?>
					<div class="row alert alert-success alert-dismissible " style="font-size: 15px;text-align: center;">
						<?php echo $this->session->flashdata('success_msg'); ?>
					</div>
				<?php }?>
			<?php if(!empty($this->session->flashdata('errors'))){ ?>
					<div class="row alert alert-danger alert-dismissible " style="font-size: 15px;text-align: center;background: #ebc8c8;">
						<?php echo $this->session->flashdata('errors'); ?>
					</div>
				<?php }?>
				<div class="row" style="margin-top: 25px;">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label>Service:</label>
                        <br>
                        <input type="text" value="<?php echo $row->service;?>" readonly style="background: #eee;">
                        <input type="text" value="<?php echo $row->service;?>" readonly style="background: #eee;">
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
					<div class="col-lg-6 col-md-6 ">
                        <label>Appointment Date:<span class="field_required">*</span></label>
                        <br>
                        <input type="date" name="date" required min="<?php echo date("Y-m-d");?>">
                    </div>
                    <div class="col-lg-6 col-md-6 ">
                        <label>Appointment Time:<span class="field_required">*</span></label>
                        <br>
                        <input type="time" name="time" required min="<?php echo date("H:i:s");?>">
                    </div>
				</div>
				<div class="row" >
					<div class="col-lg-12 col-md-12 ">
                        <label>Detail:<span class="field_required">*</span></label>
                        <br>
                        <textarea name="detail" rows="3" required></textarea>
                    </div>
                    
				</div>
				
                
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						    <input type="hidden" name="id" value="<?php echo $row->id;?>">
						    <input type="hidden" name="vendor_id" value="<?php echo $row->userid;?>">
							<button type="button" class="submitReg">Submit</button>
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
$('.submitReg').click(function(){
          
           $.ajax({
            url: "<?php echo base_url('appointmentFormValidation');?>",
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
