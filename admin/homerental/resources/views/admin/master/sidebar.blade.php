<div class="iq-sidebar">
    <div class="iq-sidebar-logo d-flex justify-content-between bg-dark text-white">
       <a href="{{ url('dashboard') }}">
       <div class="iq-light-logo">
          <div class="iq-light-logo">
             <img src="{{ url('assets/revamp') }}/images/dashboard/side-logo.png" class="img-fluid" alt="">
           </div>
             <div class="iq-dark-logo">
                <img src="{{ url('assets/revamp') }}/images/dashboard/side-logo.png" class="img-fluid" alt="">
             </div>
       </div>
       <div class="iq-dark-logo">
          <img src="{{ url('assets/revamp') }}/images/dashboard/side-logo.png" class="img-fluid" alt="">
       </div>
       
       </a>
       <div class="iq-menu-bt-sidebar">
          <div class="iq-menu-bt align-self-center">
             <div class="wrapper-menu">
                <div class="main-circle"><i class="ri-arrow-left-s-line"></i></div>
                <div class="hover-circle"><i class="ri-arrow-right-s-line"></i></div>
             </div>
          </div>
       </div>
    </div>
    <div id="sidebar-scrollbar" class="bg-dark text-white">
       <nav class="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" class="iq-menu">
             <!--<li class="iq-menu-title"><i class="ri-subtract-line"></i><span>Dashboard</span></li>-->
             <li class="active">
                <a href="{{ route('dashboard') }}" class="iq-waves-effect"><i class="ri-home-3-line"></i><span>Dashboard</span></a>
             </li>

            <!--<li class="iq-menu-title"><i class="ri-subtract-line"></i><span>Investment Projects</span></li>-->
             <li>
                <a href="#investinfo" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-folders-fill"></i><span>Investment Projects</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="investinfo" class="iq-submenu collapse bg-dark text-white" data-parent="#iq-sidebar-toggle">
                   <li><a href="{{ route('create-investment') }}"><i class="ri-profile-line"></i>Add</a></li>
                   <li><a href="{{ route('investments') }}"><i class="ri-file-list-line"></i>View</a></li>
                   
                </ul>
             </li>

             <!--<li class="iq-menu-title"><i class="ri-subtract-line"></i><span>Category</span></li>-->
             <li>
                <a href="#categoryinfo" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-file-list-3-fill"></i><span>Category</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="categoryinfo" class="iq-submenu collapse bg-dark text-white" data-parent="#iq-sidebar-toggle">
                   <li><a href="{{ url('/addcategory') }}"><i class="ri-profile-line"></i>Add</a></li>
                   <li><a href="{{ url('/viewcategory') }}"><i class="ri-file-list-line"></i>View</a></li>
                   
                </ul>
             </li>

             <li>
                <a href="#subcategoryinfo" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-file-list-fill"></i><span>SubCategory</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="subcategoryinfo" class="iq-submenu collapse bg-dark text-white" data-parent="#iq-sidebar-toggle">
                   <li><a href="{{ route('create-subcategory') }}"><i class="ri-profile-line"></i>Add</a></li>
                   <li><a href="{{ route('subcategories') }}"><i class="ri-file-list-line"></i>View</a></li>
                   
                </ul>
             </li>

             {{-- <li>
                <a href="#innercategoryinfo" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-shopping-cart-line"></i><span>InnerCategory</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="innercategoryinfo" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                   <li><a href="{{ url('/addchildcategory') }}"><i class="ri-profile-line"></i>Add</a></li>
                   <li><a href="{{ url('/viewchildcategory') }}"><i class="ri-file-list-line"></i>View</a></li>
                   
                </ul>
             </li> --}}

            <!--<li class="iq-menu-title"><i class="ri-subtract-line"></i><span>Vendors</span></li>-->
             <li>
                <a href="#vendorinfo" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-community-line"></i><span>Vendors</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="vendorinfo" class="iq-submenu collapse bg-dark text-white" data-parent="#iq-sidebar-toggle">
                   <li><a href="{{ route('create-vendor') }}"><i class="ri-profile-line"></i>Add</a></li>
                   <li><a href="{{ route('vendors') }}"><i class="ri-file-list-line"></i>View</a></li>
                   
                </ul>
             </li>
             
             <!--<li class="iq-menu-title"><i class="ri-subtract-line"></i><span>Users</span></li>-->
             <li>
                <a href="#userinfo" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-shield-user-fill"></i><span>Users</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="userinfo" class="iq-submenu collapse bg-dark text-white" data-parent="#iq-sidebar-toggle">
                   <li><a href="{{ route('users') }}"><i class="ri-file-list-line"></i>View</a></li>
                   <li><a href="{{ route('create-user') }}"><i class="ri-profile-line"></i>Add</a></li>
                   
                </ul>
             </li>
             
                          <li>
                <a href="#userinf" class="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i class="ri-shield-user-fill"></i><span>Product Service</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="userinf" class="iq-submenu collapse bg-dark text-white" data-parent="#iq-sidebar-toggle">
                   <li><a href="{{ route('ps') }}"><i class="ri-file-list-line"></i>View</a></li>
                   <li><a href="{{ route('uploads') }}"><i class="ri-profile-line"></i>Uploaded Products</a></li>
                   
                </ul>
             </li>
             
          </ul>
       </nav>
       <div class="p-3"></div>
    </div>
 </div>