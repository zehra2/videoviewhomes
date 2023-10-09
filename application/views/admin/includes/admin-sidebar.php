<div id="sidebar" class="navbar-collapse collapse">
  <?php $uri_query=$this->uri->segment(3);?>
   <!-- BEGIN Navlist -->
   <ul class="nav nav-list">
      <li class="<?php if($uri_query=='dashboard'){echo 'active';}?>">
         <a href="<?php echo base_url('admin');?>">
         <i class="fa fa-dashboard"></i>
         <span>Dashboard</span>
         </a>
      </li>
      <li class="<?php if($uri_query=='heading'){echo 'active';}?>">
         <a href="<?php echo base_url('admin/home/heading');?>">
         <i class="fa fa-check-square-o"></i>
         <span>Header Video</span>
         </a>
      </li>
      <li class="<?php if($uri_query=='investment'){echo 'active';}?>">
         <a href="<?php echo base_url('admin/home/investment');?>">
         <i class="fa fa-check-square-o"></i>
         <span>Investment Projects</span>
         </a>
      </li>
      <li class="<?php if($uri_query=='category'){echo 'active';}?>">
         <a href="<?php echo base_url('admin/home/category');?>">
         <i class="fa fa-check-square-o"></i>
         <span>Category</span>
         </a>
      </li>
      <li class="<?php if($uri_query=='subcategory'){echo 'active';}?>">
         <a href="<?php echo base_url('admin/home/subcategory');?>">
         <i class="fa fa-check-square-o"></i>
         <span>Sub Category</span>
         </a>
      </li>
      <li class="<?php if($uri_query=='vendors'){echo 'active';}?>">
         <a href="<?php echo base_url('admin/home/vendors');?>">
         <i class="fa fa-check-square-o"></i>
         <span>Vendors</span>
         </a>
      </li>
      <li class="<?php if($uri_query=='users'){echo 'active';}?>">
         <a href="<?php echo base_url('admin/home/users');?>">
         <i class="fa fa-check-square-o"></i>
         <span>Users</span>
         </a>
      </li>
      <li class="<?php if($uri_query=='plans'){echo 'active';}?>">
         <a href="<?php echo base_url('admin/home/plans');?>">
         <i class="fa fa-check-square-o"></i>
         <span>Plans</span>
         </a>
      </li>
      <li class="<?php if($uri_query=='plans_subscribe'){echo 'active';}?>">
         <a href="<?php echo base_url('admin/home/plans_subscribe');?>">
         <i class="fa fa-check-square-o"></i>
         <span>Plans Subscription</span>
         </a>
      </li>
       <li class="<?php if($uri_query=='permissions'){echo 'active';}?>">
         <a href="<?php echo base_url('admin/home/permissions');?>">
         <i class="fa fa-check-square-o"></i>
         <span>Permissions</span>
         </a>
      </li>
     
      
   </ul>
   <!-- END Navlist -->
   <!-- BEGIN Sidebar Collapse Button -->
   <div id="sidebar-collapse" class="visible-lg">
      <i class="fa fa-angle-double-left"></i>
   </div>
   <!-- END Sidebar Collapse Button -->
</div>
