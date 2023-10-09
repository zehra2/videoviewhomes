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
	max-width:50%;
	margin-top:50px;
	border:1px solid #ddd;
	box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
	min-height: 100px;
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
                    <h2>Thanks</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- about banner sec end -->


<!-- Service Form start -->
<section class="service-form">
    <div class="container">
        <div class="row" style="margin-top: 35px;text-align: center;">
		<?php if(!empty($this->session->flashdata('success'))){ ?>
            <p><?php echo $this->session->flashdata('success');?></p>
		<?php }else if(!empty($this->session->flashdata('errors'))){?>
			<p style="color:red"><?php echo $this->session->flashdata('errors');?></p>
		<?php }else{?>
			<p>Thanks!</p>
		<?php }?>
		</div>
    </div>
    </div>
</section>

<!-- Service Form end -->


<?php include('footer.php');?>
