<?php include('header.php');?>
<style type="text/css">
    .color-h4{

        color:#062c30;
        padding-right:30px;
    }
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
                       <?php echo $row->service;?></h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- banner sec end -->
<!-- full upload video section -->
<section class="aboutus" style="margin-bottom: 0px !important;">
    <div class="container">
        <h2 style="margin-bottom: 10px;margin-top: 20px !important;">PAYMENT</h2>
        
</div></section>
<div class="panel">
		<div class="panel-heading">
			<h3 class="panel-title">Charge  <?php echo $row->price;?> with Stripe</h3>
			
			<!-- Product Info -->
			<p><b>Item Name:</b>  <?php echo $row->service;?></p>
			
		</div>
		<div class="panel-body">
			<!-- Display errors returned by createToken -->
			<div class="card-errors"></div>
			
			<!-- Payment form -->
			<form action="" method="POST" id="paymentFrm">
				<div class="form-group">
					<label>NAME</label>
					<input type="text" name="name" id="name" placeholder="Enter name" required="" autofocus="">
				</div>
				<div class="form-group">
					<label>EMAIL</label>
					<input type="email" name="email" id="email" placeholder="Enter email" required="">
				</div>
				<div class="form-group">
					<label>CARD NUMBER</label>
					<input type="text" name="card_number" id="card_number" placeholder="1234 1234 1234 1234" autocomplete="off" required="">
				</div>
				<div class="row">
					<div class="left">
						<div class="form-group">
							<label>EXPIRY DATE</label>
							<div class="col-1">
								<input type="text" name="card_exp_month" id="card_exp_month" placeholder="MM" required="">
							</div>
							<div class="col-2">
								<input type="text" name="card_exp_year" id="card_exp_year" placeholder="YYYY" required="">
							</div>
						</div>
					</div>
					<div class="right">
						<div class="form-group">
							<label>CVC CODE</label>
							<input type="text" name="card_cvc" id="card_cvc" placeholder="CVC" autocomplete="off" required="">
						</div>
					</div>
				</div>
				<button type="submit" class="btn btn-success" id="payBtn">Submit Payment</button>
			</form>
		</div>
	</div>



<!-- Stripe JavaScript library -->
<script src="https://js.stripe.com/v2/"></script>
	
<!-- jQuery is used only for this example; it isn't required to use Stripe -->
<script src="<?php echo base_url('assets/js/jquery.min.js'); ?>"></script>
	
<script>
// Set your publishable key
Stripe.setPublishableKey('<?php echo $this->config->item('stripe_publishable_key'); ?>');

// Callback to handle the response from stripe
function stripeResponseHandler(status, response) {
	if (response.error) {
		// Enable the submit button
		$('#payBtn').removeAttr("disabled");
		// Display the errors on the form
		$(".card-errors").html('<p>'+response.error.message+'</p>');
	} else {
		var form$ = $("#paymentFrm");
		// Get token id
		var token = response.id;
		// Insert the token into the form
		form$.append("<input type='hidden' name='stripeToken' value='" + token + "' />");
		// Submit form to the server
		form$.get(0).submit();
	}
}

$(document).ready(function() {
	// On form submit
	$("#paymentFrm").submit(function() {
		// Disable the submit button to prevent repeated clicks
		$('#payBtn').attr("disabled", "disabled");
		
		// Create single-use token to charge the user
		Stripe.createToken({
			number: $('#card_number').val(),
			exp_month: $('#card_exp_month').val(),
			exp_year: $('#card_exp_year').val(),
			cvc: $('#card_cvc').val()
		}, stripeResponseHandler);
		
		// Submit from callback
		return false;
	});
});
</script>
<?php include('footer.php');?>
