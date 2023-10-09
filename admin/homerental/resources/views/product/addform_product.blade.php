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
    </style>

    <div id="content-page" class="content-page account-area dashboard-page">
        <div class="container-fluid">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ url('/admin') }}">Admin</a></li>
                    <li class="breadcrumb-item">Product</li>
                </ol>
            </nav>
            <div class="row">
                @if (session()->has('message'))
                    <div class="col-md-12">
                        <div class="alert text-white bg-success" role="alert">
                            <div class="iq-alert-text">{{ Session::get('message') }} <a
                                    href="{{ url('/viewproduct') }}">Show All Product</a></div>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <i class="ri-close-line"></i>
                            </button>
                        </div>
                    </div>
                @endif

                <div class="col-xl-6 offset-xl-3 col-lg-9 offset-lg-3 col-md-10 offset-md-2">
                    <div class="iq-card">
                        <div class="iq-card-header" style="min-height: 770px;">
                            @if (count($errors) > 0)
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            <form action="{{ url('/addedproduct') }}" method="post" autocomplete="off" id="form-id"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="col-form-label">Product Name</label>
                                            <input type="text" class="form-control" name="product_name"
                                                placeholder="Product Name" value="{{ old('product_name') }}" required>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="col-form-label">Category</label>
                                        <select name="cat_id" id="showdescription" class="form-control select2" required>
                                            <option value="">Select</option>

                                            @foreach ($categorydropdown as $dropdown)
                                                <option value="{{ $dropdown->id }}">{{ $dropdown->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="col-form-label  d-block">Country</label>
                                        <select name="country_id" id="showcountry" class="select form-control select2" required>
                                            <option value="">Select Country</option>
                                            @foreach ($country as $item)
                                            <option value="{{ $item->id }}">{{ $item->country }}</option>
                                                
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="col-form-label  d-block">State</label>
                                        <select name="state_id" id="showstate" class="select form-control select2 showstates" required>
                                            <option value="">Select State</option>
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="col-form-label  d-block">City</label>
                                        <select name="city_id" class="select form-control select2 showcity" required>
                                            <option value="">Select City</option>
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">Quantity</label>
                                            <input type="number" class="form-control" name="quantity"
                                                placeholder="Quantity" value="{{ old('quantity') }}">
                                        </div>
                                    </div>
                           
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">Buying Price</label>
                                            <input type="text" class="form-control" name="buying_price"
                                                placeholder="Buying Price" value="{{ old('buying_price') }}">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">Selling Price</label>
                                            <input type="text" class="form-control" name="selling_price"
                                                placeholder="Selling Price" value="{{ old('selling_price') }}" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">Product Discounted</label>
                                            <input type="checkbox" class="d-in-block " value="1" name="is_discounted"
                                                id="planned_yes">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group" id="showdiscountpriceinput" style="display: none;">
                                            <label class="col-form-label  d-block">Discount Price</label>
                                            <input type="text" class="form-control" name="discount_price"
                                                placeholder="Discount Price" value="{{ old('discount_price') }}">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="col-form-label  d-block">Product Attachments</label>
                                        <select name="attach" id="attach_name" class="select form-control select2">
                                            <option value="Images">Images</option>
                                            <option value="Video">Video</option>
                                        </select>
                                    </div>

                                    <div class="col-md-6 imgadd">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">Product Image</label>
                                            <input id="fileupload" name="product_image[]" accept=".png, .jpg, .jpeg"
                                                class="form-group" type="file" multiple="multiple" />
                                            <hr />
                                            <b>Preview</b>
                                            <div id="dvPreview" class="gallery">
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 videoadd">
                                        <div class="form-group">
                                            <label class="col-form-label  d-block">Product Video</label>
                                            <input type="text" class="form-control" name="video"
                                                placeholder="Video link" value="{{ old('video') }}">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-form-label">Description</label>
                                            <textarea name="description" id="" class="form-control" rows="4"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-flex align-items-center">
                                        <div class="form-group">
                                            <label class="col-form-label">Active</label>
                                            <input id="check" type="checkbox" name="is_active" value="1">
                                        </div>
                                    </div>
                                    <div class="text-center d-block col-12">
                                        <button type="submit" class="btn btn-primary">Submit</button>
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

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
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
<script>
    $(document).ready(function() {
        $(".select2").select2();
    });
</script>

<script language="javascript" type="text/javascript">
    $(function() {
        $("#fileupload").change(function() {
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

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
    $(document).ready(function() {
        $("#planned_yes").change(function() {
            if (this.checked) {
                $('#showdiscountpriceinput').show();
            } else {
                $('#showdiscountpriceinput').hide();
            }
        });
    });
</script>


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
            } else {
            }
        });
    });
</script>




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