@extends('admin.master.header')
@section('content')
    <div id="content-page" class="content-page account-area dashboard-page">
        <div class="container-fluid">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.php">Admin</a></li>
                    <li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
                </ol>
            </nav>
            <div class="row">

                @if (session()->has('message'))
                    <div class="col-md-12">
                        <div class="alert text-white bg-success" role="alert">
                            <div class="iq-alert-text">{{ Session::get('message') }} <a
                                    href="{{ url('/viewchildcategory') }}">Show All ChildCategory</a></div>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <i class="ri-close-line"></i>
                            </button>
                        </div>
                    </div>
                @endif

                <div class="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div class="iq-card">
                        <div class="iq-card-header" style="min-height: 435px;">
                            <h2>Add ChildCategory</h2>
                            <form action="{{ url('/addedchildcategory') }}" method="post" autocomplete="off"
                                enctype="multipart/form-data">
                                @csrf

                                <div class="form-group">
                                    <label class="control-label exp-label">Select Category:</label>
                                    <select name="cat_id" id="showdescription" class="form-control select2" required>
                                        @if (old('cat_id') != null)
                                            <option>{{ old('cat_id') }}</option>
                                        @else
                                            <option value="">Select</option>
                                        @endif
                                        @foreach ($categorydropdown as $dropdown)
                                            <option value="{{ $dropdown->id }}">{{ $dropdown->name }}</option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label class="control-label exp-label">Select SubCategory:</label>
                                    <select name="subcat_id" class="form-control select2 showsubcategory" required>
                                        <option value="">Select</option>

                                    </select>
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" name="childcategory_name"
                                        placeholder="SubCategory Name" value="{{ old('childcategory_name') }}">
                                    @error('childcategory_name')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="custom-file">
                                  <input type="file" class="custom-file-input" accept="image/*" name="category_image"
                                      onchange="loadFile(event)">

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
                            </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>  
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css'></link>  

        <script src="{{ asset('jquery-3.5.0.min.js') }}"></script>
    <script src="{{ asset('main.js') }}"></script> --}}
@endsection
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
    $(document).ready(function() {
        //WORK START
        $('#showdescription').change(function() {
            var query = $(this).val();
            // alert(query);
            $.ajax({
                url: "{{ url('/subcategoryrecord') }}?query=" + query,
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    if (data == 'none') {} else {

                        $('.showsubcategory').html(data.output);


                    }
                }
            });
        });
        // WORK END
        $(".select2").select2();

    });
</script>





<script>
    var loadFile = function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            var output = document.getElementById('output');
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
</script>
