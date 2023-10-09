<!--Footer Content Start-->
<footer id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="copytext">
                    <p><?php echo date('Y'); ?> All rights reserved by | Video View Homes And Rentals</p>
                </div>
            </div>
        </div>
    </div>
</footer>

<!--Footer Content End-->
<div id="offcanvas-menu" class="visible-xs visible-sm">
    <span class="close-menu"><i class="fa fa-times" aria-hidden="true"></i></span>
    <ul class="menu-wrapper">
        <li class="active"><a href="{{ url('/') }}">Home</a></li>
        <li class=""><a href="{{ url('/aboutus') }}">About Us</a></li>
        <li><a href="{{ url('/countries') }}">State / City</a></li>
        <li>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed d-block p-0 text-center " type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne"><a href="javascript:;"> Home Tour <i
                                    class="fa fa-angle-down" aria-hidden="true"></i></a>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul class="dropDown sub-menu">
                                <li><a href="{{ url('/bid') }}">Place Offer on Product</a></li>
                                <li><a href="{{ url('/price') }}">Plans & Pricing</a></li>
                            </ul><!-- end of dropdown -->
                        </div>
                    </div>
                </div>
            </div>
        </li>
        {{-- <li><a href="listing.php">Live Showing</a></li> --}}
        <li class=""><a href="{{ url('/serviceform') }}">SERVICE FORM</a></li>
        <li><a href="https://www.logodesignventure.com/project/admin" target="_blank">Upload a Product <span><i class="fa fa-plus"></i></span></a></li>
        </li>
    </ul> <!-- menu-wrapper -->
</div>
<!-- Js Files Start -->
<script src="<?php echo base_url().'assets/';?>js/jquery.fancybox.min.js"></script>
<script src="<?php echo base_url().'assets/';?>js/jquery.mixitup.min.js"></script>
<script src="<?php echo base_url().'assets/';?>js/bootstrap.min.js"></script>
<script src="<?php echo base_url().'assets/';?>js/slick.min.js"></script>
<script src="<?php echo base_url().'assets/';?>js/glider.min.js"></script>
<script src="<?php echo base_url().'assets/';?>js/glider.js"></script>
<script src="<?php echo base_url().'assets/';?>js/custom.js"></script>
<script src="<?php echo base_url().'assets/';?>js/toastr.js"></script>
<script src="<?php echo base_url().'assets/';?>js/tkd_script.js"></script>
<!-- VIDEO STREAMING -->
<script src="https://vjs.zencdn.net/ie8/ie8-version/videojs-ie8.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.14.1/videojs-contrib-hls.js"></script>
<script src="https://vjs.zencdn.net/7.2.3/video.js"></script>


<!-- <script src="assets/js/ca-script.js"></script> -->
<script>
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
$(document).ready(function() {
    var quantitiy = 0;
    $('.quantity-right-plus').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        // If is not undefined
        $('#quantity').val(quantity + 1);
        // Increment
    });
    $('.quantity-left-minus').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        // If is not undefined
        // Increment
        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });
});

// OFFCANVAS
$(document).ready(function() {
    var menutoggle = $(".menu-toggle");
    var offcanvasmenu = $("#offcanvas-menu");
    var closemenu = $(".close-menu");
    menutoggle.on("click", function() {
        offcanvasmenu.addClass("toggled");
        return false;
    });
    closemenu.on("click", function() {
        offcanvasmenu.removeClass("toggled");
        return false;
    });
});
</script>
</body>

</html>