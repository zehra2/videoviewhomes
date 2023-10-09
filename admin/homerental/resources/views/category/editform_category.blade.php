@extends('admin.master.header')
@section('content')
    <div id="content-page" class="content-page account-area dashboard-page">
        <div class="container-fluid">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ url('/admin') }}">Admin</a></li>
                    <li class="breadcrumb-item">Edit</li>
                </ol>
            </nav>
            <div class="row">
                @if (session()->has('message'))
                    <div class="col-md-12">
                        <div class="alert text-white bg-success" role="alert">
                            <div class="iq-alert-text">{{ Session::get('message') }}
                                {{-- <a
                                    href="{{ url('/viewsubcategory') }}">Show All SubCategory</a> --}}
                            </div>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <i class="ri-close-line"></i>
                            </button>
                        </div>
                    </div>
                @endif
                <div class="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div class="iq-card">
                        <div class="iq-card-header" style="min-height: 364px;">
                            <h2>Edit</h2>
                            <form action="{{ url('/editedcategory') }}" method="post" autocomplete="off"
                                enctype="multipart/form-data">
                                @csrf
                                <input type="hidden" name="id" value="{{ $category->id }}">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="category_name"
                                        placeholder="Category Name" value="{{ $category->name }}">
                                    @error('category_name')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <input type="file" class="form-control" name="category_image" id="img"
                                        style="display:none;" /><i class="far fa-file"></i>
                                    <label for="img" id="filelabel">File:{{ $category->category_image }} <br>Click to
                                        Choose Another </label>
                                    {{-- <input type='file' class="form-control" name="category_image"/> --}}
                                    {{-- @error('category_image')
          <span class="text-danger">{{ $message }}</span>
      @enderror --}}
                                </div>

                                <div class="form-group">
                                    <label class="col-form-label">Active</label>
                                    @if ($category->is_active == 1)
                                        <input id="check" type="checkbox" name="is_active" checked>
                                    @else
                                        <input id="check" type="checkbox" name="is_active">
                                    @endif

                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
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
