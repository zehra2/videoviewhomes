<!-- Footer -->
<footer class="iq-footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <ul class="list-inline mb-0">
                    {{-- <li class="list-inline-item"><a href="privacy-policy.html">Privacy Policy</a></li> --}}
                    {{-- <li class="list-inline-item"><a href="terms-of-service.html">Terms of Use</a></li> --}}
                </ul>
            </div>
            <div class="col-lg-6 text-right">
                Copyright <?php echo date('Y');?> <a href="#"></a> All Rights Reserved.
            </div>
        </div>
    </div>
</footer>

<!-- Footer END -->
{{-- 
<nav class="iq-float-menu">
    <input type="checkbox" href="#" class="iq-float-menu-open" name="menu-open" id="menu-open" />
    <label class="iq-float-menu-open-button" for="menu-open">
       <span class="lines line-1"></span>
       <span class="lines line-2"></span>
       <span class="lines line-3"></span>
    </label>
    <button class="iq-float-menu-item bg-info"  data-toggle="tooltip" data-placement="top" title="Direction Mode" data-mode="rtl"><i class="ri-text-direction-r"></i></button>
    <button class="iq-float-menu-item bg-danger"  data-toggle="tooltip" data-placement="top" title="Color Mode" id="dark-mode" data-active="true"><i class="ri-sun-line"></i></button>
    <button class="iq-float-menu-item bg-warning" data-toggle="tooltip" data-placement="top" title="Comming Soon"><i class="ri-palette-line"></i></button> 
 </nav> --}}
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="{{ url('assets/admin') }}/js/jquery.min.js"></script>
<!-- Rtl and Darkmode -->
<script src="{{ url('assets/admin') }}/js/rtl.js"></script>
<script src="{{ url('assets/admin') }}/js/customizer.js"></script>
<script src="{{ url('assets/admin') }}/js/popper.min.js"></script>
<script src="{{ url('assets/admin') }}/js/bootstrap.min.js"></script>
<!-- Appear JavaScript -->
<script src="{{ url('assets/admin') }}/js/jquery.appear.js"></script>
<!-- Countdown JavaScript -->
<script src="{{ url('assets/admin') }}/js/countdown.min.js"></script>
<!-- Counterup JavaScript -->
<script src="{{ url('assets/admin') }}/js/waypoints.min.js"></script>
<script src="{{ url('assets/admin') }}/js/jquery.counterup.min.js"></script>
<!-- Wow JavaScript -->
<script src="{{ url('assets/admin') }}/js/wow.min.js"></script>
<!-- Apexcharts JavaScript -->
<script src="{{ url('assets/admin') }}/js/apexcharts.js"></script>
<!-- Slick JavaScript -->
<script src="{{ url('assets/admin') }}/js/slick.min.js"></script>
<!-- Select2 JavaScript -->
<script src="{{ url('assets/admin') }}/js/select2.min.js"></script>
<!-- Owl Carousel JavaScript -->
<script src="{{ url('assets/admin') }}/js/owl.carousel.min.js"></script>
<!-- Magnific Popup JavaScript -->
<script src="{{ url('assets/admin') }}/js/jquery.magnific-popup.min.js"></script>
<!-- Smooth Scrollbar JavaScript -->
<script src="{{ url('assets/admin') }}/js/smooth-scrollbar.js"></script>
<!-- lottie JavaScript -->
<script src="{{ url('assets/admin') }}/js/lottie.js"></script>
<!-- am core JavaScript -->
<script src="{{ url('assets/admin') }}/js/core.js"></script>
<!-- am charts JavaScript -->
<script src="{{ url('assets/admin') }}/js/charts.js"></script>
<!-- am animated JavaScript -->
<script src="{{ url('assets/admin') }}/js/animated.js"></script>
<!-- am kelly JavaScript -->
<script src="{{ url('assets/admin') }}/js/kelly.js"></script>
<!-- am maps JavaScript -->
<script src="{{ url('assets/admin') }}/js/maps.js"></script>
<!-- am worldLow JavaScript -->
<script src="{{ url('assets/admin') }}/js/worldLow.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>

<!-- Flatpicker Js -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<!-- Chart Custom JavaScript -->
<script src="{{ url('assets/admin') }}/js/chart-custom.js"></script>
<!-- Custom JavaScript -->
<script src="{{ url('assets/admin') }}/js/custom.js"></script>
<script src="assets/node_modules/jquery/dist/jquery.min.js"></script>
    <!--Custom JavaScript -->
    
    <script src="{{ url('assets/admin') }}/node_modules/select2/dist/js/select2.full.min.js" type="text/javascript"></script>
    <script src="{{ url('assets/admin') }}/node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js"></script>

    <script type="text/javascript" src="{{ url('assets/admin') }}/node_modules/multiselect/js/jquery.multi-select.js"></script>
    <script src="{{ url('/assets') }}/admin/js/fancybox.js"></script>
    <script>
        $(document).ready(function() {
            $(".select2").select2();
            // $('form').submit(function () {
            // if ($(document.activeElement).attr('type') == 'submit')
            //     return true;
            // else return false;
            // });
        });
    
    </script>

@yield('script')

</body>


</html>