<!DOCTYPE html>   
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>HelpDesk | Welcome to HelpDesk</title>

    <meta name="description" content="Amdesk - Help Center HTML template for your digital products">
    <meta name="keywords" content="helpdesk, forum, template, HTML template, responsive, clean">
    <meta name="author" content="nK">

    <link rel="icon" type="image/png" href="{{ asset('assets/images/favicon.png') }}">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- START: Styles -->

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700%7cMaven+Pro:400,500,700" rel="stylesheet"><!-- %7c -->

    <!-- Bootstrap -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/bootstrap/dist/css/bootstrap.min.css') }}">

    <!-- Fancybox -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/fancybox/dist/jquery.fancybox.min.css') }}">

    <!-- Pe icon 7 stroke -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css') }}">

    <!-- Swiper -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendor/swiper/dist/css/swiper.min.css') }}">

    <!-- Bootstrap Select -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css') }}">

    <!-- Dropzone -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendor/dropzone/dist/min/dropzone.min.css') }}">

    <!-- Quill -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendor/quill/dist/quill.snow.css') }}">

    <!-- Font Awesome -->
    <script defer src="{{ asset('assets/vendor/fontawesome-free/js/all.js') }}"></script>
    <script defer src="{{ asset('assets/vendor/fontawesome-free/js/v4-shims.js') }}"></script>

    <!-- Amdesk -->
    <link rel="stylesheet" href="{{ asset('assets/css/amdesk.min.css') }}">

    <!-- Custom Styles -->
    <link rel="stylesheet" href="{{ asset('assets/css/custom.css') }}">
    
    <!-- END: Styles -->

    <!-- jQuery -->
    <script src="{{ asset('assets/vendor/jquery/dist/jquery.min.js') }}"></script>
    
    
</head>


<body>
    
    @include('front.includes.navbar')

    @yield('content')
    <!-- START: Scripts -->

    <!-- Object Fit Images -->
    <script src="assets/vendor/object-fit-images/dist/ofi.min.js"></script>

    <!-- Popper -->
    <script src="assets/vendor/popper.js/dist/umd/popper.min.js"></script>

    <!-- Bootstrap -->
    <script src="assets/vendor/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Fancybox -->
    <script src="assets/vendor/fancybox/dist/jquery.fancybox.min.js"></script>

    <!-- Cleave -->
    <script src="assets/vendor/cleave.js/dist/cleave.min.js"></script>

    <!-- Validator -->
    <script src="assets/vendor/validator/validator.min.js"></script>

    <!-- Sticky Kit -->
    <script src="assets/vendor/sticky-kit/dist/sticky-kit.min.js"></script>

    <!-- Jarallax -->
    <script src="assets/vendor/jarallax/dist/jarallax.min.js"></script>
    <script src="assets/vendor/jarallax/dist/jarallax-video.min.js"></script>

    <!-- Isotope -->
    <script src="assets/vendor/isotope-layout/dist/isotope.pkgd.min.js"></script>

    <!-- ImagesLoaded -->
    <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>

    <!-- Swiper -->
    <script src="assets/vendor/swiper/dist/js/swiper.min.js"></script>

    <!-- Gist Embed -->
    <script src="assets/vendor/gist-embed/gist-embed.min.js"></script>

    <!-- Bootstrap Select -->
    <script src="assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>

    <!-- Dropzone -->
    <script src="assets/vendor/dropzone/dist/min/dropzone.min.js"></script>

    <!-- Quill -->
    <script src="assets/vendor/quill/dist/quill.min.js"></script>

    <!-- The helpdesk -->
    <script src="assets/js/helpdesk.min.js"></script>
    <script src="assets/js/helpdesk-init.js"></script>
    <!-- END: Scripts -->    
</body>
</html>
