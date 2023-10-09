<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>A virtual walk through desired properties | Video View Homes and Things</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
      <!--base css styles-->
      <link rel="stylesheet" href="<?php echo base_url();?>assets/admin/assets/bootstrap/css/bootstrap.min.css">
      <link rel="stylesheet" href="<?php echo base_url();?>assets/admin/assets/font-awesome/css/font-awesome.min.css">
      <!--page specific css styles-->
      <!--flaty css styles-->
      <link rel="stylesheet" href="<?php echo base_url();?>assets/admin/css/flaty.css">
      <link rel="stylesheet" href="<?php echo base_url();?>assets/admin/css/flaty-responsive.css">
      <link rel="icon" type="image/jpg" href="<?php echo base_url();?>assets/img/chow-logo.png">
      <style>
         .login-page:before, .error-page:before, #main-content {
         background: #7085a1;
         background-image:url('<?php echo base_url();?>assets/img/main-slider/slider2.jpg');
         background-size: cover;
         }
         .login-page .login-wrapper form {
         	margin:30px auto;
         background-color: #ffffff57;
         }
         .login-page form h3 {
         color: #563914;
         font-weight:600;
         margin-top:20px;
         }
         .btn-black
         {
         background-color:#17181b;
         color:#ffffff;
         }
         .btn-black:hover
         {
         background-color:#17181b;
         color:#ffffff;
         }
         .btn-black:focus
         {
         background-color:#17181b;
         color:#ffffff;
         }
         .btn-black:active
         {
         background-color:#17181b;
         color:#ffffff;
         }
         .btn-orange
         {
         background-color:#563914;
         color:#ffffff;
         }
         .btn-orange:hover
         {
         background-color:#563914;
         color:#ffffff;
         }
         .btn-orange:focus
         {
         background-color:#563914;
         color:#ffffff;
         }
         .btn-orange:active
         {
            background-color:#563914;
         }
         .login-page form .close
         {
            padding-top:0px !important;
            color: #fff;
         }
         .login-page form button
         {
            margin-top: 0px;
         }
         .alert-danger 
         {
            color: #ffffff;
            background-color: #0000006b;
            border-color: #00000078;
         }
         .alert-success 
         {
            color: #ffffff;
            background-color: #56391494;
            border-color: #56391494;
         }
      </style>
   </head>
   <body class="login-page">
   	
      <!-- BEGIN Main Content -->
      <div class="login-wrapper">
         <!-- BEGIN Login Form -->
         <form id="form-login" action="<?php echo base_url('admin/login/check_login')?>" method="post">
            <?php if(!empty($this->session->flashdata('info-message_success')))
         {?>
         <div class="alert alert-success">
            <button class="close" data-dismiss="alert">&times;</button>
            <strong><?php echo $this->session->flashdata('info-message_success');?></strong>
         </div>
         <?php } ?>
         <?php if(!empty($this->session->flashdata('info-message_error')))
         {?>
         <div class="alert alert-danger">
            <button class="close" data-dismiss="alert">&times;</button>
            <strong><?php echo $this->session->flashdata('info-message_error');?></strong>
         </div>
         <?php } ?>
            <center>

            <h3>Video View <br> Login to your account</h3></center>
            
            <hr/>
            <div class="form-group">
               <div class="controls">
                  <input type="text" placeholder="Username" name="username" class="form-control" required="" />
               </div>
            </div>
            <div class="form-group">
               <div class="controls">
                  <input type="password" placeholder="Password" name="password" class="form-control" required="" />
               </div>
            </div>
            <div class="form-group">
               <div class="controls">
                  <button type="submit" class="btn btn-orange form-control">Sign In</button>
               </div>
            </div>
         </form>
         <!-- END Login Form -->
      </div>
      <!-- END Main Content -->
      <!--basic scripts-->
      <script src="../../ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <script>window.jQuery || document.write('<script src="<?php echo base_url();?>assets/admin/assets/jquery/jquery-2.1.1.min.js"><\/script>')</script>
      <script src="<?php echo base_url();?>assets/admin/assets/bootstrap/js/bootstrap.min.js"></script>
   </body>
</html>