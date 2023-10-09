<!DOCTYPE html>
<html>
   <head>
      <?php $this->load->view('admin/includes/admin-meta.php');?>
   </head>
   <body class="skin-black">
      <!-- BEGIN Navbar -->
      <?php $this->load->view('admin/includes/admin-navbar.php');?>
      <!-- END Navbar -->
      <!-- BEGIN Container -->
      <div class="container" id="main-container">
         <!-- BEGIN Sidebar -->
         <?php $this->load->view('admin/includes/admin-sidebar.php');?>
         <!-- END Sidebar -->
         <!-- BEGIN Content -->
         <div id="main-content">
            <!-- BEGIN Page Title -->
            <div class="page-title">
               <div>
                  <h1><i class="fa fa-file-o"></i> Change Password</h1>
               </div>
            </div>
            
            <style>
                .inputData1,.inputData2{
                    float:left;
                    width:97%;
                }
                .eyePassword{
                        border: 1px solid #ddd;
                        height: 34px;
                        text-align: center;
                        line-height: 29px;
                        font-size: 19px;
                        cursor: pointer;
                }
                .hides{
                    display:none;
                }
                @media only screen and (max-width: 767px) {
                    .inputData1,.inputData2{
                        float:left;
                        width:92%;
                    }
                }
            </style>
            
            
            <!-- END Page Title -->
            <!-- BEGIN Breadcrumb -->
            <div id="breadcrumbs">
               <ul class="breadcrumb">
                  <li>
                     <i class="fa fa-home"></i>
                     <a href="<?php echo base_url('admin');?>">Home</a>
                     <span class="divider"><i class="fa fa-angle-right"></i></span>
                  </li>
                  <li class="active">Change Password</li>
               </ul>
            </div>
            <!-- END Breadcrumb -->
			<div class="row">
               <div class="col-md-12 m-0">
                  <?php if(!empty($this->session->flashdata('info-message-success')))
                  {?>
                  <div class="alert alert-success">
                     <button class="close" data-dismiss="alert">&times;</button>
                     <strong><?php echo $this->session->flashdata('info-message-success');?></strong>
                  </div>
                  <?php } ?>
                  <?php if(!empty($this->session->flashdata('info-message-error')))
                  {?>
                  <div class="alert alert-danger">
                     <button class="close" data-dismiss="alert">&times;</button>
                     <strong><?php echo $this->session->flashdata('info-message-error');?></strong>
                  </div>
                  <?php } ?>
               </div>
            </div>
            <!-- BEGIN Main Content -->
            <div class="row">
               <div class="col-md-12">
                  <div class="box">
                     <div class="box-title">
                        <h3><i class="fa fa-bars"></i> Change Password</h3>
                        <div class="box-tool">
                           <a data-action="collapse" href="#"><i class="fa fa-chevron-up"></i></a>
                           <a data-action="close" href="#"><i class="fa fa-times"></i></a>
                        </div>
                     </div>
                     <div class="box-content">
                        <form action="<?php echo base_url('admin/home/saveChangePassword');?>" class="form-horizontal" method="post" enctype="multipart/form-data">
                           <div class="form-group">
                              <label class="col-sm-3 col-lg-2 control-label">New Password: </label>
                              <div class="col-sm-9 col-lg-10 controls">
                                 <input class="form-control inputData1" type="password" name="password" required="" >
                                 <div class="eyePassword">
                                     <i class="fa fa-eye showEye1" onclick="showFunction(1)"></i>
                                     <i class="fa fa-eye-slash closeEye1 hides" onclick="closeFunction(1)"></i>
                                 </div>
                              </div>
                           </div>
                           <div class="form-group">
                              <label class="col-sm-3 col-lg-2 control-label">Confirm New Password: </label>
                              <div class="col-sm-9 col-lg-10 controls">
                                 <input class="form-control inputData2" type="password" name="confirm_password" required="" >
                                 <div class="eyePassword">
                                      <i class="fa fa-eye showEye2" onclick="showFunction(2)"></i>
                                     <i class="fa fa-eye-slash closeEye2 hides" onclick="closeFunction(2)"></i>
                                 </div>
                              </div>
                           </div>
                           
                           <div class="form-group">
                              <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                                 <button type="submit" class="btn btn-black"><i class="fa fa-check"></i> Save</button>
                                 <button type="button" class="btn">Cancel</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            
            <script>
                function showFunction(val=1){
                    if(val  == 1){
                        $('.inputData1').attr('type','text');
                        $('.showEye1').addClass('hides');
                        $('.closeEye1').removeClass('hides');
                    }else{
                        $('.inputData2').attr('type','text');
                        $('.showEye2').addClass('hides');
                        $('.closeEye2').removeClass('hides');
                    }
                }
                function closeFunction(val=2){
                    if(val  == 1){
                        $('.inputData1').attr('type','password');
                        $('.showEye1').removeClass('hides');
                        $('.closeEye1').addClass('hides');
                    }else{
                        $('.inputData2').attr('type','password');
                        $('.showEye2').removeClass('hides');
                        $('.closeEye2').addClass('hides');
                    }
                }
            </script>
            <!-- END Main Content -->
            <?php $this->load->view('admin/includes/admin-footer.php');?>
         </div>
         <!-- END Content -->
      </div>
      <!-- END Container -->
      <!--basic scripts-->
      <?php $this->load->view('admin/includes/admin-script.php');?>
   </body>
</html>