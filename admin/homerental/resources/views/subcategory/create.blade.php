@extends('admin.master.header')
@section('content')
    <div id="content-page" class="content-page account-area dashboard-page">
        <div class="container-fluid">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                    <li class="breadcrumb-item">Subcategory</li>
                    <li class="breadcrumb-item">Add Subcategory</li>
                </ol>
            </nav>
            <div class="row">
                @if (session()->has('message'))
                    <div class="col-md-12">
                        <div class="alert text-white bg-success" role="alert">
                            <div class="iq-alert-text">{{ Session::get('message') }} <a
                                    href="{{ route('subcategories') }}">Show All Subcategories</a></div>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <i class="ri-close-line"></i>
                            </button>
                        </div>
                    </div>
                @endif

                <div class="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div class="iq-card">
                        <div class="iq-card-header" style="min-height: 285px;">

                            <h2>Add Subcategory</h2>

                            <form action="{{ route('create-subcategory') }}" method="post" autocomplete="off"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <select class="custom-select" name="parent_id">
                                      @foreach($categories as $category)
                                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                                      @endforeach
                                    </select>
                                    @error('parent_id')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                
                                <div class="form-group">
                                    <input type="text" class="form-control" name="name"
                                        placeholder="Subcategory Name" value="{{ old('name') }}" required>
                                    @error('name')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" accept="image/*" name="category_image"
                                        onchange="loadFile(event)" required>

                                    <img id="output" width="50px" height="auto"
                                        style="margin-left: 276px;margin-top: 8px;" />
                                    <label class="custom-file-label" for="validatedCustomFile" id="filelabel">Choose
                                        file...</label>
                                    @error('category_image')
                                        {{-- <span class="text-danger">{{ $message }}</span> --}}
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>

                                <div class="form-group">
                                    <br>
                                    <div
                                        class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                        <input type="checkbox" class="custom-control-input bg-success" id="customCheck-2"
                                            name="is_active" value="1">
                                        <label class="custom-control-label" for="customCheck-2">Active</label>
                                    </div>
                                    <br>
                                    <div
                                        class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                        <input type="checkbox" class="custom-control-input bg-success" id="customCheck-3"
                                            name="is_deleted" value="0">
                                        <label class="custom-control-label" for="customCheck-3">Deleted</label>
                                    </div>
                                </div>
                                <!--<div class="form-group">
                                    <br>
                                    <div
                                        class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                        <input type="checkbox" class="custom-control-input bg-success" id="customCheck-3"
                                            name="is_deleted" value="0">
                                        <label class="custom-control-label" for="customCheck-3">Active</label>
                                    </div>
                                </div>-->

                                <button type="submit" class="btn btn-primary mb-2">Submit</button>

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
    var loadFile = function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            var output = document.getElementById('output');
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    $(function() {
        $('input[type="file"]').change(function() {
            name = $(this).val();
            if ($(this).val() != "") {
                $('#filelabel').text(name);
            } else {
                //  $('#filelabel').val(name);
            }
        });
    })
</script>
