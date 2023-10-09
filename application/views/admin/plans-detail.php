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
                  <h1><i class="fa fa-file-o"></i> Plans Detail</h1>
               </div>
            </div>
            <!-- END Page Title -->
<?php 
if($row){
    $id = $row->id;
    $type = $row->type;
    $name = $row->name;
    $amount = $row->amount;
    $title = $row->title;
    $text = $row->text;
    $date = $row->created_at;
    $max_service = $row->max_service;
    $max_product = $row->max_product;
}else{
    $id = '';
    $type = '';
    $name = '';
    $amount = '';
    $title = '';
    $text = '';
    $date = '';
    $max_service = 0;
    $max_product = 0;
}



?>

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
                        <h3><i class="fa fa-bars"></i> Plans</h3>
                        <div class="box-tool">
                           <a data-action="collapse" href="#"><i class="fa fa-chevron-up"></i></a>
                           <a data-action="close" href="#"><i class="fa fa-times"></i></a>
                        </div>
                     </div>
                     <div class="box-content">
                        <form action="<?php echo base_url('admin/home/savePlans');?>" class="form-horizontal" method="post" enctype="multipart/form-data">
                           <div class="form-group">
                              <label class="col-sm-3 col-lg-2 control-label">Plan Type: </label>
                              <div class="col-sm-9 col-lg-10 controls">
                                 <select class="form-control " name="type" required>
                                     <option vaule="">Select Plans Type</option>
                                        <option value="1" <?php echo ($type==1)?'selected':'';?>>Yearly</option>
                                        <option value="2" <?php echo ($type==2)?'selected':'';?>>Monthly</option>
                                 </select>
                              </div>
                           </div>
                           <div class="form-group">
                              <label class="col-sm-3 col-lg-2 control-label">Name: </label>
                              <div class="col-sm-9 col-lg-10 controls">
                                 <input class="form-control " name="name" required="" value="<?php echo $name;?>">
                              </div>
                           </div>
                          <div class="form-group">
                              <label class="col-sm-3 col-lg-2 control-label">Amount: </label>
                              <div class="col-sm-9 col-lg-10 controls">
                                 <input class="form-control " type="number" name="amount" class="amount" required="" value="<?php echo $amount;?>">
                              </div>
                           </div>
                           <div class="form-group">
                               <label class="col-sm-3 col-lg-2 control-label">Text: </label>
                               <div class="col-sm-9 col-lg-10 controls">
                                   <textarea class="form-control " name="title" rows="3" required=""><?php echo $title;?></textarea>
                               </div>
                           </div>
                           <div class="form-group">
                               <label class="col-sm-3 col-lg-2 control-label">Description: </label>
                               <div class="col-sm-9 col-lg-10 controls">
                                   <textarea class="form-control ckeditor" name="text" rows="3" required=""><?php echo $text;?></textarea>
                               </div>
                           </div>
                           <div class="form-group">
                              <label class="col-sm-3 col-lg-2 control-label">Max Service: </label>
                              <div class="col-sm-9 col-lg-10 controls">
                                 <input class="form-control " type="number" name="max_service" class="max_service" required="" value="<?php echo $max_service;?>">
                              </div>
                           </div>
                           <div class="form-group">
                              <label class="col-sm-3 col-lg-2 control-label">Max Product: </label>
                              <div class="col-sm-9 col-lg-10 controls">
                                 <input class="form-control " type="number" name="max_product" class="max_product" required="" value="<?php echo $max_product;?>">
                              </div>
                           </div>
                           
                           <div class="form-group">
                              <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                                  <input type="hidden" name="id" value="<?php echo $id;?>">
                                 <button type="submit" class="btn btn-black" style="width: 150px;"><i class="fa fa-check"></i> Save</button>
                                 <!---<button type="button" class="btn">Cancel</button>--->
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