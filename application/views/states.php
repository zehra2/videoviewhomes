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
                    <h2>States</h2>
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
                <h2><?php echo str_replace('%20', ' ', $country);?></h2>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <select name="region" id="region" onchange="window.location.href=this.value;">
                    <option>Select</option>
                    <?php if($data){
						foreach ($data as $item){?>
                        <option value="<?php echo base_url();?>city/<?php echo $item->id;?>/<?php echo $item->region;?>"><?php echo $item->region;?></option>
                    <?php }}?>
                </select>
            </div>
           <div class="row">
               <?php if($data){
				   foreach ($data as $item){?>

               <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                   <ul class="statecitycountry">
                       <li>
                           <a href="<?php echo base_url();?>city/<?php echo $item->id;?>/<?php echo $item->region;?>" data-toggle="collapse"
                               onclick="window.location='http://www.videoviewhomesandrentals.com/state/1'"
                               role="button" aria-expanded="false" aria-controls="multiCollapseExample1">&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $item->region;?>
                           </a>
                       </li>
                       <div class="clearfix"></div>
                   </ul>
               </div>

               <?php }}?>

           </div>
        </div>
        </div>
</section>
<script>
    $('#region').select2();
</script>
<!-- statecity U.S.A end -->
<?php include('footer.php');?>
