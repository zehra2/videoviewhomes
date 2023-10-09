<?php include('header.php');?>
<style>
section.aboutsecbanner {
    background-image: linear-gradient(#05595b, #062C30), url(assets/images/enabling-transactions-slide-small2162742469113.jpg);
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
          <h2>BID ON PROPERTY</h2>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- about banner sec end -->


<!-- bid-on-property start -->
<section class="bid-on-property">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2>BID ON PROPERTY</h2>
      </div>
      <form action="javascript:void(0)" id="Bidservice">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          
            <label for="">Select a service<span class="field_required">*</span></label>
            <br>
              <select id="" name="bid[bid_service]" required>
                <option value="">bid on property</option>
                <option value="Activate Property Video">Activate Property Video</option>
                <option value="Deactivate Property Video">Deactivate Property Video</option>
              </select>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <label>First Name:<span class="field_required">*</span></label>
            <br>
            <input type="text" name="bid[bid_fname]" required>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <label>Last Name:<span class="field_required">*</span></label>
            <br>
            <input type="text" name="bid[bid_lname]" required>
          </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <label>Address Of Property Service/Bid:<span class="field_required">*</span></label>
            <br>
              <input type="text" name="bid[bid_address]" required>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <label>Your Bid $:<span class="field_required">*</span></label>
            <br>
            <input type="text" name="bid[bid_bid]" required>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <label>Email:<span class="field_required">*</span></label>
            <br>
            <input type="text" name="bid[bid_email]" required>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <label>Comments:<span class="field_required">*</span></label>
                <br>
                <textarea rows="4" name="bid[bid_comments]" required></textarea> 
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <button type="submit" name="" value="SUBMIT">Submit</button> 
              </div>              
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>  
</section>
<!-- bid-on-property end -->
<?php include('footer.php');?>
