@extends('admin.master.header')
@section('content')
    <style>
        .gallery {

            width: 300px;
        }

        .gallery img {
            width: 100%;
            height: auto;
            padding: 5px;
        }

        .bootstrap-tagsinput input,
        .select2 {
            display: block;
            width: 100%;
            height: calc(1.5em + 0.75rem + 2px);
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            height: 45px;
            line-height: 45px;
            background: transparent;
            border: 1px solid var(--iq-dark-border);
            font-size: 14px;
            color: var(--iq-body-text);
            border-radius: 8px;
        }

        .bootstrap-tagsinput {

            padding: 0;
            border: none;
        }

        .select2-container--default .select2-selection--single .select2-selection__arrow {
            height: 40px;
        }

        .select2-selection {
            border: none !important;
        }

        textarea {
            resize: none
        }

        .iq-card .iq-card-header {
            padding: 30px;
        }

        form button[type="submit"] {
            font-size: 18px;
            padding: 6px 40px;
            margin: 15px 0 0;
        }

        form {
            margin: 0;
        }

        input.form-control {
            line-height: 23px;

        }

        .videoadd {
            display: none;
        }

        .imgadd {
            display: none;
        }

    </style>
    <div id="content-page" class="content-page account-area dashboard-page">
        <div class="container-fluid">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ url('/admin') }}">Admin</a></li>
                    <li class="breadcrumb-item">Product edit</li>
                </ol>
            </nav>
            <div class="row">

                @if (session()->has('message'))
                    <div class="col-md-12">
                        <div class="alert alert-contrast alert-success alert-dismissible" role="alert">
                            {{-- alert-warning --}}
                            <div class="message">
                                <i class="fas fa-check" aria-hidden="true"></i> &nbsp;
                                <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span
                                        class="mdi mdi-close" aria-hidden="true"></span></button><strong></strong>
                                {{ Session::get('message') }} &nbsp;
                                <a href="{{ url('/viewproduct') }}">Show All Product</a>
                            </div>
                        </div>
                    </div>
                @endif

                <div class="col-xl-6 offset-xl-3 col-lg-9 offset-lg-3 col-md-10 offset-md-2">
                    <div class="iq-card">
                        <div class="iq-card-header" style="min-height: 960px;">
                            <h2>Edit Product</h2>
                            @if (count($errors) > 0)
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            <form action="{{ url('/editedproduct') }}" method="post" autocomplete="off" id="form-id"
                                enctype="multipart/form-data">
                                @csrf
                                <input type="hidden" value="{{ $products->id }}" name="id">
                                <div class="row">

                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="col-form-label">Product Name</label>
                                            <input type="text" class="form-control" name="product_name"
                                                placeholder="Product Name" value="{{ $products->product_name }}">

                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="col-form-label">Category</label>
                                        <select name="cat_id" id="showdescription" class="form-control select2" required>
                                            <option value="{{ $products->cat_id }}">{{ $products->cat_name }}</option>

                                            @foreach ($categorydropdown as $dropdown)
                                                <option value="{{ $dropdown->id }}">{{ $dropdown->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="col-form-label  d-block">Country</label>
                                        <select name="country_id" id="showcountry" class="select form-control select2" required>
                                            
                                            @foreach ($country as $item)
                                            <option value="{{ $item->id }}" @if($item->id==$products->country_id) selected @endif>{{ $item->country }}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="col-form-label  d-block">State</label>
                                        <select name="state_id" id="showstate" class="select form-control select2 showstates" required>
                                            @foreach (App\Models\Product::getstate($products->country_id) as $item)
                                            <option value="{{ $item->id }}" @if($item->id==$products->state_id) selected @endif>{{ $item->region }}</option>
                                            @endforeach
                                            {{-- <option value="{{ $products->state_id }}">{{ App\Models\Product::getstate($products->state_id) }}
                                            </option> --}}
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="col-form-label  d-block">City</label>
                                        <select name="city_id" class="select form-control select2 showcity" required>
                                            @foreach (App\Models\Product::getcity($products->state_id) as $item)
                                            <option value="{{ $item->id }}" @if($item->id==$products->city_id) selected @endif>{{ $item->city }}</option>
                                            @endforeach
                                            {{-- <option value="{{ $products->city_id }}">{{ App\Models\Product::getcity($products->city_id) }}
                                            </option> --}}
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">Quantity</label>
                                            <input type="number" class="form-control" name="quantity"
                                                placeholder="Quantity" value="{{ $products->quantity }}">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">Buying Price</label>
                                            <input type="text" class="form-control" name="buying_price"
                                                placeholder="Buying Price" value="{{ $products->buying_price }}">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">Selling Price</label>
                                            <input type="text" class="form-control" name="selling_price"
                                                placeholder="Selling Price" value="{{ $products->selling_price }}">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">is Discounted</label>
                                            @if ($products->is_discounted == 1)
                                                <input id="check" type="checkbox" name="is_discounted"
                                                    class="planned_yes" value="1" checked>
                                            @else
                                                <input id="check" type="checkbox" name="is_discounted" value="1"
                                                    class="planned_yes">
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group" id="showdiscountpriceinput" style="display: none;">
                                            <label class="col-form-label  d-block">Discount Price</label>
                                            <input type="text" class="form-control" name="discount_price"
                                                placeholder="Discount Price" value="{{ $products->discount_price }}">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="col-form-label  d-block">Product Attachments</label>
                                        <select name="attach" id="attach_name" class="select form-control select2">
                                            @if ($products->product_image)
                                                
                                            <option value="Images">Images</option>
                                            <option value="Video">Video</option>
                                            @else
                
                                            <option value="Video">Video</option>
                                            <option value="Images">Images</option>
                                            @endif
                                        </select>
                                    </div>

                                    <div class="col-md-6 imgadd">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">Product Image</label>
                                            @if (!empty($item->product_image))
                                                @foreach (json_decode($products->product_image) as $img)
                                                    <img src="{{ url('uploads/products/') }}/{{ $img }}" alt=""
                                                        width="50px" height="auto">
                                                @endforeach
                                            @endif
                                            <input type="file" class="form-control multipleimg fileupload"
                                                accept=".png, .jpg, .jpeg" name="product_image[]" id="img"
                                                style="display:none;" multiple />
                                            <label for="img" class="filelabel"><i
                                                    class="far fa-file"></i>Image<br>Click to Choose Another </label>
                                            <hr />
                                            <b>Preview</b>
                                            <div id="dvPreview">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 videoadd">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">Product Video</label>
                                            <input type="text" class="form-control" name="video"
                                                value="{{ $products->video }}" placeholder="Video"
                                                value="{{ old('video') }}">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-form-label">Description</label>
                                            <textarea name="description" id="" class="form-control" rows="4">{{ $products->description }}</textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-flex align-items-center">
                                        <div class="form-group">
                                            <label class="col-form-label">Active</label>
                                            @if ($products->is_active == 1)
                                                <input id="check" type="checkbox" name="is_active" value="1" checked>
                                            @else
                                                <input id="check" type="checkbox" name="is_active" value="1">
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-12 text-center">
                                        <button type="submit" class="btn btn-primary">Edit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
    $(document).ready(function() {
        $("#attach_name").change(function() {

            var dataa = $(this).val();
            // alert(data);
            if (dataa == "Images") {
                $('.imgadd').show();
                $('.videoadd').hide();
            } else if (dataa == "Video") {
                $('.videoadd').show();
                $('.imgadd').hide();
            } else {}
        });
    });
</script>


@if ($products->video)
    <script>
        $(document).ready(function() {
            $('.videoadd').show();
        
        });
    </script>
@endif


@if ($products->product_image)
    <script>
        $(document).ready(function() {
            $('.imgadd').show();
       
        });
    </script>
@endif
<script>
    $(document).ready(function() {
        $(".select2").select2();
    });
</script>
<script>
    $(window).ready(function() {
        $("#form-id").on("keypress", function(event) {
            console.log("aaya");
            var keyPressed = event.keyCode || event.which;
            if (keyPressed === 13) {
                // alert("You pressed the Enter key!!");
                event.preventDefault();
                return false;
            }
        });
    });
</script>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script language="javascript" type="text/javascript">
    $(function() {
        $(".fileupload").change(function() {
            if (typeof(FileReader) != "undefined") {
                var dvPreview = $("#dvPreview");
                dvPreview.html("");
                var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
                $($(this)[0].files).each(function() {
                    var file = $(this);
                    if (regex.test(file[0].name.toLowerCase())) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            var img = $("<img />");
                            img.attr("style", "height:100px;width: 100px");
                            img.attr("src", e.target.result);
                            dvPreview.append(img);
                        }
                        reader.readAsDataURL(file[0]);
                    } else {
                        // alert(file[0].name + " is not a valid image file.");
                        dvPreview.html("");
                        return false;
                    }
                });
            } else {
                alert("This browser does not support HTML5 FileReader.");
            }
        });
    });
