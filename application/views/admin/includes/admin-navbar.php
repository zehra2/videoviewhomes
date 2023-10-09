<div id="navbar" class="navbar navbar-orange">
   <button type="button" class="navbar-toggle navbar-btn collapsed" data-toggle="collapse" data-target="#sidebar">
   <span class="fa fa-bars"></span>
   </button>
   <a class="navbar-brand" href="#">
   <small>
   <i class="fa fa-desktop"></i>
   Video View
   </small>
   </a>
   <!-- BEGIN Navbar Buttons -->
   <ul class="nav flaty-nav pull-right">
      <li class="user-profile">
         <a data-toggle="dropdown" href="#" class="user-menu dropdown-toggle">
         <?php if(isset($_SESSION['username']))
         {
         	$select_query=$this->db->query("select * from tbl_admin where email='$_SESSION[username]' and admin_password='$_SESSION[password]'");
         	$result_query=$select_query->row_array();
         }?>
         <span class="hhh" id="user_info">
         <?php echo $result_query['admin_name'];?>
         </span>
         <i class="fa fa-caret-down"></i>
         </a>
         <!-- BEGIN User Dropdown -->
         <ul class="dropdown-menu dropdown-navbar" id="user_menu">
            <li><a href="<?php echo base_url('admin/home/change_password');?>"><i class="fa fa-lock"></i>Change Password</a></li>
            <li><a href="<?php echo base_url('admin/logout');?>"><i class="fa fa-clock-o"></i>Logout</a></li>
         </ul>
         <!-- BEGIN User Dropdown -->
      </li>
      <!-- END Button User -->
   </ul>
   <!-- END Navbar Buttons -->
</div>