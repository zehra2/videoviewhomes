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
</style>
<!-- about banner sec start -->
<section class="aboutsecbanner">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="abouttext2">
                    <h2>SERVICE FORM</h2>
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
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2>PLACE BID ON PROPERTY OR SELECT THE SERVICE ACTIVATE OR DEACTIVATE VIDEO OF RENTAL PROPERTY</h2>
            </div>
            <form class="serviceForm" action="javascript:void(0);">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>First Name:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="service[service_form_firstname]" required>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Last Name:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="service[service_form_lastname]" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Address Of Property Service/Bid:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="service[service_form_address]" required>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Your Bid:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="service[service_form_bid]" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label>Email:<span class="field_required">*</span></label>
                        <br>
                        <input type="text" name="service[service_form_email]" required>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <label for="">Select a service<span class="field_required">*</span></label>
                        <br>
                        <select id="" name="service[service_form_type]" required>
                            <option value="">Place bid on property</option>
                            <option value="Activate Property Video">Activate Property Video</option>
                            <option value="Deactivate Property Video">Deactivate Property Video</option>
                        </select>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <button value="SUBMIT">Submit</button>
                            </div>
                        </div>
                    </div>
            </form>
        </div>
    </div>
    </div>
</section>

<!-- Service Form end -->

<script>
$('.serviceForm').submit(function() {
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
})
</script>
<?php include('footer.php');?>