</script>
<script>
    $(function() {
        $('.multipleimg').change(function() {
            name = $(this).val();
            if ($(this).val() != "") {
                $('.filelabel').text(name);
            } else {
                //  $('#filelabel').val(name);
            }
        });
    })
</script>

@if ($products->is_discounted == 1)
    <script>
        $(document).ready(function() {

            $('#showdiscountpriceinput').show();
            $(".planned_yes").change(function() {
                if (this.checked) {
                    $('#showdiscountpriceinput').show();
                } else {
                    $('#showdiscountpriceinput').hide();
                }

            });

        });
    </script>
@else
    <script>
        $(document).ready(function() {

            // $('#showdiscountpriceinput').show();

            $(".planned_yes").change(function() {
                if (this.checked) {
                    $('#showdiscountpriceinput').show();
                } else {
                    $('#showdiscountpriceinput').hide();
                }

            });

        });
    </script>
@endif



<script>
    $(document).ready(function() {
        //WORK START
        $('#showcountry').change(function() {

            var query = $(this).val();
            // alert(query);
            $.ajax({
                url: "{{ url('/showstates') }}?query=" + query,
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    if (data == 'none') {} else {
                        $('.showstates').html(data.output);
                    }
                }
            });
        });
        // WORK END

    });
</script>


<script>
    $(document).ready(function() {
        
        $('#showstate').change(function() {

            var query = $(this).val();
           
            $.ajax({
                url: "{{ url('/showcity') }}?query=" + query,
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    if (data == 'none') {} else {

                        $('.showcity').html(data.output);

                    }
                }
            });
        });
        

    });
</script>