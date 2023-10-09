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
                  <h1><i class="fa fa-file-o"></i> Vision</h1>
               </div>
            </div>
            <!-- END Page Title -->
            <!-- BEGIN Breadcrumb -->
            <div id="breadcrumbs">
               <ul class="breadcrumb">
                  <li>
                     <i class="fa fa-home"></i>
                     <a href="<?php echo base_url('admin');?>">Home</a>
                     <span class="divider"><i class="fa fa-angle-right"></i></span>
                  </li>
                  <li class="active">Vision</li>
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
                        <h3><i class="fa fa-bars"></i> Vision</h3>
                        <div class="box-tool">
                           <a data-action="collapse" href="#"><i class="fa fa-chevron-up"></i></a>
                           <a data-action="close" href="#"><i class="fa fa-times"></i></a>
                        </div>
                     </div>
                     <div class="box-content">
                        <form action="<?php echo base_url('admin/home/visioninfo');?>" class="form-horizontal" method="post" enctype="multipart/form-data">
                           <div class="form-group">
                              <label class="col-sm-3 col-lg-2 control-label">Content: </label>
                              <div class="col-sm-9 col-lg-10 controls">
                                 <textarea class="form-control ckeditor" name="content" rows="3" required=""><?php echo $select['description'];?></textarea>
                              </div>
                           </div>
                           <div class="form-group">
                              <label class="col-sm-3 col-lg-2 control-label">Image</label>
                              <div class="col-sm-9 col-lg-10 controls">
                                 <div class="fileupload fileupload-new" data-provides="fileupload">
                                    <div class="fileupload-new img-thumbnail" style="width: 200px; height: 150px;">
                                       <?php if($select['image'])
                                       {
                                          $path=base_url('assets/img/about/').$select['image'];
                                       }
                                       else
                                       {
                                          //$path="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image";
                                          $path = base_url()."assets/img/no-image.jpg";
                                       }?>
                                       <img src="<?php echo $path;?>" alt="" />
                                    </div>
                                    <div class="fileupload-preview fileupload-exists img-thumbnail" style="max-width: 200px; max-height: 150px; line-height: 20px;"></div>
                                    <div>
                                       <span class="btn btn-default btn-file"><span class="fileupload-new">Select image</span>
                                       <span class="fileupload-exists">Change</span>
                                       <input type="file" class="file-input" name="image"/></span>
                                       <a href="#" class="btn btn-default fileupload-exists" data-dismiss="fileupload">Remove</a>
                                    </div>
                                 </div>
                                 <span class="label label-important">NOTE!</span>
                                 <span>800*800 image size</span>
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