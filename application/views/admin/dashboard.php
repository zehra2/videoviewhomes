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
                  <h1><i class="fa fa-file-o"></i> Dashboard</h1>
               </div>
            </div>
            <!-- END Page Title -->
            <!-- BEGIN Breadcrumb -->
            <div id="breadcrumbs">
               <ul class="breadcrumb">
                  <li class="active"><i class="fa fa-home"></i> Home</li>
               </ul>
            </div>
            <!-- END Breadcrumb -->
			<div class="row">
               <div class="col-md-12">
				<h3><center>Welcome to Dashboard</center></h3>
			</div>
            </div>
           
            <?php $this->load->view('admin/includes/admin-footer.php');?>
         </div>
         <!-- END Content -->
      </div>
      <!-- END Container -->
      <!--basic scripts-->
      <?php $this->load->view('admin/includes/admin-script.php');?>
   </body>
</html>