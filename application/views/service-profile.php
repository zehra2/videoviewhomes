<?php include('header.php');?>
<style type="text/css">
.section-page {
    padding: 0px 2%;
}
section.aboutsecbanner {
    color:white;
    padding: 10px 0 10px;
}

.headView .companyTitle{
    text-align:center;
    height: 95px;
    padding-top:30px;
}
.headView .avatar{
    width: 95px;
    height: 95px;
    /*margin-right: auto;*/
    margin-left: auto;
    background: transparent;
    border-radius: 50%;
    line-height: 94px;
    font-size: 25px;
    margin-top: 0.5%;
    margin-bottom: 1%;
    cursor: pointer;
  /* border: 2px dashed;*/
    opacity: 1;
    text-align:center;
    background: #fff;
    color: #05595b;
}
.center{text-align: center;}
.mtb-15{margin-top:15px;margin-bottom:15px;}
.mt-15{margin-top:15px;}
.mt-50{margin-top:50px;}
.mb-50{margin-bottom:50px;}
.mb-15{margin-bottom:15px;}
.mb-20{margin-bottom:20px;}
.upload-service-form button {font-family: 'Lato', sans-serif;font-style: normal;font-weight: 700;font-size: 20px;line-height: normal;
    letter-spacing: 1px;background-color: #062C30;color: white;width: 100%;height: 100%;padding: 10px 15px;cursor: pointer;border: 0px;max-width: 315px;margin: 0px auto;display: block;text-align: center;}
/*.upload-btn-wrapper {position: relative;overflow: hidden;display: inline-block;}*/
.upload-btn-wrapper .btn {font-family: 'Lato', sans-serif;font-style: italic;font-weight: 700;font-size: 17px;line-height: normal;letter-spacing: 1px;background-color: #062C30;color: white;width: 100%;height: 100%;margin: 0px 0px;padding: 10px 0px;cursor: pointer;border-radius: 0;}
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
    height:480px;
}
.listing video{
	height:155px;
}
/*.single{
    padding: 50px 0;
    border: 1px solid;
    background: #333;
    color: white;
    font-size: 25px;
    font-weight: 600;
}*/
.single .singleText{
    margin-left:auto;
    margin-right:auto;
    width:50%;
}
.serviceBox, .contactBox, .appBox{
    
    border: 1px solid #ddd;
    border-radius: 5px 5px 0 0;
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
a{
    color:#000; 
}
.content ul, .menuBox ul{
    padding: 0;
    margin: 0;
    list-style:none;
}

.serviceBox .content ul li{
    height: 40px;
    border-bottom: 1px solid #ddd;
    padding-top: 6px;
    padding-left: 10px;
    
}
.appBox .content ul li{
    border-bottom: 1px solid #ddd;
    
}
.contactBox .content ul li{
    border-bottom: 1px solid #ddd;
    padding-top: 0px;
    padding-left: 0px;
    
}
.contactBox .content ul li img{
    margin-right:10px;
    width: 65px;
}
.menuBox{
    background-color: #062C30;
    color: white;
    letter-spacing: 1px;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-weight: 700;
        padding: 0;
}
.join li{
    float:left;
    padding: 0 0px 0 35px;
    cursor:pointer;
}
.content .nameTime{
    font-size: 17px;
    padding: 0 5px;
    margin: 10px 5px;
}
.content .nameTime span{
    font-size: 13px;
 }
 .join li ul {
  display: none;
}

.join > li:hover ul {
  display: block;
}

.join li ul li {
  float:inherit;
  width:100%;
  padding: 0;
  
}
.join li ul li a{
  color:white;
  font-weight: 700;
}
.join .dropdown.tour ul.dropdown-menu {
    background-color: #062C30;
    min-width: 185px;
    padding: 0;
    top: 25px;
    position: absolute;
    width: 130px;
}
.join .dropdown.tour ul.dropdown-menu li a{
    line-height: 20px;
    color: #fff;
}
.avatar{
    background-position: 50% !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}
@media only screen and (max-width: 768px) {
	.listing video{
		height:173px;
	}
	.single video{
        height:190px;
    }
}
.headingBox:hover{
    color:blue;
}
.stars div{
    float:left;
    margin:0 3px;
    font-size: 25px;
    cursor:pointer;
    color:#a5926f;
} 
.stars div.select{
    color:#FD4;
}
.stars div:hover { transform: rotate(-15deg) scale(1.3);

</style>
<?php 
if($row){
    $company = $row->company;
    $image = $row->image;
}else{
    $company = '';
    $image = '';
}
?>
<!-- about banner sec start -->
<section class="aboutsecbanner headView">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                &nbsp;
            </div>
            <div class="col-md-4 companyTitle">
                <h3><?php echo $company;?></h3>
            </div>
            <div class="col-md-4">
                <div class="avatar empty " id="display_image" <?php if($image){?>style="background-image: url('public/user-image/<?php echo $image;?>')"<?php }?>>
                        <label for="inputTag" style="cursor:pointer">
                            <?php if(!$image){?><i class="fa fa-camera"></i><?php }?>
                        </label>
                    </div>
            </div>
        </div>
    </div>
</section>
<!-- about banner sec end -->


<section class="section-page mt-15 mb-50">
    <div class="row">
        <div class="col-md-1 " style="padding:0">
            <div class="serviceBox">
                <a href="<?php echo base_url();?>profile"><div class="headingBox">Products</div></a>
                <div class="content">
                <?php if($services){
                    ?>
                    <ul >
                    <?php foreach($services as $data){?>
                       <li>
                        <a href="<?php echo base_url('products_detail/'.$data->id);?>" data-toggle="collapse" onclick="" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" style="text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;<?php echo $data->product;?></a>
                       </li>
                   <?php }?>
                        <div class="clearfix"></div>
                    </ul>
                    <?php }?>
                </div>
            </div>
        </div>
        <div class="col-md-7">
            <div class="container">
                <div class="row" style="border: 1px solid #ddd;padding: 00px 0; border-radius: 5px;">
                    <!---<div class="col-md-3"></div>
                    <div class="col-md-6 single">
                        <div class="singleText">
            			    Live Stream<br>
            			    Conference<br>
            			    Video Box<br>
            			    business stream
        			    </div>
                    </div>
                    <div class="col-md-3"></div>--->
                    <div class="col-md-12 single">
                       <?php if($oneproduct){?>
                            <div class="video-wrapper mtb-15">
                                <div class="video-container" id="video-container">
                                	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/<?php echo $oneproduct->servicephoto;?>">
                                		<source src="<?php echo base_url();?>public/productvideos/<?php echo $oneproduct->servicevideo;?>" type="video/mp4">
                                	</video>
                                </div>
                            </div>
            			<?php }else{?>
            			<div class="video-wrapper mtb-15">
                                <div class="video-container" id="video-container">
                                	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/165409324499.jpg">
                                		<source src="<?php echo base_url();?>public/productvideos/" type="video/mp4">
                                	</video>
                                </div>
                            </div>
            			<?php }?>
                    </div>
                </div>
                <div class="row" style="margin-top:10px;margin-bottom:10px;">
                    <div class="col-md-3 " style="padding:0px">
                        <div class="upload-btn-wrapper">
                          <a class="btn" href="<?php echo base_url();?>uploadproduct">+ Upload Product</a>
                        </div>
                    </div>
                    <div class="col-md-6 menuBox">
                        <ul style="margin-top: 9px;" class="join">
                             <li style="padding:0">
                                 Go Live
                             </li>
                             <li>
                                 Record Live
                             </li>
                             <li class="dropdown tour">
                                 Share Live
                                
                                <ul class="dropdown-menu">
                                  <li><a href="#">Facebook</a></li>
                                  <li><a href="#">Instagram</a></li>
                                  <li><a href="#">Twitter</a></li>
                                  <li><a href="#">Linkedin</a></li>
                                  <li><a href="#">Youtube</a></li>
                                </ul>
                             </li>
                             <li class="dropdown tour">
                                 Join Live
                                 <ul  class="dropdown-menu">
                                  <li><a href="#">Join $$$</a></li>
                                </ul>
                             </li>
                         </ul>
                    </div>
                    <div class="col-md-3" style="text-align:right;padding:0px">
                        <div class="upload-btn-wrapper">
                          <a class="btn" href="<?php echo base_url();?>uploadservice">+ Upload Services</a>
                        </div>
                    </div>
                </div>
                <!---<div class="row">
                    <div class="col-md-12">
                        <div class="menuBox">
                             <ul>
                                 <li>
                                     Menu 1
                                 </li>
                                 <li>
                                     Menu 2
                                 </li>
                             </ul>
                        </div>
                    </div>
                </div>--->
                <div class="row listing">
                    <?php 
            			if($product){
            			    $ind = 0;
            			foreach($product as $item){
            			    $ind++;
            			?>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-15" style="padding-left:0; <?php echo ($ind != 1 && $ind % 3== 0)?'padding-right:0':'';?>">
                            <div class="upload-video-box">
                                <div class="video-wrapper">
                                    <div class="video-container" id="video-container">
                                    	<video controls preload="metadata" poster="<?php echo base_url();?>public/productimages/<?php echo $item->servicephoto;?>">
                                    		<source src="<?php echo base_url();?>public/productvideos/<?php echo $item->servicevideo;?>" type="video/mp4">
                                    	</video>
                                    </div>
                                </div>
                                <div class="upload-video-content">
                                    <div class="col-2-grid prd-title-btn-info">
                                        <h4><?php echo $item->product;?></h4>
                                        <button class="btn-buynow">Buy Now</button>
                                    </div>
                                    <div class="prd-address">
                                        <h4 style="text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">About: <?php echo $item->about;?> , <?php echo $item->pick_ship;?></h4>
                                    </div>    
                                   <div class="col-2-grid prd-price">   
                                        <h4>Price: </h4>
                                        <h4>$<?php echo $item->price;?>  </h4>
                                    </div>
                                    <div class="col-2-grid prd-views-likes">
                                        <h4>Views Likes:</h4>
                                        <h4><?php echo $item->likes;?></h4>
                                    </div>   
                                    <div class="col-2-grid prd-price">
                                        <h4>Live Stream Price: </h4>
                                        <h4>$<?php echo $item->live_stream_price;?></h4>
                                    </div>
                                    <div class="col-2-grid  prd-price">
                                        <h4>Experience:</h4>
                                        <h4><?php echo $item->exp;?></h4>
                                    </div>
                                    <div class="col-2-grid btn-live-info">
                                        <a href="<?php echo base_url();?>startVideo" class="btn-live">Live Stream Product <i class="fa fa-video-camera" aria-hidden="true"></i></a>
                                        
                                        <button class="btn-live">Request Live  <i class="fa fa-video-camera" aria-hidden="true"></i></button>
                                    </div>  
                                    <div class=" col-12">
                            
                                      <div class="stars">
                                          <?php 
                                            $rates = ($item->ratesCount)?$item->ratesCount:0;
                                            $ratesVal = 0;
                                            if($rates){
                                                $ratesVal = ceil($rates / $item->ratesTotal);
                                            }
                                            $rateSel = '';
                                          for($x=1;$x<=5;$x++){
                                          if($x <= $ratesVal){ $ratesSel = 'select'; }else{ $ratesSel = '';}
                                          ?>
                                            <div onclick="submitRates('<?php echo $item->id;?>','<?php echo $x;?>')" class="rates_<?php echo $x;?>_<?php echo $item->id;?> <?php echo $ratesSel;?>"><i class="fa fa-star"></i></div>
                                          
                                        <?php }?>
                                        </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <?php }}?>
                        
                    </div>
            </div> 
        </div>
        <div class="col-md-2 " style="padding: 0px 5px;">
            <div class="contactBox">
                <div class="headingBox">Contacts</div>
                <div class="content">
                    <?php if($contacts){?>
                    <ul >
                    <?php foreach($contacts as $data){?>
                           <li>
                                <img src="assets/images/no-image.jpg" >
                                <?php echo $data->name.' '.$data->last_name;?>
                           </li>
                   <?php }?>
                   </ul>
                   <?php }?>
                </div>
            </div>
        </div>
        <div class="col-md-2 " style="padding: 0px 5px;">
            <div class="appBox">
                <div class="headingBox">Appointments</div>
                <div class="content">
                    <?php if($appointments){?>
                    <ul >
                       <!---<li>
                           <div class="nameTime">
                                <div>John Doe 1 <span>08, May 11:45 AM</span></div>
                                
                                <div style=" font-size:14px;margin-top:8px">Lorem Ipsum is simply dummy text of the printing and industry...</div>
                            </div>
                       </li>--->
                       <?php foreach($appointments as $app){?>
                           <li>
                               <div class="nameTime">
                                    <div><?php echo $app->title;?><br> <span> <?php //echo date('d, M H:i A', strtotime($app->datetime));?><?php echo date('d, M Y', strtotime($app->datetime));?></span></div>
                                    
                                    <div style=" font-size:14px;margin-top:8px"><?php echo $app->description;?></div>
                                </div>
                            </li>
                        <?php }?>
                    </ul>
                    <?php }?>
                </div>
            </div>
        </div>
        
    </div>
    <!-- uploading video form section -->
    <!-- upload video section -->
   
</section>

<?php include('footer.php');?>
