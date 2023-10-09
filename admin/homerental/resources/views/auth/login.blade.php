<!DOCTYPE html>
<html class="no-js" lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <META HTTP-EQUIV="Pragma" CONTENT="no-cache">
    <META HTTP-EQUIV="Expires" CONTENT="-1">
    <META HTTP-EQUIV="imagetoolbar" CONTENT="no">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta charset="UTF-8">
    <meta name="description"
        content="A convenient way of searching for properties through the service of virtual viewing.">
    <meta name="keywords"
        content="Virtual viewing, live showing, home tour, live video tour, honest photography, home and rentals">
    <meta name="author" content="">
    <title>A virtual walk through desired properties | Video View Homes and Things</title>
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/png"
        href="http://www.videoviewhomesandrentals.com/assets/uploads/logo/logo162043290174163466960570.png">
    <meta name="keywords"
        content="Virtual viewing, live showing, home tour, live video tour, honest photography, home and rentals">
    <meta name="description"
        content="A convenient way of searching for properties through the service of virtual viewing.">
    <!-- Google Fonts -->
    <!--<link href="" rel="stylesheet">-->
    <!-- Loading css file -->
    <link href="{{ url('/') }}/assets2/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="{{ url('/') }}/assets2/css/style.css" rel="stylesheet" type="text/css" />
    <!-- <link href="assets/css/font-awesome.min.css" rel="stylesheet" type="text/css" /> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

    <link href="{{ url('/') }}/assets2/css/glider.min.css" rel="stylesheet" type="text/css" />
    <link href="{{ url('/') }}/assets2/css/glider.css" rel="stylesheet" type="text/css" />
    <link href="{{ url('/') }}/assets2/css/toastr.css" rel="stylesheet" type="text/css" />
    <script src="{{ url('/') }}/assets2/js/jquery.min.js"></script>
    <link rel="stylesheet" href="assets/css/fbstyle.css" />
    <script src="{{ url('/') }}/assets2/js/jquery.fancybox.min.js"></script>
    <script type="text/javascript">
    var base_url = "/";
    </script>
    <!-- <script type="text/javascript" charset="utf-8" id="zm-extension" src="chrome-extension://fdcgdnkidjaadafnichfpabhfomcebme/scripts/webrtc-patch.js" async=""></script> -->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    <!-- Fonts Links -->
    <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,600,700,800,900&amp;display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&amp;display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Satisfy&amp;display=swap" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&amp;display=swap"
        rel="stylesheet">
</head>

