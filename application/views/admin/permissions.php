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
                  <h1><i class="fa fa-file-o"></i> Permissions
                  <a href="<?php echo base_url('admin/home/permissions_detail');?>" class="btn btn-primary" style="float:right">Add New</a>
                  </h1>
                  
               </div>
            </div>
            <!-- END Page Title -->
<style>
    
    .descBlog{
        text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    }
</style>           
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
                        <h3><i class="fa fa-bars"></i> Permissions</h3>
                        <div class="box-tool">
                           <a data-action="collapse" href="#"><i class="fa fa-chevron-up"></i></a>
                           <a data-action="close" href="#"><i class="fa fa-times"></i></a>
                        </div>
                     </div>
                                <div class="table-responsive">
										<table class="table table-striped table-bordered">
											<thead>
												<tr>
													<th class="center">Sno.</th>
													<th>Name</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												<?php 
												if($records){
												    $count=0;
												foreach($records as $data)
												{
												    $count++;
													?>
												<tr>
													<td class="center"><?php echo $count;?></td>
													<td><?php echo $data->name;?></td>
												    <td><a href="<?php echo base_url('admin/home/permissions_detail/'.$data->id);?>" class="btn btn-info">Edit</a>
													| <a href="<?php echo base_url('admin/home/permissions_delete/'.$data->id);?>" class="btn btn-danger">Delete</a></td>
													
												</tr>
												<?php 
											}}else{?>
											    <tr>
											        <td colspan="3">No Records!!!</td>
											    </tr>
											<?php }?>
											</tbody>
										</table>
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
