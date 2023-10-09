<?php include('header.php');?>
<style type="text/css">
section.statecity ul {
    float: left;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    padding-left: 0px;
    padding-right: 30px;
    margin: 0; 
}

section.aboutsecbanner {
    background-image: linear-gradient(#05595b, #062C30), url(assets/images/random-3162742262147.jpg);
    background-size: cover;
    background-repeat: no-repeat; 
    background-position: center center;
    padding: 50px 0 100px;
    background-position: 90% 43%;
    background-blend-mode: multiply;
}

section.statecity ul li a:before {
  content: "\2022";
  color: #000;
  font-weight: bold;
  display: inline-block;
  
}
.statecitycountry a {
    padding: 6px 6px 6px 0px;
}

</style>
<!-- about banner sec start -->
<section class="aboutsecbanner">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="abouttext2">
                    <h2>Countries</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- statecity U.S.A start -->
<section class="statecity">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2>Country</h2>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <select name="country" id="country" onchange="window.location.href=this.value;">
                <option>Select</option>
                <?php foreach($data as $item){?>
                    <option value="<?php echo base_url();?>states/<?php echo $item->id;?>"><?php echo $item->country;?></option>
                <?php }?>
            </select>
            </div>
           <div class="row">
              <?php foreach($data as $item){?>

               <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                   <ul class="statecitycountry">
                       <li>
                           <a href="<?php echo base_url();?>states/<?php echo $item->id;?>" data-toggle="collapse"
                               onclick=""
                               role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><!---<i class="fa fa-angle-right"></i>--->&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $item->country;?>
                           </a>
                       </li>
                        <div class="clearfix"></div>
                    </ul>
               </div>

			  <?php }?>

        </div>
        </div>
    </div>
</section>

<!-- statecity U.S.A end -->
<script>
    $('#country').select2();
</script>
<?php include('footer.php');?>
