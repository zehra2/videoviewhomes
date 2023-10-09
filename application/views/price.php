<?php include('header.php');?>
<style>
/* Hide scrollbar for Chrome, Safari and Opera */
/* section.pricebox .price ul::-webkit-scrollbar {
    display: none;
} */

/* Hide scrollbar for IE, Edge and Firefox */
/* section.pricebox .price ul { */
    /* -ms-overflow-style: none; */
    /* IE and Edge */
    /* scrollbar-width: none; */
    /* Firefox */
/* } */

#card-errors {
    color: red;
}
.priceText{
    width: 60%;
     word-break: break-word;
}
@media only screen and (max-width: 767px) {
 .priceText{
    width: 60%;
}   
}
</style>

<!-- about banner sec start -->
<section class="aboutsecbanner"
    style="    background-image: linear-gradient(#05595b, #062C30), url(assets/images/info163466035950.jpg);
    background-blend-mode: multiply;">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="abouttext2">
                    <h2>PLANS & PRICING</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- about banner sec end -->


<!-- bid-on-property start -->
<section class="planspricing">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2>CHOOSE YOUR MEMBERSHIP PRICING PLAN</h2>
            </div>
        </div>
</section>
<!-- bid-on-property end -->

<section class="pricebox">
    <div class="container">
    <?php if($plans){?>
        <div class="row">
        <?php foreach($plans as $data){?>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div class="columns">
                    <div class="price">
                        <h2 class="header"><?php echo $data->name;?> <p class="priceText" style="margin-right: auto !important;margin-left: auto !important;"><?php echo $data->title;?></p>
                        </h2>
                        <h2 class="priceing">$<?php echo number_format($data->amount,2);?></h2>
                        <?php echo $data->text;?>
                        <li class="grey1">
                           
                            <?php if(!$data->is_subscribe){?>
                            <a class="btn button select_pricing" data-id="1" href="<?php echo base_url();?>/plans_detail/<?php echo $data->id;?>">select</a>
                            <?php }else{?>
                            <a class="btn button select_pricing" data-id="1" href="#" style="background:#8d1414">Selected</a>
                            <?php }?>
                        </li>

                    </div>
                </div>

            </div>
            
        <?php }?>
        </div>
    <?php }?>
    
    </div>
</section>

<div class="grid">

    <div style="display: none;width:500px;" id="animatedModal" class="animated-modal">
        <form id="payment-form" action="javascript:void(0)">
            <h4>Add Card Details</h4>
            <input type="hidden" name="price_id" class="price_id" value="" />
            <div id="card-element" class="form-control">
            </div>
            <div id="card-errors" role="alert"></div><br />
            <div class="btn btn-primary pay" style="width:100%;">Pay</div>
        </form>
    </div>

</div>
 <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>

<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css'>
<script>
    <?php if($this->session->flashdata('error')){?>
        swal('','<?php echo $this->session->flashdata('error');?>','error');
    <?php }?>
</script>
<script src="https://js.stripe.com/v3/"></script>
<script>
var stripe = Stripe('pk_test_hWqb9XMOfZFuscYRUOHPNIyg');
var elements = stripe.elements();
var style = {
    base: {
        // 'lineHeight': '1.35',
        // 'fontSize': '1.11rem',
        'color': '#495057',
        'fontFamily': 'apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
        'padding': '8px 12px'
    }
};
var card = elements.create("card", {
    style: style
});
card.mount("#card-element");

card.on('change', function(event) {
    var displayError = document.getElementById('card-errors');

    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});

$('.pay').click(function() {
    stripe.createToken(card).then(function(result) {
        if (result.error) {
            // Inform the customer that there was an error.
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {

            // Send the token to your server.
            stripeTokenHandler(result.token);

        }
    });
});

function stripeTokenHandler(token) {
    // Insert the token ID into the form so it gets submitted to the server
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);

    // Submit the form
    // form.submit();
    var data = $('#payment-form').serialize();
    var url = base_url + 'price/plan_payment';
    var res = AjaxRequest.formrequest(url, data);
    if (res.status) {
        AdminToastr.success(res.txt);
        setInterval(function() {
            window.location.href = base_url;
        }, 2000);
    } else {
        AdminToastr.error(res.txt);
    }
}
</script>

<script>
$('.select_pricing').click(function() {
    $('.price_id').val($(this).data('id'));
})
</script>
<?php include('footer.php');?>
