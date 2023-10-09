<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Home Rental</title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ url('assets/revamp') }}/images/dashboard/logo.png" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ url('assets/admin') }}/css/bootstrap.min.css">
    <!-- Typography CSS -->
    <link rel="stylesheet" href="{{ url('assets/admin') }}/modules/select2/dist/css/select2.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.css">
    <link rel="stylesheet" href="{{ url('assets/admin') }}/css/typography.css">
    <!-- Style CSS -->
    <link rel="stylesheet" href="{{ url('assets/admin') }}/css/style.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="{{ url('assets/admin') }}/css/responsive.css">

    <link rel="stylesheet" href="../../../../cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">

    <link href="{{ url('assets/admin') }}/node_modules/select2/dist/css/select2.min.css" rel="stylesheet" type="text/css" />
    <link href="{{ url('assets/admin') }}/node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css" rel="stylesheet" />
    <link href="{{ url('assets/admin') }}/node_modules/multiselect/css/multi-select.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="{{ url('/assets') }}/admin/css/fancybox.css">
    <style>
        .fixed-layout .page-wrapper {
            margin: 0;
            padding: 0;
        }

        .inbox-panel ul li {
            display: flex;
            align-items: center;
        }

        .bootstrap-tagsinput {
            background-color: #fff;
            border: 1px solid #e9ecef;
            box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
            display: inline-block;
            padding: 8px 6px;
            color: #555;
            vertical-align: middle;
            border-radius: 4px;
            max-width: 100%;
            line-height: 22px;
            cursor: text;
            width: 100%;
        }
        .bootstrap-tagsinput .tag {
    margin-right: 2px;
    color: white;
    background: #ff7a29;
    padding: 0px;
}
    </style>
</head>

<body class="iq-page-menu-horizontal sidebar-main sidebar-dark bg-dark text-white"> {{--  class="sidebar-main-active right-column-fixed header-top-bgcolor" --}}
    <?php
        $previous = "javascript:history.go(-1)";
    if (isset($_SERVER['HTTP_REFERER'])) {
        $previous = $_SERVER['HTTP_REFERER'];
    }
    ?>
    <!-- loader Start -->
    <div id="loading">
        <div id="loading-center">

        </div>
    </div>
    <!-- loader END -->
    <!-- Wrapper Start -->
    <div class="wrapper">
        <!-- Sidebar  -->
        @include('admin.master.sidebar')
        <!-- Sidebar  -->
        <!-- TOP Nav Bar -->
        <div class="iq-top-navbar bg-dark text-white">
            <div class="iq-navbar-custom d-flex align-items-center justify-content-between">
                <div class="iq-sidebar-logo">
                    <div class="top-logo">
                        <a href="{{ url('/admin') }}" class="logo">
                            <img src="{{ url('assets/revamp') }}/images/dashboard/logo.png" alt="">
                        </a>
                    </div>
                </div>
                <div class="iq-menu-horizontal">
                    <nav class="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" class="iq-menu d-flex">
                            <li>
                                <a href="{{ url('/admin') }}" class="iq-waves-effect collapsed"><i
                                        class="ri-home-line"></i><span>Dashboard</span></a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i class="ri-menu-3-line"></i>
                    </button>
                    <div class="iq-menu-bt align-self-center">
                        <div class="wrapper-menu">
                            <div class="main-circle"><i class="ri-arrow-left-s-line"></i></div>
                            <div class="hover-circle"><i class="ri-arrow-right-s-line"></i></div>
                        </div>
                    </div>
                    <ul class="navbar-list">
                        <li>
                            <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">
                                @guest
                                 @else   
                                 <!--{{ Auth::user()->name }} {{ Auth::user()->last_name }}-->
                                 {{-- <img src="{{ url('assets/revamp') }}/images/users/{{ Auth::user()->image }}" class="img-fluid rounded mr-3" alt="user"> --}}
                                @endguest
                            </a>
                            <div class="iq-sub-dropdown iq-user-dropdown">
                                <div class="iq-card shadow-none m-0">
                                    <div class="iq-card-body p-0 ">
                                        <div class="d-inline-block w-100 text-center p-3">
                                            <a class="btn btn-primary dark-btn-primary" href="{{ route('logout') }}" onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();"
                                                role="button">Sign out<i class="ri-login-box-line ml-2"></i></a>
                                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                                    @csrf
                                                </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- TOP Nav Bar END -->


        @yield('content')

        @include('admin.master.footer')