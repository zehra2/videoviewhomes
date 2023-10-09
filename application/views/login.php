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
	max-width:40%;
	margin-top:50px;
	border:1px solid #ddd;
	box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.service-form .col-lg-12{
	    padding: 0px 30px;
}

section.service-form input[type="password"] {
    max-width: 100%;
    width: 100%;
    border: 1px solid #c3c3c5;
    padding: 10px 20px;
    line-height: 24px;
    border-radius: 0;
    margin-bottom: 12px;
    color: #666;
    font-style: italic;
    text-align: center;
    background: #fff;
}
section.service-form input[type="text"], section.service-form input[type="password"] {
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
                    <h2>Login</h2>
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
            
            <form class="serviceForm" method="post" action='<?php echo base_url('signindb'); ?>'>
			<?php if(!empty($this->session->flashdata('errors'))){ ?>
					<div class="row alert alert-danger alert-dismissible " style="font-size: 15px;text-align: center;background: #ebc8c8;">
						<?php echo $this->session->flashdata('errors'); ?>
					</div>
				<?php }?>
                <div class="row" style="margin-top: 25px;">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label>Email:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="username" required>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label>Password:<span class="field_required">*</span></label>
                        <br>
                        <input type="password" name="password" required>
                    </div>
                </div>
                
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<button type="submit" value="SUBMIT">Submit</button>
						</div>
					</div>
				</div>
                <div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align: center;border-top: 1px solid rgba(0,0,0,.1);padding: 13px 0px 18px 0px;">
							<a href="<?php echo base_url('forgetpassword');?>" style=" color: #062c30;">Forget Password</a>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align: center;border-top: 1px solid rgba(0,0,0,.1);padding: 13px 0px 18px 0px;">
							<a href="<?php echo base_url('signup');?>" style=" color: #062c30;">Don't have an account? Sign up</a>
					</div>
				</div>
            </form>
        </div>
    </div>
    </div>
</section>

<!-- Service Form end -->

<script>
AdminToastr.error('Something went wrong!');
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
<?php include('footer.php');?>