<body class="responsive" data-gr-c-s-loaded="true">
    <div id="preloader" style="display:none;">
        <div class="loading">
            <span>Loading...</span>
        </div>
    </div>
    <style>
    /* section.submit-property select {
    border: none;
    width: 80%;
    position: absolute;
    border-bottom: 2px solid #80808061;
    font-family: 'Play', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
} */

    .submit-property {
        background: url(assets/images/login-bg.jpg) !important;
        height: 100vh !important;
        display: flex;
        align-items: center;
        background-size: cover !important;
        background-position: center;
    }

    section.submit-property {
        background: #efefef;
    }

    .sumbitpropertybox {
        background-color: #ffffff;
        padding: 100px 0;
        border-radius: 0;
        box-shadow: none;
        border: 1px solid #ffffff3d;

    }

    section.submit-property .row {
        box-shadow: 0 0 10px #0002;
    }

    section.submit-property .form-control {
        background: none;
        padding: 12px 12px 12px 40px;
        color: #000;
        border-color: #ddd;

    }

    section.submit-property form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 42%;
        margin: 0 auto;
    }

    section.submit-property i.fa.fa-user {
        color: #919191;
        font-size: 19px;
    }

    section.submit-property .loginuser i,
    section.submit-property .passworduser i {
        position: absolute;
        top: 25px;
        left: 15px;
        transform: translateY(-50%);
        color: #6e6e6e;
    }

    section.submit-property .col-lg-3 {
        background: linear-gradient(45deg, #05595B, #062C30), url(assets/images/login.jpg) !important;
        background-position: center;
        background-blend-mode: multiply;

        background-size: cover !important;
    }

    section.submit-property .col-lg-9 {
        padding: 0%;
    }

    .navbar-brand {
        margin: 0 0 30px;
        display: flex;
        flex-direction: column;
    }

    .Logo {
        color: #000;
        font-weight: 600;
    }

    .sumbitpropertybox h3 {
        font-family: 'Play', sans-serif;
        font-size: 34px;
        line-height: 1;
        font-weight: 600;
        margin-bottom: 25px;
        text-align: center;
        color: #000;
    }

    section.submit-property .form-control::placeholder {
        color: #0006;
    }
section.submit-property input:-webkit-autofill,
section.submit-property input:-webkit-autofill:hover,
section.submit-property input:-webkit-autofill:focus,
section.submit-property textarea:-webkit-autofill,
section.submit-property textarea:-webkit-autofill:hover,
section.submit-property textarea:-webkit-autofill:focus,
section.submit-property select:-webkit-autofill,
section.submit-property select:-webkit-autofill:hover,
section.submit-property select:-webkit-autofill:focus {
    border: 1px solid #ddd;
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: none;
    transition: background-color 5000s ease-in-out 0s;
}
    @media (max-width:600px) {
        .sumbitpropertybox {
            padding: 70px 30px;
        }

        .submit-property {
            padding: 0 !important;
        }
    }
    </style>
    <!-- Submit Login Form start -->
    <section class="submit-property">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
                    <div class="sumbitpropertybox">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf
                            <a href="#" class="navbar-brand">
                                <h4 class="Logo">Video View</h4>
                                <h4 class="Logo">Homes And Things</h4>
                            </a>
                            <h3>Welcome Back</h3>
                            <div class="loginuser w-100">
                                <i class="fa fa-user"></i>
                                <input type="email" class="form-control" id="email" name="email" value="{{ old('email') }}" placeholder="Enter Your Email*" required="" autocomplete="email" autofocus="">
                                @error('email')
                                <span class="text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                            </div>
                            <div class="passworduser w-100">
                                <i class="fa fa-envelope"></i>
                                <input type="password" id="password" class="form-control" name="password"
                                    placeholder="Password*" required="" autocomplete="current-password">
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <button type="submit" class="right-align fileloginbtn">LOGIN</button>
                            <!-- <a href="javascript:void(0);" data-fancybox data-animation-duration="700"
                                data-src="#animatedModal"><i class="fa fa-key " aria-hidden="true">Reset
                                    password</i></a> -->
                            <a href="{{ url('/register') }}"><i class="" aria-hidden="true">Create New Account?</i></a>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 mob-none">
                </div>
            </div>
        </div>
    </section>
    <!-- Submit Login Form end -->

    <!-- Fancy Forgot Password -->
    <div class="grid">
        <div style="display: none;" id="animatedModal" class="animated-modal">
            <h2 class="forgettestingtext">Reset Your Password?</h2>
            <form action="javascript:void(0)" id="forgot-form1">
                <div class="modal-body form-group">
                    <input class="form-control" name="signup[signup_email]" type="email" placeholder="Email"
                        autocomplete="off">
                    <p>
                        <script src='../www.google.com/recaptcha/api.js'></script>



                    <div class="g-recaptcha" data-sitekey="6Le8PK8cAAAAAOjwHeo92PvLHOKUM5Mo8fOiIJHl"></div>

                    </p>
                </div>

                <div id="formFooter">
                    <a class="underlineHover forgot-sendie" href="javascript:void(0);">Send</a>
                </div>
            </form>
        </div>
    </div>
    <!-- END -->

    <script>
    $('.forgot-sendie').on('click', function(e) {
        console.log("send");
        var data = $("#forgot-form1").serialize();
        var url = base_url + 'user/forgot';

        var response = AjaxRequest.fire(url, data);
        if (response.status) {
            setTimeout(function() {
                $(location).attr('href', window.location.href);
            }, 3000);
        }
    });
    </script>
    <!-- Js Files Start -->
    <script src="{{ url('/') }}/assets2/js/jquery.fancybox.min.js"></script>
    <script src="{{ url('/') }}/assets2/js/jquery.mixitup.min.js"></script>
    <script src="{{ url('/') }}/assets2/js/bootstrap.min.js"></script>
    <script src="{{ url('/') }}/assets2/js/slick.min.js"></script>
    <script src="{{ url('/') }}/assets2/js/glider.min.js"></script>
    <script src="{{ url('/') }}/assets2/js/glider.js"></script>
    <script src="{{ url('/') }}/assets2/js/custom.js"></script>
    <script src="{{ url('/') }}/assets2/js/toastr.js"></script>
    <script src="{{ url('/') }}/assets2/js/tkd_script.js"></script>
    <!-- <script src="assets/js/ca-script.js"></script>/ -->
    <script>
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
    $(document).ready(function() {
        var quantitiy = 0;
        $('.quantity-right-plus').click(function(e) {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            // If is not undefined
            $('#quantity').val(quantity + 1);
            // Increment
        });
        $('.quantity-left-minus').click(function(e) {
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            // If is not undefined
            // Increment
            if (quantity > 0) {
                $('#quantity').val(quantity - 1);
            }
        });
    });
    </script>
</body>

</html>